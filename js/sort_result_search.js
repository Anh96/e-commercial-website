import {render_products, calculator_promotion_price} from "./condition_render_data.js";
import {renderHeaderNav_base_desktop} from "./header.js";
import {keysearch} from "./keyword_search.js"
import {footerBase, footerBase_onMobile} from "./footer.js";
// import {pagination, prevRange, currRange,reset_bl1SbBtn} from "./paging.js";
import {render_info_sortResultPage } from './shop_information.js';
// import { sort_quantitySold, sort_AscendingPriceSold, sort_DescendingPriceSold} from "./handleEventShopOnline.js";
let htmls, products_paging_after_filter = new Array;
let clicked_nbP =0;
let maximum_numbers_item_on_per_page = 10, currentPage =1, prevRange, currRange;
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
fetch("../data/data.json")
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        if(window.innerWidth>=1008){
            renderHeaderNav_base_desktop();
            footerBase();
            keysearch(data.key_search)
        }
        if(window.innerWidth<=834){
            footerBase_onMobile();
        }
        render_info_sortResultPage(data.shop_onlines);
        filter_with_rangePrice(data.products_inshop);
        show_products(data.products_inshop);
    })
//Relative Products
    // Sort
    function caculator_promotionPrice_notchangeCurrentcy(product){
        return product.price - (product.price *product.percent_saleoff/100);
    }
    function render_after_press_btns_sort(products){
        sort_quantitySold(products);
        // jQuery('.tdsgtion').empty();
        htmls = products.map(prod=>{
            return render_products(prod);
        })
        $('.tdsgtion').innerHTML = htmls.join("");
    }
    function render_products_sort_links(products){
        products.map(prod=>{
             $('.tdsgtion-sshO').innerHTML += render_products(prod);
         })  
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
    function totalPages(products){
        // Làm tròn số bằng hàm Math.ceil()
        return Math.ceil(products.length/maximum_numbers_item_on_per_page);
    }
    // set current page
    let setCurrentPage = (pageNum, products)=>{
        prevRange = (pageNum-1)*maximum_numbers_item_on_per_page;
        currRange = pageNum*maximum_numbers_item_on_per_page;
        jQuery(".tdsgtion").empty();
        products.forEach((item,ind)=>{
            if(ind>=prevRange && ind <currRange){
                jQuery(".tdsgtion").append(render_products(item));
            }
        })
    }
    // reset bl1Sb-btn;
    function reset_bl1SbBtn(){
        $(".bl1Sb-btn.active").classList.remove("active");
        $$(".bl1Sb-btn")[4].classList.add("active");
        // $(".pRCX span").innerHTML = `Giá`
        // $(".pRCX span").style.color = "black";
        jQuery(".pRCX span").html(`Giá`);
        jQuery(".pRCX span").css("color", "black");
        jQuery(".pRCX svg").css("fill", "black")

    }
    function create_pagination_controller(currentPage, products){
        // Handle header pagination
        $('#start-number').innerHTML = currentPage;
        //change opacity of btns
        if( $('#start-number').innerHTML == 1){
            $(".sortBy_right .prev-btn").style.opacity = 0.5;
        }
        $("#last-number").innerHTML = totalPages(products);
        //handle event when clicked btns
        if(totalPages(products)==1){
            $(".sortBy_right .prev-btn").onclick = false;
            $(".sortBy_right .nExt-btn").onclick = false;
            $(".sortBy_right .prev-btn").style.opacity = 0.5;
            $(".sortBy_right .nExt-btn").style.opacity = 0.5;
        }
        if(totalPages(products)>1){
            $(".sortBy_right .prev-btn").onclick = ()=>{
                currentPage--;
                reset_bl1SbBtn();
                if(currentPage<=1){
                    currentPage = 1;
                    // $('#start-number').innerHTML = currentPage;
                    $(".sortBy_right .prev-btn").setAttribute("disabled","disabled");
                    $(".sortBy_right .prev-btn").style.opacity = 0.5;
                    $(".sortBy_right .nExt-btn").removeAttribute("disabled");
                    $(".sortBy_right .nExt-btn").style.opacity = 1;
                }
                if(currentPage >1){
                    // $('#start-number').innerHTML = currentPage;
                    $(".prev-btn").removeAttribute("disabled");  
                }
                clicked_nbP = currentPage - 1;
                $$(".nbP").forEach((btn,ind)=>{
                    ind = currentPage - 1;
                    $(".nbP.active").classList.remove('active');
                    $$(".nbP")[ind].classList.add("active");
                })
                $('#start-number').innerHTML = currentPage;
                setOpacity($("#start-number").innerHTML, totalPages(products), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));
                setCurrentPage(currentPage,products);
            }
            $('.sortBy_right .nExt-btn').onclick = ()=>{
                currentPage++;
                reset_bl1SbBtn();
                if(currentPage <= totalPages(products) ){
                        // $('#start-number').innerHTML = currentPage;
                        $(".sortBy_right .nExt-btn").removeAttribute("disabled");
                }
                if(currentPage > totalPages(products)){
                        currentPage =  totalPages(products);
                        // $('#start-number').innerHTML = currentPage;
                        $(".sortBy_right .nExt-btn").setAttribute("disabled","disabled");
                }
                clicked_nbP = currentPage - 1;
                $$(".nbP").forEach((btn,ind)=>{
                    ind = currentPage-1;
                    $(".nbP.active").classList.remove('active');
                    $$(".nbP")[ind].classList.add("active");
                })
                $('#start-number').innerHTML = currentPage;
                setOpacity($("#start-number").innerHTML, totalPages(products), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));
                setCurrentPage(currentPage, products);
            }
        }
        // Handle footer pagination
        //Pagination btns on the footer all-products views.
        totalPages(products);
        for(let i  = 1; i <= totalPages(products); ++i){
            $('.number-page').innerHTML += `
                <button class="nbP flex none-change-opacity">${i}</button>
            `
        }
        // set postion of prev-next btns
        $(".nav-btn.prev-btn").style.left = $$(".nbP")[0].offsetLeft - 30 +'px';
        $(".nav-btn.nExt-btn").style.left = $$(".nbP")[totalPages(products)-1].offsetLeft + 30 + 'px';
    
        // active or disabled next-prev btns
        if(totalPages(products)==1){
            $(".tdsgt-SortResult .nExt-btn").disabled = true;
            $(".tdsgt-SortResult .nExt-btn").style.opacity = 0.5;
            $(".tdsgt-SortResult .prev-btn").disabled = true;
            $(".tdsgt-SortResult .prev-btn").style.opacity = 0.5;
        }
        if(totalPages(products)>= 2){
            $(".tdsgt-SortResult .nExt-btn").disabled = false;
            $(".tdsgt-SortResult .nExt-btn").style.opacity = 1;
            $(".tdsgt-SortResult .prev-btn").disabled = false;
            $(".tdsgt-SortResult .prev-btn").style.opacity = 1;
        }
        $(".tdsgt-SortResult .nExt-btn").onclick = () =>{
            clicked_nbP++;
            reset_bl1SbBtn();
            if(clicked_nbP < totalPages(products)){
                $$(".nbP").forEach((btn,ind)=>{
                    ind = clicked_nbP;
                    $(".nbP.active").classList.remove('active');
                    $$(".nbP")[ind].classList.add("active");
                })
            }
            if(clicked_nbP >= totalPages(products)){
                clicked_nbP = totalPages(products)-1;
            }
            currentPage = clicked_nbP+1;
            $("#start-number").innerHTML = currentPage;
            setOpacity($("#start-number").innerHTML, totalPages(products),$(".sortBy_right .prev-btn"),$(".sortBy_right .nExt-btn"));
            setCurrentPage(currentPage,products);
    
        }
        $(".tdsgt-SortResult .prev-btn").onclick = ()=>{
            clicked_nbP--;
            reset_bl1SbBtn();
            if(clicked_nbP >= 0){
                $$(".nbP").forEach((btn,ind)=>{
                    ind = clicked_nbP;
                    $(".nbP.active").classList.remove('active');
                    $$(".nbP")[ind].classList.add("active");
                })
            }
            if(clicked_nbP<0){
                clicked_nbP = 0;
            }
            currentPage = clicked_nbP+1;
            $("#start-number").innerHTML = currentPage;
            setOpacity($("#start-number").innerHTML, totalPages(products),$(".sortBy_right .prev-btn"),$(".sortBy_right .nExt-btn"));
            setCurrentPage(currentPage, products);
    
        }
        // Handle nbP btns
        $$('.nbP').forEach((btn,ind)=>{
            if(ind==0){
                btn.classList.add("active");
            }
            btn.onclick = ()=>{
                clicked_nbP = ind;
                currentPage = ind+1;
                $(".nbP.active").classList.remove("active");
                $$(".nbP")[ind].classList.add("active");
                $("#start-number").innerHTML = currentPage;
                reset_bl1SbBtn();
                setOpacity($("#start-number").innerHTML, totalPages(products),$(".sortBy_right .prev-btn"),$(".sortBy_right .nExt-btn"));
                setCurrentPage(currentPage, products);
            }
        })
    }
    function pagination(products){
        setCurrentPage(currentPage,products);
        create_pagination_controller(currentPage, products);
    }
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
    export function sortFollowBtn(products){
        $$(".sOrt .bl1Sb-btn").forEach((btn,i)=>{
            btn.onclick = ()=>{
                // products_paging_after_filter.length =0;
                jQuery(this).addClass("active");
                if(i<=6){
                    jQuery(".bl1Sb-btn.active").removeClass("active");
                    jQuery(".pRCX span").html(`Giá`);
                    jQuery(".pRCX span").css("color", "black");
                    jQuery(".icon-arrow-down-small").css("fill", "black");
                    jQuery(".tdsgtion").empty();
                    if(i==4){
                        products_paging_after_filter.length =0;
                        btn.classList.add("active");
                        products.map((prod,ind)=>{
                            if(ind >= prevRange && ind < currRange){
                                htmls = render_products(prod);
                                $('.tdsgtion-sshO').innerHTML += htmls;
                             }
                        })
                    }
                    if(i==5){
                        btn.classList.add("active")
                    }
                    if(i==6){
                        products_paging_after_filter.length =0;
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
        $$(".sOrt .hv-prcx a").forEach((link,ind)=>{
            link.onclick = ()=>{
                products_paging_after_filter.length = 0;
                jQuery('.tdsgtion').empty();
                if(ind == 2){
                    jQuery(".bl1Sb-btn.active").removeClass("active");
                    $$(".bl1Sb-btn")[7].classList.add("active");
                    jQuery(".pRCX span").html(jQuery(link).html());
                    jQuery(".pRCX span").css("color", "white");
                    jQuery(".icon-arrow-down-small").css("fill", "white")
                    products.map((prod,ind)=>{
                        if(ind >= prevRange && ind < currRange){
                             products_paging_after_filter.push(prod)
                         }
                     })
                     sort_AscendingPriceSold(products_paging_after_filter);
                     render_products_sort_links(products_paging_after_filter)
                }
                if(ind == 3){
                    jQuery(".bl1Sb-btn.active").removeClass("active");
                    $$(".bl1Sb-btn")[7].classList.add("active");
                    jQuery(".pRCX span").html(jQuery(link).html());
                    jQuery(".pRCX span").css("color", "white");
                    jQuery(".icon-arrow-down-small").css("fill", "white")
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
    // filter: 
    function filter_with_rangePrice(products){
        jQuery(".range-price .round-btn").click(function(){
            let rpF_value = parseFloat(jQuery(".rpF").val());
            let rpT_value = parseFloat(jQuery(".rpT").val());
            reset_bl1SbBtn();
            products_paging_after_filter.length =0;
            jQuery(".tdsgtion").empty();
            jQuery(".number-page").empty();
            jQuery(products).each(function(){
                if(parseFloat(calculator_promotion_price(this).replaceAll(".", "")) >= 180000 && parseFloat(calculator_promotion_price(this).replaceAll(".", "")) <= 2800000){
                    products_paging_after_filter.push(this);
                }
            })
            pagination(products_paging_after_filter);
            // show_products(products_paging_after_filter);
        })
    }
    function show_products(products){
        sortFollowBtn(products);
        sortFollowPrice(products);
        pagination(products);
    }