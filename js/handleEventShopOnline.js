let htmls, clickAmount=0, total_pages, clicked = 1;
const h4txts=$$('.h4txt');
export const btns = $$('.bl1Sb-btn');
const conditions_sort_links = $$(".hv-prcx a");
export function moveArrowInCatagories(h4txt){
   $('.icx').style.height = h4txt.offsetHeight + 'px';
   $('.icx').style.top = h4txt.offsetTop + 'px';
   $(".h4txt.prd-active").classList.remove("prd-active");
   h4txt.classList.add('prd-active');
}
function moveStateActiveBtns(nbp){
    $('.nbP.active').classList.remove("active");
    nbp.classList.add("active");
}
function setOpacity(start_numberBtn, total_pages, prev_btn, next_btn){
    if(parseFloat(start_numberBtn) == 1){
        prev_btn.style.opacity = 0.5;
        next_btn.style.opacity = 1;
    }
    if(parseFloat(start_numberBtn)>1 && parseFloat(start_numberBtn) < total_pages){
        prev_btn.style.opacity = 1;
        next_btn.style.opacity = 1;
    }
    if(parseFloat(start_numberBtn) == total_pages){
        prev_btn.style.opacity = 1;
        next_btn.style.opacity = 0.5;
    }
}
//Promotion Code
   export function getWidth_promotion_code(promotion){
       const getWidth = promotion.getBoundingClientRect().width;
       return getWidth;
   }
// Suggestion
   export let calculator_promotion_price = (products)=>{
       return products.price - (products.price *products.percent_saleoff/100);
   }
