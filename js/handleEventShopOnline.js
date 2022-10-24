 let htmls, clickAmount=0;
 const h4txts=$$('.h4txt');
 export const btns = $$('.bl1Sb-btn');
export function moveArrowInCatagories(h4txt){
    $('.icx').style.height = h4txt.offsetHeight + 'px';
    $('.icx').style.top = h4txt.offsetTop + 'px';
    $(".h4txt.prd-active").classList.remove("prd-active");
    h4txt.classList.add('prd-active');
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
    function sort(){
        let sorted = $$("#tdsgtion-relative-product .b4etd").sort(function(a,b){
           let x  = parseFloat(a.querySelector('.number-sld').innerHTML);
           let y = parseFloat(b.querySelector('.number-ald').innerHTML);
           if(x==null){
               return 1;
           }
           if(b==null) {
               return -1;
           }
           if(a==b) {
               return 0;
           }
           return a<b?1 : -1;
        });
        
        sorted.forEach(s => {
            console.log(s.querySelector('.number-sld'))
        })
        //return sorted;
        //$('#tdsgtion-relative-product').append(sorted);
    }
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
    
    import {render_products} from "./condition_render_products.js";
    // Catagories in shop
        //Filter products follow keyword of catagories
        export function filter(products){
            const ctPRDs =  $$('.ctPRD'),h4txts=$$('.h4txt');
            const newArrayProducts = new Array;
            products.map(prod=>{
                return newArrayProducts.push(prod);
            })
            let text, index;
            //handle ctPRDs are clicked (Header Catagories)
            for(let i=1;i<ctPRDs.length;i++){
                ctPRDs[i].onclick =()=>{
                    if(i!=1){
                        index = i-1;
                        text = ctPRDs[i].getAttribute("data-catagory");
                        htmls = products.map(prod=>{
                            if(text == prod.catagories_inshop.toLowerCase()){
                                //productss.push(prod)
                                return render_products(prod);
                            }
                        })
                        $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                        //productss.forEach(prod=>console.log(prod))
                    }
                    if(i==1){
                        index =0;
                        htmls = products.map(prod=>{
                            return render_products(prod)
                        })
                        $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                    }
                    moveArrowInCatagories(h4txts[index]);
                }
            }
            ///handle h4txts are clicked (left side of body Catagories)
            for(let i =0; i<h4txts.length;++i){
                h4txts[i].onclick = ()=>{
                    moveArrowInCatagories(h4txts[i]);
                    if(clickAmount>0){
                        if(i!=0){
                            btns[0].classList.add('active');
                            btns.forEach((btn,index)=>{
                                if(index!=0){
                                    btn.classList.remove('active')
                                }
                            })
                            htmls = products.map(prod =>{
                                if(h4txts[i].getAttribute("data-catagories-inshop")==prod.catagories_inshop.toLowerCase()){
                                     //console.log(render_products(prod))
                                    return render_products(prod);
                                }
                            });
                            $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                            
                            btns.forEach((btn,index)=>{
                                btn.onclick = ()=>{
                                    if(index==0){
                                        btn.classList.add('active');
                                        btns.forEach((btn,index)=>{
                                            if(index!=0){
                                                btn.classList.remove('active');
                                            }
                                        })
                                        for(let j =0; j<products.length;++j){
                                            if(products[j].getAttribute("data-catagories-inshop")==h4txts[i].getAttribute("data-catagories-inshop")){
                                                products[j].style.display = "block";
                                            }
                                            else{
                                                products[j].style.display = "none";
                                            }
                                        }
                                    }
                                    if(index==1){
                                        btn.classList.add('active');
                                        btns.forEach((btn,index)=>{
                                            if(index!=1){
                                                btn.classList.remove('active');
                                            }
                                        })
                                    }
                                    if(index==2){
                                        btns[2].classList.add('active');
                                        btns.forEach((btn,index)=>{
                                            if(index!=2){
                                                btn.classList.remove('active');
                                            }
                                        });
                                    }
                                }
                            })
                        }
                        if(i==0){
                            htmls = products.map(prod =>{
                                return render_products(prod)
                            });
                            $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                        }
                    }
                    if(clickAmount==0){
                        if(i!=0){
                            btns[0].classList.add('active');
                            btns.forEach((btn,index)=>{
                                if(index!=0){
                                    btn.classList.remove('active')
                                }
                            })
                            htmls = products.map(prod=>{
                                if(h4txts[i].getAttribute("data-catagories-inshop") == prod.catagories_inshop.toLowerCase()){
                                    return render_products(prod);
                                }
                            })
                            $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                            btns.forEach((btn,index)=>{
                                btn.onclick = ()=>{
                                    if(index==0){
                                        btn.classList.add('active');
                                        btns.forEach((btn,index)=>{
                                            if(index!=0){
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
                                    if(index==1){
                                        btn.classList.add('active');
                                        btns.forEach((btn,index)=>{
                                            if(index!=1){
                                                btn.classList.remove('active');
                                            }
                                        })
                                    }
                                    if(index==2){
                                        btns[2].classList.add('active');
                                        btns.forEach((btn,index)=>{
                                            if(index!=2){
                                                btn.classList.remove('active');
                                            }
                                        });
                                    }
                                }
                            })
                        }
                        if(i==0){
                            for(let prod of products){
                                // All products are displayed 
                                htmls = products.map(prod=>{
                                    if(h4txts[i].getAttribute("data-catagories-inshop") == prod.catagories_inshop.toLowerCase()){
                                        return render_products(prod);
                                    }
                                })
                                $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                            }
                        }
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
                            htmls = products.map(prod=>{
                                return render_products(prod);
                            })
                            $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                        }
                        if(i==2){
                            clickAmount++;
                            let products2 = [];
                            products.map(prod=>{
                                products2.push(prod);
                            })
                            sort_quantitySold(products2);
                            htmls = products2.map(prod=>{
                                return render_products(prod);
                            })
                            $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                        }
                    }
                }
            })
        }
    // Sort follow price
   
