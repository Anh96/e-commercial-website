import { header_none_logo_input_cart, header_cartpage_mobile} from "./header.js";
import {footerBase} from "./footer.js";
import {render_products_none_hoversameblock} from "./condition_render_data.js";
import {pagination_none_headerPagination} from './paging.js';
let fetchData = ()=>{
    fetch("../data/data.json")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            if(window.innerWidth>=1008){
                header_none_logo_input_cart();
                lookingsameproductsbtn(data.products);
                footerBase();
            }
            if(window.innerWidth<=834){
                header_cartpage_mobile();
            }
        })
}
fetchData();
function lookingsameproductsbtn(data){
    const  mMh510Div = document.querySelector(".mMh510Div");
    const mMh510_txtC = document.querySelector(".mMh510-txtC");
    const same_products_container = document.querySelector(".same-products-container");
    const number_page = document.querySelector(".number-page");
    mMh510Div.onclick = ()=>{
       document.querySelector(".tdsgtion").innerHTML = "";
       document.querySelector(".number-page").innerHTML= "";
       mMh510_txtC.classList.toggle("mMh510-txtC-overflow");
       if(same_products_container.style.display === "block"){
           same_products_container.style.display = "none";
        }else{
            same_products_container.style.display = "block";
            show_sameproducts(data);
        }
    }
}
function show_sameproducts(data){

    pagination_none_headerPagination(data);
}