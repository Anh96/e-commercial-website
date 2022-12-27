let htmls = "", clicked =1, clicked_nbP =0;
export let maximum_numbers_item_on_per_page = 10;
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
//const paginationController = document.querySelector(".number-page");
let currentPage =1, beforePage, afterPage, totalpages = 10;
$(".number-page").innerHTML = create_pagination_controller(currentPage,totalpages)
function create_pagination_controller(currentPage,totalpages){
    let ui = "";
    var active;
    beforePage = currentPage -1;
    afterPage = currentPage + 1;
    for(let i = beforePage; i<=afterPage;i++){
        if(i>totalpages){
            continue;
        }
        if(i==0){
            i= i+1;
        }
        if(currentPage == i){
            active = "active";
        }
        else{
            active = "";
        }
        ui += `<button class = "nbP flex ${active}" onclick = "create_pagination_controller(${i},totalpages)">${i}</button>`
    }
    if(currentPage<totalpages-1){
        if(currentPage<totalpages-2){
                ui += `<button class="nbP nbp--none-click flex color-gray font16" disabled>...</button>`
        }
        ui += `<button class = "nbP flex ${active}" onclick = "create_pagination_controller(${totalpages},totalpages)">${totalpages}</button>`
    }
    $(".number-page").innerHTML = ui;
    return ui;
}
export function pagination(products){
    // create_pagination_controller(currentPage, totalPages(products))
    // document.querySelector(".number-page").innerHTML = create_pagination_controller(currentPage,totalPages(products));
    create_products(products);
    create_header_pagination(products);
    // add_animation_btns_controller_pagination(products);
}