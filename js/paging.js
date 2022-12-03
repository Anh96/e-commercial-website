let htmls, clicked =1, clicked_nbP =0, currentPage =1,beforePage, afterPage,number_page = $('.number-page');;
export let maximum_numbers_item_on_per_page = 5;
import {create_products, sort_quantitySold} from "./handleEventShopOnline.js";
function moveStateActiveBtns(nbp){
    $('.nbP.active').classList.remove("active");
    nbp.classList.add("active");
}
function getWidthBtnPaginationController(nbp){
    return nbp.getBoundingClientRect().width;
}
function moveScrollLeftbtns(nbp){
    return $(".number-page-wrapper").scrollLeft += getWidthBtnPaginationController(nbp) + 16;
}
function moveScrollRightbtns(nbp){
    return $(".number-page-wrapper").scrollLeft -= getWidthBtnPaginationController(nbp) - 16;
}
export function setOpacity(start_numberBtn, total_pages, prev_btn, next_btn){
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
export function totalPages(products){
    // Làm tròn số bằng hàm Math.ceil()
    return Math.ceil(products.length/maximum_numbers_item_on_per_page);
}
//Render item on perpage follow click-btn-header

//Render header pagination controller
export function create_header_pagination(products){
    //$('#start-number').innerHTML = 1;
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
            clicked--;
            if(clicked<=1){
                clicked = 1;
                $('#start-number').innerHTML = clicked;
                $(".sortBy_right .prev-btn").setAttribute("disabled","disabled");
            }
            if(clicked<=1){
                clicked = 1;
                $('#start-number').innerHTML = clicked;
                $(".sortBy_right .prev-btn").setAttribute("disabled","disabled");
            }
            if(clicked >1){
                $('#start-number').innerHTML = clicked;
                $(".prev-btn").removeAttribute("disabled");  
            }
            clicked_nbP = clicked - 1;
            $$(".nbP").forEach((btn,ind)=>{
                ind = clicked-1;
                moveStateActiveBtns($$(".nbP")[ind]);
            })
            setOpacity($("#start-number").innerHTML, totalPages(products), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));
        }
        $('.sortBy_right .nExt-btn').onclick = ()=>{
            clicked++;
            if(clicked <= totalPages(products) ){
                    $('#start-number').innerHTML = clicked;
                    $(".sortBy_right .nExt-btn").removeAttribute("disabled");
            }
            if(clicked > totalPages(products)){
                    clicked =  totalPages(products);
                    $(".sortBy_right .nExt-btn").setAttribute("disabled","disabled");
            }
            clicked_nbP = clicked - 1;
            $$(".nbP").forEach((btn,ind)=>{
                ind = clicked-1;
                moveStateActiveBtns($$(".nbP")[ind]);
            })
            setOpacity($("#start-number").innerHTML, totalPages(products), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));
        }
    }
}
//Render footer pagination controller
export function create_footer_pagination(products){
    //Pagination btns on the footer all-products views.
    totalPages(products);
    if(totalPages(products)<=5){
        for(let i  = 1; i <= totalPages(products); ++i){
            htmls = `
                <button class="nbP flex">${i}</button>
            `
            $('.number-page').insertAdjacentHTML("beforeend",htmls);
        }
        jQuery(".nbp--none-click").hide();
        $(".tdsgt-SortResult .nExt-btn").disabled = true;
        $(".tdsgt-SortResult .nExt-btn").style.opacity = 0.5;
    }
    if(totalPages(products)> 5){
        for(let i  = 1; i <=totalPages(products); ++i){
            htmls = `
                <button class="nbP flex">${i}</button>
            `
            //$(".number-page").insertAdjacentHTML("beforeend",htmls);
            jQuery(".number-page").append(htmls);
        }
        let dots = `<button class="nbP nbp--none-click flex color-gray font16" disabled>...</button>`
        //$(".number-page-wrapper").insertAdjacentHTML("afterend",dots);
        $(".tdsgt-SortResult .nExt-btn").disabled = false;
        $(".tdsgt-SortResult .nExt-btn").style.opacity = 1;
    }
    //Change number-page-wrapper width;
    if(totalPages(products)<=5){
        $(".number-page-wrapper").style.width = getWidthBtnPaginationController($('.nbP'))*totalPages(products) + totalPages(products)*16 + "px";
    }
    //handle when clicked on $(".tdsgt-SortResult .prev-next btns")
    $(".tdsgt-SortResult .nExt-btn").onclick = () =>{
        clicked_nbP++;
        if(clicked_nbP < totalPages(products)){
            $$(".nbP").forEach((btn,ind)=>{
                ind = clicked_nbP;
                moveStateActiveBtns($$(".nbP")[ind]);
            })
        }
        if(clicked_nbP >= totalPages(products)){
            clicked_nbP = totalPages(products)-1;
        }
        clicked = clicked_nbP+1;
        $("#start-number").innerHTML = $(".nbP.active").innerHTML;
        setOpacity($("#start-number").innerHTML, totalPages(products),$(".sortBy_right .prev-btn"),$(".sortBy_right .nExt-btn"));
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
        clicked = clicked_nbP+1;
        $("#start-number").innerHTML = $(".nbP.active").innerHTML;
        setOpacity($("#start-number").innerHTML, totalPages(products),$(".sortBy_right .prev-btn"),$(".sortBy_right .nExt-btn"));
    }
}
export function create_footer_pagination_UI(products){
    let total_Pages = totalPages(products);
    number_page.innerHTML = create_number_page_btns(total_Pages, currentPage);
    function create_number_page_btns(total_Pages, currentPage){
        let ui = '';
        let active;
        beforePage = currentPage - 1;
        afterPage = currentPage + 1;
        //Pagination btns on the footer all-products views.
        if(total_Pages<=5){
            for(let i = currentPage; i <= total_Pages; ++i){
                if(i==0){
                    i = i+1;
                }
                if(i==totalPages){

                }
                ui += `
                    <button class="nbP flex">${i}</button>
                `
            }
            jQuery(".nbp--none-click").hide();
        }
        if(total_Pages> 5){
            for(let i  = currentPage; i <= totalPages; ++i){
                if(currentPage == i){
                    active = "active";
                } else{
                    active = '';
                }
                ui += `<button class="nbP flex ${active}" onclick="console.log(this)">${i}</button>`
            }
            //htmls = `<button class="nbP nbp--none-click flex color-gray font16" disabled>...</button>`
            //$(".number-page-wrapper").insertAdjacentHTML("afterend",dots);

        }
        //handle when clicked on $(".tdsgt-SortResult .prev-next btns")
        $(".tdsgt-SortResult .nExt-btn").onclick = () =>{
            clicked_nbP++;
            if(clicked_nbP < total_Pages){
                $$(".nbP").forEach((btn,ind)=>{
                    ind = clicked_nbP;
                    moveStateActiveBtns($$(".nbP")[ind]);
                })
            }
            if(clicked_nbP >= total_Pages){
                clicked_nbP = total_Pages-1;
            }
            clicked = clicked_nbP+1;
            $("#start-number").innerHTML = $(".nbP.active").innerHTML;
            setOpacity($("#start-number").innerHTML, total_Pages,$(".sortBy_right .prev-btn"),$(".sortBy_right .nExt-btn"));
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
            clicked = clicked_nbP+1;
            $("#start-number").innerHTML = $(".nbP.active").innerHTML;
            setOpacity($("#start-number").innerHTML, total_Pages,$(".sortBy_right .prev-btn"),$(".sortBy_right .nExt-btn"));
        }
        number_page.innerHTML = ui;
        return ui;
    }
}
//Add animation for nbP btns
export function add_animation_btns_controller_pagination(products){
    $$('.nbP').forEach((btn,ind)=>{
        if(ind==0){
            btn.classList.add("active");
        }
        btn.onclick = ()=>{
            clicked_nbP = ind;
            clicked = ind+1;
            moveStateActiveBtns(btn);
            $("#start-number").innerHTML = ind+1;
            setOpacity($("#start-number").innerHTML, totalPages(products),$(".sortBy_right .prev-btn"),$(".sortBy_right .nExt-btn"));
            if(ind==4){
                moveScrollLeftbtns(btn);
            }
            if(ind>4){
                moveScrollLeftbtns(btn);
            }
            
        }
    })
}

export function pagination(products){
    create_products(products);
    create_header_pagination(products);
    create_footer_pagination_UI(products)
    //add_animation_btns_controller_pagination(products);
 }