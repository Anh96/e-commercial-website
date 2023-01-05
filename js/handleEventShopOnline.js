$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);
const h4txts=$$('.h4txt');
import { pagination, maximum_numbers_item_on_per_page, totalPages, setOpacity, create_header_pagination, create_footer_pagination, add_animation_btns_controller_pagination} from "./paging.js";
import {render_products} from "./condition_render_products.js";
import { calculator_promotion_price } from "./condition_render_products.js";
let htmls, clickAmount=0, clicked = 1, products_paging_after_filter = new Array, maximumitem;
// maximumitem = maximum_numbers_item_on_per_page;
export const btns = $$('.bl1Sb-btn');
const conditions_sort_links = $$(".hv-prcx a");
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
           return calculator_promotion_price(a) - calculator_promotion_price(b);
       })
   }
   export function sort_DescendingPriceSold(products){
       products.sort(function(a,b){
           return calculator_promotion_price(b) - calculator_promotion_price(a);
       })
   }
   export function create_products(products){
        for(let i in products ){
            if(i< maximum_numbers_item_on_per_page){
                htmls = render_products(products[i]);
                $('#tdsgtion-relative-product').innerHTML += htmls;
            }
        }
   }
   function render_after_press_btns_sort(products){
        sort_quantitySold(products);
        htmls = products.map(prod=>{
            return render_products(prod);
        })
        $('#tdsgtion-relative-product').innerHTML = htmls.join("");
   }
   function render_products_sort_links(products){
        htmls = products.map(prod=>{
            return render_products(prod);
        })
        $('#tdsgtion-relative-product').innerHTML = htmls.join("");
   }
   // Catagories in shop
       //Filter products follow keyword of catagories
       export function filter(products){
           const ctPRDs =  $$('.ctPRD'),h4txts=$$('.h4txt');
           const nw_Arr = new Array, nwArr_sortlinks = new Array;
           let index =0;
           //handle ctPRDs are clicked (Header Catagories)
           for(let i=1;i<ctPRDs.length;i++){
               ctPRDs[i].onclick =()=>{
                   $(".pRCX span").innerHTML = `Giá`;
                   $('#tdsgtion-relative-product').innerHTML = "";
                   moveArrowInCatagories(h4txts[i]);
                   btns[0].classList.add('active');
                   btns.forEach((btn,ind)=>{
                       if(ind!=0){
                           btn.classList.remove('active')
                       }
                   })
                   if(i!=1){
                       index = i-1; 
                       products_paging_after_filter.length =0;
                       products.map(prod=>{
                           if(ctPRDs[i].getAttribute("data-catagory") == prod.catagories_inshop.toLowerCase()){
                                $('.number-page').innerHTML = " ";
                                return products_paging_after_filter.push(prod);
                           }
                       })
                       pagination(products_paging_after_filter);
                       setOpacity($("#start-number").innerHTML, totalPages(products_paging_after_filter), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));
                       
                       //sort follow pressing btns
                       btns.forEach((btn,ind)=>{
                           btn.onclick = ()=>{
                                nw_Arr.length =0;
                                // remove text link
                                if(ind==0){
                                    $('#tdsgtion-relative-product').innerHTML = "";
                                    $(".pRCX span").innerHTML = `Giá`
                                    btn.classList.add('active');
                                    btns.forEach((btn,index_btn)=>{
                                        if(index_btn!=0){
                                            btn.classList.remove('active');
                                        }
                                    })
                                    pagination(products_paging_after_filter);
                                    setOpacity($("#start-number").innerHTML, totalPages(products_paging_after_filter), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));
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
                                    // nw_Arr.length = 0;
                                    btns[2].classList.add('active');
                                    btns.forEach((btn,index_btn)=>{
                                        if(index_btn!=2){
                                            btn.classList.remove('active');
                                        }
                                    })
                                    $(".pRCX span").innerHTML = "";
                                    $(".pRCX span").innerHTML = `Giá`;
                                    pagination(products_paging_after_filter);
                                    setOpacity($("#start-number").innerHTML, totalPages(products_paging_after_filter), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));
                                    $('#tdsgtion-relative-product').innerHTML = "";
                                    products_paging_after_filter.map((prod,indx)=>{
                                        if(indx< maximum_numbers_item_on_per_page){
                                            nw_Arr.push(prod);
                                        }
                                    })
                                    render_after_press_btns_sort(nw_Arr);
                                }
                           }
                       })

                       //sort low to high & reverse
                       conditions_sort_links.forEach((link,ind)=>{
                           link.onclick = ()=>{
                                $('#tdsgtion-relative-product').innerHTML = " ";
                                nwArr_sortlinks.length =0;
                                products_paging_after_filter.map((prod, indx)=>{
                                    if(indx <= maximum_numbers_item_on_per_page){
                                        return nwArr_sortlinks.push(prod);
                                    }
                                })
                                // remover active class on btns
                                btns.forEach((btn,ind)=>{
                                    btn.classList.remove("active");
                                })
                               if(ind ==0){
                                   $(".pRCX span").innerHTML = link.innerText;
                                   sort_AscendingPriceSold(nwArr_sortlinks);
                                   //render_products_sort_links(nwArr_sortlinks);
                                   pagination(nwArr_sortlinks);
                                    //create_products(nwArr_sortlinks)
                                   setOpacity($("#start-number").innerHTML, totalPages(products_paging_after_filter), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));
                               }
                               if(ind == 1){
                                    $(".pRCX span").innerHTML = link.innerText;
                                    sort_DescendingPriceSold(nwArr_sortlinks);
                                    //render_products_sort_links(nwArr_sortlinks);
                                    pagination(nwArr_sortlinks);
                                    setOpacity($("#start-number").innerHTML, totalPages(products_paging_after_filter), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));
                                }
                           }
                       })
                   }
                   if(i==1){
                       nw_Arr.length =0;
                       products_paging_after_filter.length =0;
                       index = 0;
                       htmls = products.map((prod,indx)=>{
                           if(indx < maximum_numbers_item_on_per_page)
                                return render_products(prod);
                       })
                       $('#tdsgtion-relative-product').innerHTML = htmls.join("");
                       //sort follow pressing btns
                       btns.forEach((btn,ind)=>{
                           btn.onclick = ()=>{
                                if(ind==0){
                                    products_paging_after_filter.length =0;
                                    btn.classList.add('active');
                                    $(".pRCX span").innerHTML = `Giá`;
                                    btns.forEach((btn,ind)=>{
                                        if(ind!=0){
                                            btn.classList.remove('active');
                                        }
                                    })
                                    htmls = products.map((prod,indx)=>{
                                            if(indx < maximum_numbers_item_on_per_page)
                                                return render_products(prod);
                                        })
                                    $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                                }
                                if(ind==1){
                                    $(".pRCX span").innerHTML = `Giá`;
                                    btn.classList.add('active');
                                    btns.forEach((btn,ind)=>{
                                        if(ind!=1){
                                            btn.classList.remove('active');
                                        }
                                    })
                                }
                                if(ind==2){
                                    $(".pRCX span").innerHTML = `Giá`;
                                    nw_Arr.length = 0;
                                    btns[2].classList.add('active');
                                    btns.forEach((btn,index_btn)=>{
                                        if(index_btn!=2){
                                            btn.classList.remove('active');
                                        }
                                    })
                                    products.map(prod=>{
                                        $('.number-page').innerHTML = " ";
                                        return products_paging_after_filter.push(prod);
                                    });
                                    pagination(products_paging_after_filter);
                                    setOpacity($("#start-number").innerHTML, totalPages(products_paging_after_filter), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));
                                    $('#tdsgtion-relative-product').innerHTML = "";
                                    products_paging_after_filter.map((prod,ind)=>{
                                        if(ind< maximum_numbers_item_on_per_page){
                                            nw_Arr.push(prod);
                                        }
                                    })
                                    render_after_press_btns_sort(nw_Arr);
                                }
                            }
                       })
                       //sort low-hight & reverse
                       conditions_sort_links.forEach((link,ind)=>{
                           link.onclick = ()=>{
                                nwArr_sortlinks.length =0;
                                products.map((prod,indx)=>{
                                   if(indx < maximum_numbers_item_on_per_page){
                                       return nwArr_sortlinks.push(prod);
                                   }
                                })
                                // remover active class on btns
                                btns.forEach((btn,ind)=>{
                                    btn.classList.remove("active")
                                })
                            if(ind ==0){
                                $(".pRCX span").innerHTML = link.innerText;
                                sort_AscendingPriceSold(nwArr_sortlinks);
                                render_products_sort_links(nwArr_sortlinks);
                            }
                            if(ind == 1){
                                    $(".pRCX span").innerHTML = link.innerText;
                                    sort_DescendingPriceSold(nwArr_sortlinks);
                                    render_products_sort_links(nwArr_sortlinks);
                                }
                           }
                       })
                   }
                   moveArrowInCatagories(h4txts[index]);
               }
           }
           ///handle h4txts are clicked (left side of body Catagories)
           for(let i =0; i<h4txts.length;++i){
               h4txts[i].onclick = ()=>{
                   //products_paging_after_filter.length =0;
                   $(".pRCX span").innerHTML = `Giá`;
                   jQuery('#tdsgtion-relative-product').empty();
                   moveArrowInCatagories(h4txts[i]);
                   btns[0].classList.add('active');
                   btns.forEach((btn,index_btn)=>{
                       if(index_btn!=0){
                           btn.classList.remove('active')
                       }
                   })
                   if(i!=0){
                       jQuery('#tdsgtion-relative-product').empty();
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
                       btns.forEach((btn,index_btn)=>{
                           btn.onclick = ()=>{
                               products_paging_after_filter.length =0;
                               $(".pRCX span").innerHTML = `Giá`;
                               if(index_btn==0){
                                   nw_Arr.length = 0;
                                   jQuery('#tdsgtion-relative-product').empty();
                                   products_paging_after_filter.length =0;
                                   btn.classList.add('active');
                                   btns.forEach((btn,index_btn)=>{
                                       if(index_btn!=0){
                                           btn.classList.remove('active');
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
                                    nw_Arr.length = 0;
                                    jQuery('#tdsgtion-relative-product').empty();
                                    $(".pRCX span").innerHTML = "";
                                    $(".pRCX span").innerHTML = `Giá`;
                                    btns[2].classList.add('active');
                                    btns.forEach((btn,index_btn)=>{
                                        if(index_btn!=2){
                                            btn.classList.remove('active');
                                        }
                                    })
                                    products.map(prod=>{
                                        if(h4txts[i].getAttribute("data-catagories-inshop") == prod.catagories_inshop.toLowerCase()){
                                            //$('.number-page').innerHTML = " ";
                                            jQuery('.number-page').empty()
                                            return products_paging_after_filter.push(prod);
                                        }
                                    });
                                    pagination(products_paging_after_filter);
                                    setOpacity($("#start-number").innerHTML, totalPages(products_paging_after_filter), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));
                                    products_paging_after_filter.map((prod,ind)=>{
                                        if(ind< maximum_numbers_item_on_per_page){
                                            nw_Arr.push(prod);
                                        }
                                    })
                                    render_after_press_btns_sort(nw_Arr);
                               }
                           }
                       })
                       //sort low-hight & reverse
                       conditions_sort_links.forEach((link,ind)=>{
                           link.onclick = ()=>{
                               products_paging_after_filter.length =0;
                               jQuery('.number-page').empty()
                               $('.b4etd').remove();
                               if(ind ==0){
                                    nw_Arr.length =0;
                                    products.map(prod=>{
                                        if(h4txts[i].getAttribute("data-catagories-inshop") == prod.catagories_inshop.toLowerCase()){
                                                //$('.number-page').innerHTML = "";
                                                jQuery('.number-page').empty();
                                                return products_paging_after_filter.push(prod);
                                        }
                                    })
                                    pagination(products_paging_after_filter);
                                    setOpacity($("#start-number").innerHTML, totalPages(products_paging_after_filter), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));  
                                    products_paging_after_filter.map((prod,ind)=>{
                                        if(ind< maximum_numbers_item_on_per_page){
                                            return nw_Arr.push(prod);
                                        }
                                    })
                                    sort_AscendingPriceSold(nw_Arr);
                                    htmls = nw_Arr.map(nw=>{
                                        return render_products(nw);
                                    })
                                    $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                                }
                               if(ind == 1){
                                   nw_Arr.length = 0;
                                   products.map(prod=>{
                                       if(h4txts[i].getAttribute("data-catagories-inshop") == prod.catagories_inshop.toLowerCase()){
                                                //$('.number-page').innerHTML = "";
                                                jQuery('.number-page').empty()
                                                return products_paging_after_filter.push(prod);
                                        }
                                   })
                                   pagination(products_paging_after_filter);
                                   setOpacity($("#start-number").innerHTML, totalPages(products_paging_after_filter), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));
                                   products_paging_after_filter.map((prod,ind)=>{
                                        if(ind< maximum_numbers_item_on_per_page){
                                            return nw_Arr.push(prod);
                                        }
                                    })
                                    sort_DescendingPriceSold(nw_Arr);
                                    htmls = nw_Arr.map(nw=>{
                                        return render_products(nw);
                                    })
                                    $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                           }
                       })
                   }
                   if(i==0){
                       jQuery('#tdsgtion-relative-product').empty();
                       $(".pRCX span").innerHTML = `Giá`;
                       products_paging_after_filter.length = 0;
                       btns[0].classList.add('active');
                       btns.forEach((btn,index_btn)=>{
                           if(index_btn!=0){
                               btn.classList.remove('active')
                           }
                       })
                       products.map(prod=>{
                           $('.number-page').innerHTML = "";
                           return products_paging_after_filter.push(prod);
                       })
                       pagination(products_paging_after_filter);
                       setOpacity($("#start-number").innerHTML, totalPages(products_paging_after_filter), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));
                       //sort follow pressing btns
                       btns.forEach((btn,index_btn)=>{
                            btn.onclick = ()=>{
                                jQuery('#tdsgtion-relative-product').empty();
                                //products_paging_after_filter.length =0;
                                if(index_btn==0){
                                    //nw_Arr.length = 0;            
                                    btn.classList.add('active');
                                    btns.forEach((btn,index_btn)=>{
                                        if(index_btn!=0){
                                            btn.classList.remove('active');
                                        }
                                    })
                                    products.map(prod=>{
                                        $('.number-page').innerHTML = "";
                                        return products_paging_after_filter.push(prod);
                                    })
                                    pagination(products_paging_after_filter);
                                    setOpacity($("#start-number").innerHTML, totalPages(products_paging_after_filter), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));
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
                                    btn.classList.add('active');
                                    btns.forEach((btn,index_btn)=>{
                                        if(index_btn!=2){
                                            btn.classList.remove('active');
                                        }
                                    })
                                    
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
                   products_paging_after_filter = new Array;
                   if(i<=2){
                    //    btn.classList.add("active")
                       $(".pRCX span").innerHTML = `Giá`;
                       $(".bl1Sb-btn.active").classList.remove("active");
                       if(i==0){
                           btn.classList.add("active");
                           htmls = products.map((prod,ind)=>{
                                if(ind < maximum_numbers_item_on_per_page){
                                    return render_products(prod);
                                }
                           })
                           $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                       }
                       if(i==1){
                           btn.classList.add("active")

                       }
                       if(i==2){
                           btn.classList.add("active")
                           clickAmount++;
                           const products2 = new Array;
                           products.map((prod,ind)=>{
                                if(ind<maximum_numbers_item_on_per_page){
                                    products2.push(prod);
                                }
                           })
                           sort_quantitySold(products2);
                           htmls = products2.map((prod,ind)=>{
                               return render_products(prod);
                           })
                           $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                       }
                   }
               }
           })
       }
       export function sortFollowPrice(products){
           const nw_Arr = new Array;
           products.map((prod,ind)=>{
                if(ind<maximum_numbers_item_on_per_page){
                    return nw_Arr.push(prod);
                }
           })
           conditions_sort_links.forEach((link,ind)=>{
               link.onclick = ()=>{
                   // remover active class on btns
                   $(".bl1Sb-btn.active").classList.remove("active");
                   $$(".bl1Sb-btn")[3].classList.add("active");
                   if(ind == 0){
                       $(".pRCX span").innerHTML = link.textContent;
                       sort_AscendingPriceSold(nw_Arr);
                       htmls = nw_Arr.map(prod=>{
                            return render_products(prod);
                       })
                       $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                   }
                   if(ind == 1){
                       $(".pRCX span").innerHTML = link.textContent;
                       sort_DescendingPriceSold(nw_Arr);
                       htmls = nw_Arr.map(prod=>{
                            return render_products(prod);
                       })
                       $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                   }
               }
           })
       }