// All Products
  
   // Sort follow keyword of bl1Sb-btn button clicked;
   //function sort
   // descending sort
   export function sort_quantitySold(products){
       let temp;
       for(let x= 0; x<products.length;++x){
           for(let y= x+1;y<products.length;++y){
               if(products[x].quantity_sold < products[y].quantity_sold){
                   temp = products[x]
                   products[x]= products[y];
                   products[y] = temp;
               }
           }
       }
       return products;
   }
   export function sort_AscendingPriceSold(products){
       products.sort(function(a,b){
           //return (a.price - (a.price * a.percent_saleoff/100)) - (b.price - (b.price * b.percent_saleoff/100));
           return calculator_promotion_price(a) - calculator_promotion_price(b);
       })
   }
   export function sort_DescendingPriceSold(products){
       products.sort(function(a,b){
           //return (b.price - (b.price * b.percent_saleoff/100)) - (a.price - (a.price * a.percent_saleoff/100));
           return calculator_promotion_price(b) - calculator_promotion_price(a);
       })
   }
   import {render_products} from "./condition_render_products.js";
   // Catagories in shop
       //Filter products follow keyword of catagories
       export function filter(products){
           const ctPRDs =  $$('.ctPRD'),h4txts=$$('.h4txt');
           const newArrayProducts = new Array;
           products.map(prod=>{
               return newArrayProducts.push(prod);
           })
           const newArrayAscendingSort = new Array;
           products.map(prod=>{
               return newArrayAscendingSort.push(prod);
           })
           const newArrayDescendingSort = new Array;
           products.map(prod=>{
               return newArrayDescendingSort.push(prod);
           })
           let index;
           //handle ctPRDs are clicked (Header Catagories)
           for(let i=1;i<ctPRDs.length;i++){
               sort_quantitySold(newArrayProducts);
               ctPRDs[i].onclick =()=>{
                   moveArrowInCatagories(h4txts[i]);
                   btns[0].classList.add('active');
                   btns.forEach((btn,ind)=>{
                       if(ind!=0){
                           btn.classList.remove('active')
                       }
                   })
                   if(i!=1){
                       index = i-1;
                       htmls = products.map(prod=>{
                           if(ctPRDs[i].getAttribute("data-catagory") == prod.catagories_inshop.toLowerCase()){
                               return render_products(prod);
                           }
                       })
                       $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                       //sort follow pressing btns
                       btns.forEach((btn,ind)=>{
                           btn.onclick = ()=>{
                               if(ind==0){
                                   btn.classList.add('active');
                                   btns.forEach((btn,ind)=>{
                                       if(ind!=0){
                                           btn.classList.remove('active');
                                       }
                                   })
                                   htmls = products.map(prod=>{
                                       if(ctPRDs[i].getAttribute("data-catagory") == prod.catagories_inshop.toLowerCase()){
                                           return render_products(prod);
                                       }
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                               }
                               if(ind==1){
                                   btn.classList.add('active');
                                   btns.forEach((btn,ind)=>{
                                       if(ind!=1){
                                           btn.classList.remove('active');
                                       }
                                   })
                               }
                               if(ind==2){
                                   btns[2].classList.add('active');
                                   btns.forEach((btn,ind)=>{
                                       if(ind!=2){
                                           btn.classList.remove('active');
                                       }
                                   })
                                   htmls = newArrayProducts.map(prod=>{
                                       if(ctPRDs[i].getAttribute("data-catagory") == prod.catagories_inshop.toLowerCase()){
                                           return render_products(prod);
                                       }
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                               }
                           }
                       })
                       //sort low-hight & reverse
                       conditions_sort_links.forEach((link,ind)=>{
                           link.onclick = ()=>{
                               if(ind ==0){
                                   sort_AscendingPriceSold(newArrayAscendingSort);
                                   htmls = newArrayAscendingSort.map(prod=>{
                                       if(ctPRDs[i].getAttribute("data-catagory") == prod.catagories_inshop.toLowerCase()){
                                           return render_products(prod);
                                       }
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                               if(ind == 1){
                                   sort_DescendingPriceSold(newArrayDescendingSort);
                                   htmls = newArrayDescendingSort.map(prod=>{
                                       if(ctPRDs[i].getAttribute("data-catagory") == prod.catagories_inshop.toLowerCase()){
                                           return render_products(prod);
                                       }
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                           }
                       })
                   }
                   if(i==1){
                       index = 0;
                       htmls = products.map(prod=>{
                           return render_products(prod)
                       })
                       $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                       //sort follow pressing btns
                       btns.forEach((btn,ind)=>{
                           btn.onclick = ()=>{
                               if(ind==0){
                                   btn.classList.add('active');
                                   btns.forEach((btn,ind)=>{
                                       if(ind!=0){
                                           btn.classList.remove('active');
                                       }
                                   })
                                   htmls = products.map(prod=>{
                                      return render_products(prod)
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                               }
                               if(ind==1){
                                   btn.classList.add('active');
                                   btns.forEach((btn,ind)=>{
                                       if(ind!=1){
                                           btn.classList.remove('active');
                                       }
                                   })
                               }
                               if(ind==2){
                                   btns[2].classList.add('active');
                                   btns.forEach((btn,ind)=>{
                                       if(ind!=2){
                                           btn.classList.remove('active');
                                       }
                                   })
                                   htmls = newArrayProducts.map(prod=>{
                                       return render_products(prod)
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                               }
                           }
                       })
                       //sort low-hight & reverse
                       conditions_sort_links.forEach((link,ind)=>{
                           link.onclick = ()=>{
                               if(ind ==0){
                                   sort_AscendingPriceSold(newArrayAscendingSort);
                                   htmls = newArrayAscendingSort.map(prod=>{
                                       return render_products(prod);
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                               if(ind == 1){
                                   sort_DescendingPriceSold(newArrayDescendingSort);
                                   htmls = newArrayDescendingSort.map(prod=>{
                                       return render_products(prod)
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                           }
                       })
                   }
                   moveArrowInCatagories(h4txts[index]);
               }
           }
           ///handle h4txts are clicked (left side of body Catagories)
           for(let i =0; i<h4txts.length;++i){
               sort_quantitySold(newArrayProducts);
               h4txts[i].onclick = ()=>{
                   moveArrowInCatagories(h4txts[i]);
                   btns[0].classList.add('active');
                   btns.forEach((btn,index_btn)=>{
                       if(index_btn!=0){
                           btn.classList.remove('active')
                       }
                   })
                   if(i!=0){
                       btns[0].classList.add('active');
                       btns.forEach((btn,index_btn)=>{
                           if(index_btn!=0){
                               btn.classList.remove('active')
                           }
                       })
                       htmls = products.map(prod=>{
                           if(h4txts[i].getAttribute("data-catagories-inshop") == prod.catagories_inshop.toLowerCase()){
                               return render_products(prod);
                           }
                       })
                       $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                       //sort follow pressing btns
                       btns.forEach((btn,index_btn)=>{
                           btn.onclick = ()=>{
                               if(index_btn==0){
                                   btn.classList.add('active');
                                   btns.forEach((btn,index_btn)=>{
                                       if(index_btn!=0){
                                           btn.classList.remove('active');
                                       }
                                   })
                                   htmls = products.map(prod=>{
                                       if(h4txts[i].getAttribute("data-catagories-inshop") == prod.catagories_inshop.toLowerCase()){
                                           return render_products(prod);
                                       }
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                               if(index_btn==1){
                                   btn.classList.add('active');
                                   btns.forEach((btn,index_btn)=>{
                                       if(index_btn!=1){
                                           btn.classList.remove('active');
                                       }
                                   })
                               }
                               if(index_btn==2){
                                   btns[2].classList.add('active');
                                   btns.forEach((btn,index_btn)=>{
                                       if(index_btn!=2){
                                           btn.classList.remove('active');
                                       }
                                   })
                                   htmls = newArrayProducts.map(prod=>{
                                       if(h4txts[i].getAttribute("data-catagories-inshop") == prod.catagories_inshop.toLowerCase()){
                                           return render_products(prod);
                                       }
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                           }
                       })
                       //sort low-hight & reverse
                       conditions_sort_links.forEach((link,ind)=>{
                           link.onclick = ()=>{
                               if(ind ==0){
                                   sort_AscendingPriceSold(newArrayAscendingSort);
                                   htmls = newArrayAscendingSort.map(prod=>{
                                       if(h4txts[i].getAttribute("data-catagories-inshop") == prod.catagories_inshop.toLowerCase()){
                                           return render_products(prod);
                                       }
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                               if(ind == 1){
                                   sort_DescendingPriceSold(newArrayDescendingSort);
                                   htmls = newArrayDescendingSort.map(prod=>{
                                       if(h4txts[i].getAttribute("data-catagories-inshop") == prod.catagories_inshop.toLowerCase()){
                                           return render_products(prod);
                                       }
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                           }
                       })
                   }
                   if(i==0){
                       btns[0].classList.add('active');
                       btns.forEach((btn,index_btn)=>{
                           if(index_btn!=0){
                               btn.classList.remove('active')
                           }
                       })
                       htmls = products.map(prod =>{
                           return render_products(prod);
                       })
                       $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                       //sort follow pressing btns
                       btns.forEach((btn,index_btn)=>{
                           btn.onclick = ()=>{
                               if(index_btn==0){
                                   btn.classList.add('active');
                                   btns.forEach((btn,index_btn)=>{
                                       if(index_btn!=0){
                                           btn.classList.remove('active');
                                       }
                                   })
                                   htmls = products.map(prod=>{
                                       return render_products(prod)
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                               if(index_btn==1){
                                   btn.classList.add('active');
                                   btns.forEach((btn,index_btn)=>{
                                       if(index_btn!=1){
                                           btn.classList.remove('active');
                                       }
                                   })
                               }
                               if(index_btn==2){
                                   btns[2].classList.add('active');
                                   btns.forEach((btn,index_btn)=>{
                                       if(index_btn!=2){
                                           btn.classList.remove('active');
                                       }
                                   })
                                   //sort_quantitySold(products);
                                   htmls = newArrayProducts.map(prod=>{
                                       return render_products(prod)
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                           }
                       })
                       //sort low-hight & reverse
                       conditions_sort_links.forEach((link,ind)=>{
                           link.onclick = ()=>{
                               if(ind ==0){
                                   sort_AscendingPriceSold(newArrayAscendingSort);
                                   htmls = newArrayAscendingSort.map(prod=>{
                                       return render_products(prod);
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                               if(ind == 1){
                                   sort_DescendingPriceSold(newArrayDescendingSort);
                                   htmls = newArrayDescendingSort.map(prod=>{
                                       return render_products(prod)
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                           }
                       })
                   }
               }
           }
       }
       export function sortFollowBtn(products){
           btns.forEach((btn,i)=>{
               btn.onclick = ()=>{
                   if(i<=2){
                       $('.bl1Sb-btn.active').classList.remove('active');
                       btn.classList.add('active');
                       //console.log(getValue(btn));
                       if(i==0){
                           htmls = products.map((prod,ind)=>{
                               if(ind<20){
                                    return render_products(prod);
                               }
                           })
                           $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                       }
                       if(i==2){
                           clickAmount++;
                           const products2 = new Array;
                           products.map((prod,ind)=>{
                               if(ind<20){
                                    products2.push(prod);
                               }
                           })
                           sort_quantitySold(products2);
                           htmls = products2.map((prod,ind)=>{
                               return render_products(prod)
                           })
                           $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                       }
                   }
               }
           })
       }
       export function sortFollowPrice(products){
           const newArrayAscendingSort_20firtsItem = new Array;
           products.map((prod,ind)=>{
                if(ind<20){
                return newArrayAscendingSort_20firtsItem.push(prod);
                }
           })
           const newArrayDescendingSort_20firtsItem = new Array;
           products.map((prod,ind)=>{
               if(ind<20){
                return newArrayDescendingSort_20firtsItem.push(prod);
               }
           })
           conditions_sort_links.forEach((link,ind)=>{
               link.onclick = ()=>{
                   if(ind ==0){
                       sort_AscendingPriceSold(newArrayAscendingSort_20firtsItem);
                       htmls = newArrayAscendingSort_20firtsItem.map((prod,ind)=>{
                        return render_products(prod);
                       })
                       $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                   }
                   if(ind == 1){
                       sort_DescendingPriceSold(newArrayDescendingSort_20firtsItem);
                       htmls = newArrayDescendingSort_20firtsItem.map((prod,ind)=>{
                        return render_products(prod);
                       })
                       $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                   }
               }
           })
       }
 
 // Pagnition
 export function paginition(products){
    let total_pages, maximum_numbers_item_on_per_page = 5,clicked =1, clicked_nbP =0;
    total_pages = Math.ceil(products.length/maximum_numbers_item_on_per_page);
    // Làm tròn số bằng hàm Math.ceil()
    $("#last-number").innerHTML = total_pages;
    //change opacity of btns
    if( $('#start-number').innerHTML == 1){
        $(".sortBy_right .prev-btn").style.opacity = 0.5;
    }
    //handle event when clicked btns
    $(".sortBy_right .prev-btn").onclick = ()=>{
        clicked--;
        if(clicked<=1){
            clicked = 1;
            $('#start-number').innerHTML = clicked;
            $(".sortBy_right .prev-btn").setAttribute("disabled","disabled");
        }
        if(clicked >1){
            $('#start-number').innerHTML = clicked;
            $(".prev-btn").removeAttribute("disabled");  
        }
        $$(".nbP").forEach((btn,ind)=>{
            ind = clicked-1;
            moveStateActiveBtns($$(".nbP")[ind]);
        })
        setOpacity($("#start-number").innerHTML, total_pages,$(".sortBy_right .prev-btn"),$(".sortBy_right .nExt-btn"));
    }
    $('.sortBy_right .nExt-btn').onclick = ()=>{
        clicked++;
        if(clicked <= total_pages ){
                $('#start-number').innerHTML = clicked;
                $(".sortBy_right .nExt-btn").removeAttribute("disabled");
        }
        if(clicked > total_pages){
                clicked =  total_pages;
                $(".sortBy_right .nExt-btn").setAttribute("disabled","disabled");
        }
        
        $$(".nbP").forEach((btn,ind)=>{
            ind = clicked-1;
            moveStateActiveBtns($$(".nbP")[ind]);
        })
        setOpacity($("#start-number").innerHTML, total_pages,$(".sortBy_right .prev-btn"),$(".sortBy_right .nExt-btn"));
    }
    
    //Pagination btns on the footer all-produtcs page
    if(total_pages<5){
        for(let i  = 1; i <= total_pages; ++i){
            htmls = `
                <button class="nbP flex">${i}</button>
            `
            $(".number-page").insertAdjacentHTML("beforeend",htmls);
        }
    }
    if(total_pages>5){
        for(let i  = 1; i <=5; ++i){
            htmls = `
                <button class="nbP flex">${i}</button>
            `
            $(".number-page").insertAdjacentHTML("beforeend",htmls);
        }
        let dots = `<button class="nbP flex color-gray font16">...</button>`
        $(".number-page").insertAdjacentHTML("beforeend",dots);
        for(let i  = 6; i <= total_pages; ++i){
            htmls = `
                <button class="nbP flex">${i}</button>
            `
            $(".number-page").insertAdjacentHTML("beforeend",htmls);
        }
    }

    //Add animation for nbP btns
    $$('.nbP').forEach((btn,ind)=>{
       if(ind== 0){
           btn.classList.add("active");
       }
       btn.onclick = ()=>{
            moveStateActiveBtns(btn);
            $("#start-number").innerHTML = ind+1;
            clicked = ind;
            setOpacity($("#start-number").innerHTML, total_pages,$(".sortBy_right .prev-btn"),$(".sortBy_right .nExt-btn"));
       }
    })
    //handle when clicked on $(".tdsgt-SortResult .prev-next btns")
    $(".tdsgt-SortResult .nExt-btn").onclick = () =>{
        clicked_nbP++;
        if(clicked_nbP < total_pages){
           $$(".nbP").forEach((btn,ind)=>{
               ind = clicked_nbP;
               moveStateActiveBtns($$(".nbP")[ind]);
           })
        }
        if(clicked_nbP >= total_pages){
            clicked_nbP = total_pages-1;
        }
        $("#start-number").innerHTML = $(".nbP.active").innerHTML;
        setOpacity($("#start-number").innerHTML, total_pages,$(".sortBy_right .prev-btn"),$(".sortBy_right .nExt-btn"));
        // console.log("nbP:" + " " + clicked_nbP)
        // $$(".nbP").forEach((btn,indx) => {
        //     if(btn.classList.contains("active")){
        //         clicked_nbP  = indx;
        //     }
        // });
        // $$(".nbP").forEach((btn,indx) =>{
        //     indx = clicked_nbP+1;
        //     if(indx<total_pages){
        //         moveStateActiveBtns($$(".nbP")[indx])
        //     }
        // })
    }
    $(".tdsgt-SortResult .prev-btn").onclick = ()=>{
        clicked_nbP--;
        if(clicked_nbP >= 0){
            $$(".nbP").forEach((btn,ind)=>{
                ind = clicked_nbP;
                moveStateActiveBtns($$(".nbP")[ind])
            })
        }
        if(clicked_nbP<0){
            clicked_nbP = 0;
        }
        $("#start-number").innerHTML = $(".nbP.active").innerHTML;
        setOpacity($("#start-number").innerHTML, total_pages,$(".sortBy_right .prev-btn"),$(".sortBy_right .nExt-btn"));
        //console.log("nbP:" + " "+ clicked_nbP)
        // $$(".nbP").forEach((btn,indx) => {
        //     if(btn.classList.contains("active")){
        //         clicked_nbP  = indx;
        //     }
        // });
        // $$(".nbP").forEach((btn,indx) =>{
        //     indx = clicked_nbP-1;
        //     if(indx>=0){
        //         moveStateActiveBtns($$(".nbP")[indx])
        //     }
        // })
        // console.log(clicked_nbP);
    }
 }
 
