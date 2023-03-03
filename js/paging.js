const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let clicked_nbP =0;
export let maximum_numbers_item_on_per_page = 10, maximum_itemp_per_page_onCartpage = 5, currentPage =1, prevRange, currRange;
import {render_products} from "./condition_render_data.js";
function moveStateActiveBtns(nbp){
    $('.nbP.active').classList.remove("active");
    nbp.classList.add("active");
}
function getWidthBtnPaginationController(nbp){
    return nbp.getBoundingClientRect().width+nbp.style.margin;
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
// set current page
export let setCurrentPage = (pageNum, products)=>{
    prevRange = (pageNum-1)*maximum_numbers_item_on_per_page;
    currRange = pageNum*maximum_numbers_item_on_per_page;
    $(".tdsgtion").innerHTML = "";
    products.forEach((item,ind)=>{
        if(ind>=prevRange && ind <currRange){
            $(".tdsgtion").innerHTML += render_products(item);
        }
    })
}
// reset current page;
export function reset_currentPage(){
    return currentPage =1;
}
// reset bl1Sb-btn;
export function reset_bl1SbBtn(){
    $('.bl1Sb-btn.active').classList.remove("active");
    $$(".bl1Sb-btn")[0].classList.add("active");
    
    $(".pRCX span").innerHTML = "Giá";
    $(".pRCX span").style.color = "black";
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
                $('#start-number').innerHTML = currentPage;
                $(".sortBy_right .prev-btn").setAttribute("disabled","disabled");
                $(".sortBy_right .prev-btn").style.opacity = 0.5;
            }
            if(currentPage >1){
                $('#start-number').innerHTML = currentPage;
                $(".prev-btn").removeAttribute("disabled");  
            }
            clicked_nbP = currentPage - 1;
            $$(".nbP").forEach((btn,ind)=>{
                ind = currentPage - 1;
                moveStateActiveBtns($$(".nbP")[ind]);
            })
            setOpacity($("#start-number").innerHTML, totalPages(products), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));
            setCurrentPage(currentPage,products);
        }
        $('.sortBy_right .nExt-btn').onclick = ()=>{
            currentPage++;
            reset_bl1SbBtn();
            if(currentPage <= totalPages(products) ){
                    $('#start-number').innerHTML = currentPage;
                    $(".sortBy_right .nExt-btn").removeAttribute("disabled");
            }
            if(currentPage > totalPages(products)){
                    currentPage =  totalPages(products);
                    $(".sortBy_right .nExt-btn").setAttribute("disabled","disabled");
            }
            clicked_nbP = currentPage - 1;
            $$(".nbP").forEach((btn,ind)=>{
                ind = currentPage-1;
                moveStateActiveBtns($$(".nbP")[ind]);
            })
            setOpacity($("#start-number").innerHTML, totalPages(products), $(".sortBy_right .prev-btn"), $(".sortBy_right .nExt-btn"));
            setCurrentPage(currentPage, products);

        }
    }
    // Handle footer pagination
    //Pagination btns on the footer all-products views.
    totalPages(products);
    if(totalPages(products)<=6){
        for(let i  = 1; i <= totalPages(products); ++i){
            $('.number-page').innerHTML += `
                <button class="nbP flex">${i}</button>
            `
        }
    }
    if(totalPages(products)> 6){
        for(let i  = 1; i <= totalPages(products); ++i){
            $('.number-page').innerHTML += `
                <button class="nbP flex">${i}</button>
            `
        }
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
        if(clicked_nbP < totalPages(products)){
            $$(".nbP").forEach((btn,ind)=>{
                ind = clicked_nbP;
                moveStateActiveBtns($$(".nbP")[ind]);
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
        if(clicked_nbP >= 0){
            $$(".nbP").forEach((btn,ind)=>{
                ind = clicked_nbP;
                moveStateActiveBtns($$(".nbP")[ind]);
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
            moveStateActiveBtns(btn);
            $("#start-number").innerHTML = currentPage;
            setOpacity($("#start-number").innerHTML, totalPages(products),$(".sortBy_right .prev-btn"),$(".sortBy_right .nExt-btn"));
            setCurrentPage(currentPage, products);
            $(".pRCX span").innerHTML = "Giá";
            $(".pRCX span").style.color = "black";
            reset_bl1SbBtn();
        }
    })
}
export function pagination(products){
    setCurrentPage(1,products);
    create_pagination_controller(currentPage, products);
}
// ======================================================
// ================== Paging Cart Page ==================
// set current page
export let setCurrentPage_CartPage = (pageNum, products)=>{
    prevRange = (pageNum-1)*maximum_itemp_per_page_onCartpage;
    currRange = pageNum*maximum_itemp_per_page_onCartpage;
    $(".tdsgtion").innerHTML = "";
    products.forEach((item,ind)=>{
        if(ind>=prevRange && ind <currRange){
            $(".tdsgtion").innerHTML += render_products(products[ind]);
        }
    })
}
// Total Pages
export function totalPages_CartPage(products){
    // Làm tròn số bằng hàm Math.ceil()
    return Math.ceil(products.length/maximum_itemp_per_page_onCartpage);
}
//Render footer pagination controller
export function create_footer_pagination_CartPage(products){
    //Pagination btns on the footer all-products views.
    totalPages_CartPage(products);
    // next - prev button
    if(totalPages_CartPage(products)<=6){
        for(let i  = 1; i <= totalPages_CartPage(products); ++i){
            $('.number-page').innerHTML += `
                <button class="nbP flex none-change-opacity">${i}</button>
            `
        }
    }
    if(totalPages_CartPage(products)> 6){
        for(let i  = 1; i <= totalPages_CartPage(products); ++i){
            $('.number-page').innerHTML += `
                <button class="nbP flex none-change-opacity">${i}</button>
            `
        }
    }
    // set postion of prev-next btns
    // $(".nav-btn.prev-btn").style.left = $$(".nbP")[0].offsetLeft - 30 +'px';
    // $(".nav-btn.nExt-btn").style.left = $$(".nbP")[totalPages_CartPage(products)-1].offsetLeft + 30 + 'px';

    // active or disabled next-prev btns
    if(totalPages_CartPage(products)==1){
        // $(".tdsgt-SortResult .nExt-btn").disabled = true;
        // $(".tdsgt-SortResult .nExt-btn").style.opacity = 0.5;
        // $(".tdsgt-SortResult .prev-btn").disabled = true;
        // $(".tdsgt-SortResult .prev-btn").style.opacity = 0.5;
    }
    if(totalPages_CartPage(products)>= 2){
        // $(".tdsgt-SortResult .nExt-btn").disabled = false;
        // $(".tdsgt-SortResult .nExt-btn").style.opacity = 1;
        // $(".tdsgt-SortResult .prev-btn").disabled = false;
        // $(".tdsgt-SortResult .prev-btn").style.opacity = 1;
    }

    //handle when clicked on $(".tdsgt-SortResult .prev-next btns")
    // $(".tdsgt-SortResult .nExt-btn").onclick = () =>{
    //     clicked_nbP++;
    //     if(clicked_nbP < totalPages_CartPage(products)){
    //         $$(".nbP").forEach((btn,ind)=>{
    //             ind = clicked_nbP;
    //             moveStateActiveBtns($$(".nbP")[ind]);
    //         })
    //     }
    //     if(clicked_nbP >= totalPages_CartPage(products)){
    //         clicked_nbP = totalPages_CartPage(products)-1;
    //     }
    //     currentPage = clicked_nbP+1;
    //     setCurrentPage_CartPage(currentPage,products);
    // }
    // $(".tdsgt-SortResult .prev-btn").onclick = ()=>{
    //     clicked_nbP--;
    //     if(clicked_nbP >= 0){
    //         $$(".nbP").forEach((btn,ind)=>{
    //             ind = clicked_nbP;
    //             moveStateActiveBtns($$(".nbP")[ind]);
    //         })
    //     }
    //     if(clicked_nbP<0){
    //         clicked_nbP = 0;
    //     }
    //     currentPage = clicked_nbP+1;
    //     setCurrentPage_CartPage(currentPage, products);
    // }
}
// 
export function add_animation_btns_controller_pagination_CartPage(currentPage, products){
    $$('.nbP').forEach((btn,ind)=>{
        if(ind==0){
            btn.classList.add("active");
        }
        btn.onclick = ()=>{
            clicked_nbP = ind;
            currentPage = ind+1;
            moveStateActiveBtns(btn);
            setCurrentPage_CartPage(currentPage, products);
        }
    })
}
export function pagination_none_headerPagination(data){
    setCurrentPage_CartPage(1,data);
    create_footer_pagination_CartPage(data);
    add_animation_btns_controller_pagination_CartPage(currentPage, data);
}
