const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const h4txts=$$('.h4txt');
export const btns = $$('.sshopOnl .bl1Sb-btn');
const conditions_sort_links = $$(".hv-prcx a");
import { 
    pagination,totalPages, setOpacity, prevRange, currRange, reset_currentPage
} from "./paging.js";

import {render_products} from "./condition_render_data.js";

let htmls, products_paging_after_filter = new Array;
export function moveArrowInCatagories(h4txt){
   $('.icx').style.height = h4txt.offsetHeight + 'px';
   $('.icx').style.top = h4txt.offsetTop + 'px';
   $(".h4txt.prd-active").classList.remove("prd-active");
   h4txt.classList.add('prd-active');
}
//Promotion Code
   export function getWidth_promotion_code(promotion){
       return promotion.getBoundingClientRect().width;
   }
// All Products View
//    function compare promotion price which doesn't change currentcy unit;
    function caculator_promotionPrice_notchangeCurrentcy(product){
        return product.price - (product.price *product.percent_saleoff/100);
    }
   // Sort follow keyword of bl1Sb-btn button clicked;
   //function sort
   // descending sort
   export function sort_quantitySold(products){
       products.sort(function(a,b){
           return b.quantity_sold - a.quantity_sold;
       })
   }
   export function sort_AscendingPriceSold(products){
       products.sort(function(a,b){
           return caculator_promotionPrice_notchangeCurrentcy(a) - caculator_promotionPrice_notchangeCurrentcy(b);
       })
   }
   export function sort_DescendingPriceSold(products){
       products.sort(function(a,b){
           return caculator_promotionPrice_notchangeCurrentcy(b) - caculator_promotionPrice_notchangeCurrentcy(a);
       })
   }

   export function render_after_press_btns_sort(products){
        sort_quantitySold(products);
        htmls = products.map(prod=>{
            return render_products(prod);
        })
        $('.tdsgtion-sshO').innerHTML = htmls.join("");
   }
   export function render_products_sort_links(products){
       products.map(prod=>{
            $('.tdsgtion-sshO').innerHTML += render_products(prod);
        })  
   }
   // Catagories in shop
       //Filter products follow keyword of catagories
       export function filter(products){
           const ctPRDs =  $$('.ctPRD'),h4txts= $$('.h4txt');
           const nw_Arr = new Array, nwArr_sortlinks = new Array;
           let index =0;
           //handle ctPRDs are clicked (Header Catagories)
           for(let i=1;i<ctPRDs.length;i++){
               ctPRDs[i].onclick =()=>{
                   $(".pRCX span").innerHTML = `Giá`;
                   $('.tdsgtion-sshO').innerHTML = "";
                   moveArrowInCatagories(h4txts[i]);
                   btns[0].classList.add('active');
                   btns.forEach((btn,ind)=>{
                       if(ind!=0){
                           btn.classList.remove('active')
                       }
                   })
                   if(i!=1){
                       index = i-1;
                       jQuery('.tdsgtion-sshO').empty();
                       products_paging_after_filter.length = 0;
                       btns[0].classList.add('active');
                       btns.forEach((btn,index_btn)=>{
                           if(index_btn!=0){
                               btn.classList.remove('active')
                            }
                        })
                        products.map(prod=>{
                            if(ctPRDs[i].getAttribute("data-catagory") == prod.catagories_inshop.toLowerCase()){
                                jQuery('.number-page').empty();
                                return products_paging_after_filter.push(prod);
                            }
                        })
                        pagination(products_paging_after_filter);
                        setOpacity($("#start-number").innerHTML, totalPages(products_paging_after_filter), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));  
                        //sort follow pressing btns
                        sortFollowBtnCombineFilter(products_paging_after_filter)
                        //sort low-hight & reverse
                        sortFollowPriceCombineFilter(products_paging_after_filter);
                   }
                   if(i==1){
                       index = 0;
                        $(".pRCX span").innerHTML = `Giá`;
                        $(".pRCX span").style.color = "black";
                        products_paging_after_filter.length = 0;
                        btns[0].classList.add('active');
                        btns.forEach((btn,index_btn)=>{
                            if(index_btn!=0){
                                btn.classList.remove('active')
                            }
                        })
                        $('.number-page').innerHTML = "";
                        pagination(products);
                        setOpacity($("#start-number").innerHTML, totalPages(products), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));
                        //sort follow pressing btns
                        sortFollowBtn(products);
                        sortFollowPrice(products);
                   }
                   moveArrowInCatagories(h4txts[index]);
               }
           }
           ///handle h4txts are clicked (left side of body Catagories)
           for(let i =0; i<h4txts.length;++i){
               h4txts[i].onclick = ()=>{
                //    products_paging_after_filter.length =0;
                   reset_currentPage();
                   $(".pRCX span").innerHTML = `Giá`;
                   $(".pRCX span").style.color = "black";
                   jQuery('.tdsgtion-sshO').empty();
                   moveArrowInCatagories(h4txts[i]);
                   btns[0].classList.add('active');
                   btns.forEach((btn,index_btn)=>{
                       if(index_btn!=0){
                           btn.classList.remove('active')
                       }
                   });
                   if(i!=0){
                       jQuery('.tdsgtion-sshO').empty();
                       products_paging_after_filter.length = 0;
                       btns[0].classList.add('active');
                       btns.forEach((btn,index_btn)=>{
                           if(index_btn!=0){
                               btn.classList.remove('active')
                           }
                       })
                       products.map(prod=>{
                            if(h4txts[i].getAttribute("data-catagories-inshop") == prod.catagories_inshop.toLowerCase()){
                                jQuery('.number-page').empty();
                                return products_paging_after_filter.push(prod);
                            }
                        })
                        pagination(products_paging_after_filter);
                        setOpacity($("#start-number").innerHTML, totalPages(products_paging_after_filter), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));  
                       //sort follow pressing btns
                        sortFollowBtnCombineFilter(products_paging_after_filter)
                       //sort low-hight & reverse
                        sortFollowPriceCombineFilter(products_paging_after_filter);
                   }
                   if(i==0){
                       $(".pRCX span").innerHTML = `Giá`;
                       $(".pRCX span").style.color = "black";
                       products_paging_after_filter.length = 0;
                       btns[0].classList.add('active');
                       btns.forEach((btn,index_btn)=>{
                           if(index_btn!=0){
                               btn.classList.remove('active')
                           }
                       })
                       $('.number-page').innerHTML = "";
                       pagination(products);
                       setOpacity($("#start-number").innerHTML, totalPages(products), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));
                       //sort follow pressing btns
                       sortFollowBtn(products);
                       sortFollowPrice(products)
                   }
               }
           }
       }
       export function sortFollowBtn(products){
           btns.forEach((btn,i)=>{
               btn.onclick = ()=>{
                   products_paging_after_filter.length =0;
                   if(i<=2){
                       $(".pRCX span").innerHTML = `Giá`;
                       $(".pRCX span").style.color = "black";
                       $(".bl1Sb-btn.active").classList.remove("active");
                       if(i==0){
                           $('.tdsgtion-sshO').innerHTML = "";
                           btn.classList.add("active");
                           products.map((prod,ind)=>{
                               if(ind >= prevRange && ind < currRange){
                                   htmls = render_products(prod);
                                   $('.tdsgtion-sshO').innerHTML += htmls;
                                }
                           })
                       }
                       if(i==1){
                           btn.classList.add("active")
                       }
                       if(i==2){
                           btn.classList.add("active")
                           products.map((prod,ind)=>{
                                if(ind >= prevRange && ind < currRange){
                                    return products_paging_after_filter.push(prod);
                                }
                           })
                           render_after_press_btns_sort(products_paging_after_filter);
                       }
                   }
               }
           })
       }
       export function sortFollowPrice(products){
           conditions_sort_links.forEach((link,ind)=>{
               link.onclick = ()=>{
                   products_paging_after_filter.length = 0;
                    $('.tdsgtion-sshO').innerHTML = "";
                   // remove active class on btns
                   $(".bl1Sb-btn.active").classList.remove("active");
                   $$(".bl1Sb-btn")[3].classList.add("active");
                   $(".icon-arrow-down-small").style.fill = "white "
                   if(ind == 0){
                       $(".pRCX span").innerHTML = link.innerText;
                       $(".pRCX span").style.color = "white";
                       products.map((prod,ind)=>{
                           if(ind >= prevRange && ind < currRange){
                                products_paging_after_filter.push(prod)
                            }
                        })
                        sort_AscendingPriceSold(products_paging_after_filter);
                        render_products_sort_links(products_paging_after_filter)
                   }
                   if(ind == 1){
                       $(".pRCX span").innerHTML = link.textContent;
                       $(".pRCX span").style.color = "white";
                       products.map((prod,ind)=>{
                           if(ind >= prevRange && ind < currRange){
                               products_paging_after_filter.push(prod);
                            }
                        })
                        sort_DescendingPriceSold(products_paging_after_filter);
                        render_products_sort_links(products_paging_after_filter)
                        
                   }
               }
           })
       }
       export function sortFollowBtnCombineFilter(products){
           let nw_Arr = new Array;
           btns.forEach((btn,i)=>{
               btn.onclick = ()=>{
                   nw_Arr.length = 0;
                   if(i<=2){
                       $(".pRCX span").innerHTML = `Giá`;
                       $(".pRCX span").style.color = "black";
                       $(".bl1Sb-btn.active").classList.remove("active");
                       $('.tdsgtion-sshO').innerHTML = '';
                       if(i==0){
                           btn.classList.add("active");
                           htmls = products_paging_after_filter.map((prod,ind)=>{
                               if(ind >= prevRange && ind < currRange){
                                   return render_products(prod);
                                }
                            })
                            $('.tdsgtion-sshO').innerHTML = htmls.join('')
                        }
                        if(i==1){
                            btn.classList.add("active")
                        }
                        if(i==2){
                            btn.classList.add("active")
                            products_paging_after_filter.map((prod,ind)=>{
                                if(ind >= prevRange && ind < currRange){
                                    nw_Arr.push(prod);
                                }
                            })
                            render_after_press_btns_sort(nw_Arr);
                        }
                    }
                }
            })
       }
       export function sortFollowPriceCombineFilter(products){
           let new_Arr = new Array;
           conditions_sort_links.forEach((link,ind)=>{
            link.onclick = ()=>{
                new_Arr.length = 0;
                 $('.tdsgtion-sshO').innerHTML = "";
                // remove active class on btns
                $(".bl1Sb-btn.active").classList.remove("active");
                $$(".bl1Sb-btn")[3].classList.add("active");
                $(".icon-arrow-down-small").style.fill = "white "
                if(ind == 0){
                    $(".pRCX span").innerHTML = link.innerText;
                    $(".pRCX span").style.color = "white";
                    products_paging_after_filter.map((prod,ind)=>{
                        if(ind >= prevRange && ind < currRange){
                             new_Arr.push(prod)
                         }
                     })
                     sort_AscendingPriceSold(new_Arr);
                     render_products_sort_links(new_Arr)
                }
                if(ind == 1){
                    $(".pRCX span").innerHTML = link.textContent;
                    $(".pRCX span").style.color = "white";
                    products_paging_after_filter.map((prod,ind)=>{
                        if(ind >= prevRange && ind < currRange){
                            new_Arr.push(prod);
                         }
                     })
                     sort_DescendingPriceSold(new_Arr);
                     render_products_sort_links(new_Arr)
                     
                }
            }
        })
       }