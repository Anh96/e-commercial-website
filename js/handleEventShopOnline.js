let htmls, clickAmount=0, total_pages;
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
export function setValue(){
   const ctPRDs =  $$('.ctPRD');
   ctPRDs.forEach((ctPRD,index)=>{
       ctPRD.setAttribute("data-id",index);
   })
   h4txts.forEach((h4txt,curr)=>{
       if(curr==0){
           h4txt.classList.add('prd-active')
       }
   })
   btns.forEach((btn,currBtn)=>{
       if(currBtn==0){
           btn.classList.add('active');
       }
       btn.setAttribute("data-relBtn",currBtn)
   })
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
 export function pagnition(products){
    let total_pages, maximum_numbers_item_on_per_page = 30, clicked =1, clicked_nbP =0;
    total_pages = products.length/maximum_numbers_item_on_per_page;
    if(products.length % maximum_numbers_item_on_per_page != 0){
        total_pages++;
        $('#last-number').innerHTML = total_pages.toFixed(0);
    }
    else{
        $('#last-number').innerHTML = total_pages.toFixed(0);
    }
    //change opacity of btns
    if( $('#start-number').innerHTML == 1){
        $(".sortBy_right .prev-btn").style.opacity = 0.5;
    }
    //handle event when clicked btns
    $(".sortBy_right .prev-btn").onclick = ()=>{
        clicked--;
        if(clicked<=1){
            clicked = 1
            $('#start-number').innerHTML = clicked;
            $(".sortBy_right .prev-btn").disabled = true;
        }
        if(clicked >1){
            $('#start-number').innerHTML = clicked;
            $(".prev-btn").disabled = false;     
        }
        //change opacity of prev-next btns while clicked
        if($("#start-number").innerHTML == 1){
            $(".sortBy_right .prev-btn").style.opacity = 0.5;
            $(".sortBy_right .nExt-btn").style.opacity = 1;
        }
        if($("#start-number").innerHTML > 1){
            $(".sortBy_right .prev-btn").style.opacity = 1;
        }
    }
    $('.sortBy_right .nExt-btn').onclick = ()=>{
        clicked++;
        if(clicked <= total_pages ){
                $('#start-number').innerHTML = clicked;
                $(".sortBy_right .nExt-btn").disabled = false;
        }
        if(clicked > total_pages){
                clicked =  $('#last-number').innerHTML;
                $(".sortBy_right .nExt-btn").disabled = true;
        }
        //change opacity of prev-next btns while clicked
        if($("#start-number").innerHTML == 1){
            $(".sortBy_right .prev-btn").style.opacity = 0.5;
            $(".sortBy_right .nExt-btn").style.opacity = 1;
        }
        if($("#start-number").innerHTML < $('#last-number').innerHTML){
            $(".sortBy_right .prev-btn").style.opacity = 1;
        }
        if($("#start-number").innerHTML == $('#last-number').innerHTML){
            $(".sortBy_right .prev-btn").style.opacity = 1;
            $(".sortBy_right .nExt-btn").style.opacity = 0.5;
        }
    }
    //paginition btns on the last page
    total_pages = parseFloat($('#last-number').innerHTML);
    for(let i  = 1; i <= total_pages; ++i){
        htmls = `
            <button class="nbP flex">${i}</button>
        `
        $(".number-page").insertAdjacentHTML("beforeend",htmls);
    }
    if(total_pages>5){
        let dots = `<div class="nbP flex color-gray font16">...</div>`
        $(".number-page").insertAdjacentHTML("afterend",dots);
    }

    //add atribute color for text and btns paginition
    $$('.nbP').forEach((btn,ind)=>{
       if(ind== 0){
           btn.classList.add("active");
       }
       btn.onclick = ()=>{
            moveStateActiveBtns(btn);
       }
    })
    //handle when clicked on $(".tdsgt-SortResult .prev-next btns")
    $(".tdsgt-SortResult .nExt-btn").onclick = () =>{
        clicked_nbP++;
        if(clicked_nbP <= total_pages){
           $$(".nbP").forEach((btn,ind)=>{
               ind = clicked_nbP;
               moveStateActiveBtns(btn)
           })
        }
        if(clicked_nbP >total_pages){
            clicked_nbP = total_pages;
        }
    }
    $(".tdsgt-SortResult .prev-btn").onclick = ()=>{
        clicked_nbP--;
        if(clicked_nbP >= 0){
            $$(".nbP").forEach((btn,ind)=>{
                ind = clicked_nbP - 2;
                moveStateActiveBtns(btn)
            })
        }
        if(clicked_nbP<0){
            ind = 0;
            moveStateActiveBtns(btn)
        }
    }
 }
 
