import {render_products_none_hoversameblock, render_products} from "./condition_render_data.js";
import {renderHeaderNav_base_desktop, renderHeaderNav_homepage_mobile} from "./header.js";
import {keysearch} from "./keyword_search.js";
import {render_info_shop_detailProductsPage_onPC} from "./shop_information.js";
import {footerHomepage, footerTodaySuggestionMobile} from "./footer.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
function fetchData(){
    fetch("../data/data.json")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            if(window.innerWidth >=1008){
                renderHeaderNav_base_desktop();
                keysearch(data.key_search);
                render_info_shop_detailProductsPage_onPC(data.shop_onlines);
                topsales_sidebar_onPC(data.products_inshop);
                create_pagination_controller(1,10);
            }
            if(window.innerWidth<= 834){
                topsales_sidebar_onMobile(data.products_inshop);
            }
            same_products(data.products_inshop);
            recommend_products(data.products);
            changeProperties();
            handle_IMGsDetail_group();
        })
} 
fetchData()
function same_products(data){
    for(let i in data){
        if(i<4){
            $(".suggestion_products_ShopOnline").innerHTML += render_products_none_hoversameblock(i);
        }
    }
}
function recommend_products(data){
    let max_item_load = 6;
    footerHomepage();
    for(let i in data){
        if(i< max_item_load){
            $('.tdsgtion').innerHTML += render_products_none_hoversameblock(i);
        }
    }
    $('.footer-tdsgtion-seemore-ctn').onclick = ()=>{
        for(let i =max_item_load; i< max_item_load+6;++i){
            $('.tdsgtion').innerHTML += render_products_none_hoversameblock(i);
        }
        max_item_load+=6;
        if(max_item_load>=data.length){
            $('.footer-sggtion-see-more').style.display ='none';
            // footerTodaySuggestionMobile();
        }
    }
}
function topsales_sidebar_onPC(data){
    let arr = new Array;
    for(let i of data){
        if(i.quantity_sold>400){
            arr.push(i);
        }
    }
    arr.map((item,ind)=>{
        if(ind<5){
            return $(".topsales-onPC .top-sales-container").innerHTML += render_products_none_hoversameblock(item);
        }
    })
}
function topsales_sidebar_onMobile(data){
    let arr = new Array;
    for(let i of data){
        if(i.quantity_sold>400){
            arr.push(i);
        }
    }
    arr.map((item,ind)=>{
        if(ind<3){
            return $(".top-sales-container").innerHTML += render_products_none_hoversameblock(item);
        }
    })
}
// Paging User's Feedback
let paginationController = $(".pagination-controller")
// paginationController.innerHTML = create_pagination_controller(1,10)
export function create_pagination_controller(currentPage, totalpages){
    let ui = "";
    var active;
    let beforePage = currentPage - 1;
    let afterPage = currentPage + 1;
    if (currentPage > 2) {
        //if page value is less than 2 then add 1 after the previous button
        ui += `<button class="nbP flex" onclick="create_pagination_controller(1, totalpages)">
                    <span>1</span>
                </button>`;
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
        ui += `<button class = "nbP flex ${active} none-change-opacity" onclick="create_pagination_controller(${i}, totalpages">${i}</button>`
    }
    if(currentPage<totalpages-1){
        if(currentPage<totalpages-2){
            ui += `<button class="nbp--none-click flex color-gray font16" disabled>...</button>`
        }
        ui += `<button class = "nbP flex ${active} none-change-opacity">${totalpages}</button>`
    }
    paginationController.innerHTML += ui;
    return ui;
}
function changeProperties(){
    if(window.innerWidth>=1024){
    
    }
    if(window.innerWidth<=844){
        window.addEventListener("scroll", ()=>{
            if(window.scrollY >0){
                $(".mobile-search-controller").style.backgroundColor = "var(--container-color)";
                $(".mobile-search-controller").style.top= "0px";
                $(".products-inner-header div").innerHTML = $(".product-name-mobile").innerHTML;
            }
            if(window.scrollY==0){
                $(".mobile-search-controller").style.backgroundColor = "";
                $(".mobile-search-controller").style.top= "0px";
                $(".products-inner-header div").innerHTML = "";

            }
        })
    }
}
function handle_IMGsDetail_group(){
    let srcItem;
    document.querySelectorAll(".detailImg-product-item img").forEach((item,ind)=>{
        if(ind==0){
            srcItem = item.getAttribute('src');
            $(".mainImg-product").setAttribute("src", srcItem);
        }
        item.onclick = ()=>{
            srcItem = item.getAttribute('src');
            $(".mainImg-product").setAttribute("src", srcItem);
        }
    })
}