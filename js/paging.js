let htmls = "", clicked_nbP =0;
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
export let maximum_numbers_item_on_per_page = 5, currentPage =1, prevRange, currRange, numberPage = $(".number-page");
import {render_products} from "./condition_render_products.js";
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
            $(".tdsgtion").innerHTML += render_products(products[ind]);
        }
    })
}

//Render item on perpage follow click-btn-header

//Render header pagination controller
export function create_header_pagination(products){
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
            reset_bl1SbBtn()
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
}
//Render footer pagination controller
export function create_footer_pagination(products){
    //Pagination btns on the footer all-products views.
    totalPages(products);
    // $('.number-page').innerHTML = "";
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
        $(".number-page-wrapper").style.width = getWidthBtnPaginationController($(".nbP"))*products.length;
        // $(".number-page-wrapper").insertAdjacentHTML("afterend",dots);
        // create_pagination_controller(currentPage, totalPages(products), products)
    }
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
}
//Add animation for nbP btns
export function add_animation_btns_controller_pagination(currentPage, products){
    $$('.nbP').forEach((btn,ind)=>{
        if(ind==0){
            btn.classList.add("active");
        }
        btn.onclick = ()=>{
            clicked_nbP = ind;
            currentPage = ind+1;
            moveStateActiveBtns(btn);
            $("#start-number").innerHTML = ind+1;
            setOpacity($("#start-number").innerHTML, totalPages(products),$(".sortBy_right .prev-btn"),$(".sortBy_right .nExt-btn"));
            setCurrentPage(currentPage, products);
            $(".pRCX span").innerHTML = "Giá";
            $(".pRCX span").style.color = "black";
            reset_bl1SbBtn();
        }
    })
}

//const paginationController = document.querySelector(".number-page");
function create_pagination_controller(currentPage, totalpages, products){
    let ui = "";
    var active;
    let beforePage = currentPage - 1;
    let afterPage = currentPage + 1;
    totalpages = totalPages(products);
    if (currentPage > 2) {
        //if page value is less than 2 then add 1 after the previous button
        ui += `<button class="first numb" onclick=""><span>1</span></button>`;
        if (page > 3) {
          //if page value is greater than 3 then add this (...) after the first li or page
          ui += `<button class="nbp--none-click flex color-gray font16" disabled>...</button>`;
        }
      }
    for(let i = beforePage; i<= afterPage;i++){
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
        ui += `<button class = "nbP flex ${active} none-change-opacity" onclick="create_pagination_controller(${i}, totalPages(products), products)">${i}</button>`
    }
    if(currentPage<totalpages-1){
        if(currentPage<totalpages-2){
            ui += `<button class="nbp--none-click flex color-gray font16" disabled>...</button>`
        }
        ui += `<button class = "nbP flex ${active} none-change-opacity">${totalpages}</button>`
    }
    numberPage.innerHTML = ui;
    return ui;
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
export function pagination(products){
    setCurrentPage(1,products)
    create_header_pagination(products);
    create_footer_pagination(products);
    add_animation_btns_controller_pagination(currentPage, products);
}