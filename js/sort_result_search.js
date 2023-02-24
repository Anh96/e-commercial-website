import {render_products} from "./condition_render_data.js";
import {renderHeaderNav_base_desktop} from "./header.js";
import {keysearch} from "./keyword_search.js"
import {footerBase, footerBase_onMobile} from "./footer.js";
import {pagination} from "./paging.js"
import {render_info_sortResultPage } from './shop_information.js';
// import {sortFollowBtn, sortFollowPrice} from "./handleEventShopOnline.js"
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let htmls, products_paging_after_filter = new Array;
const btns = $$('.sOrt .bl1Sb-btn');
fetch('../data/data.json')
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        if(window.innerWidth>=1008){
            renderHeaderNav_base_desktop();
            keysearch(data.key_search);
            footerBase();
        }
        if(window.innerWidth<=834){
            footerBase_onMobile();
        }
        relative_products(data.products_inshop);
        render_info_sortResultPage(data.shop_onlines);
    })

//Relative Products
    function relative_products(products){
        sortFollowBtn(products);
        // sortFollowPrice(products);
        // pagination(products);
    }
    // Sort
    function sort_quantitySold(products){
        products.sort(function(a,b){
            return b.quantity_sold - a.quantity_sold;
        })
    }
    function render_after_press_btns_sort(products){
        sort_quantitySold(products);
        htmls = products.map(prod=>{
            return render_products(prod);
        })
        $('.tdsgtion-sshO').innerHTML = htmls.join("");
   }
    export function sortFollowBtn(products){
        btns.forEach((btn,i)=>{
            btn.onclick = ()=>{
                // products_paging_after_filter.length =0;
                // if(i<=2){
                //     // $(".pRCX span").innerHTML = `Giá`;
                //     // $(".pRCX span").style.color = "black";
                // $('.bl1Sb-btn.active').classList.remove("active");
                //     if(i==0){
                //         $('.tdsgtion-sshO').innerHTML = "";
                //         this.classList.add("active");
                //         // products.map((prod,ind)=>{
                //         //     if(ind >= prevRange && ind < currRange){
                //         //         htmls = render_products(prod);
                //         //         $('.tdsgtion-sshO').innerHTML += htmls;
                //         //      }
                //         // })
                //     }
                //     if(i==1){
                //         this.classList.add("active")
                //     }
                //     if(i==2){
                //         this.classList.add("active")
                //         // products.map((prod,ind)=>{
                //         //      if(ind >= prevRange && ind < currRange){
                //         //          return products_paging_after_filter.push(prod);
                //         //      }
                //         // })
                //         // render_after_press_btns_sort(products_paging_after_filter);
                //     }
                // }
                console.log(i)
                // if(!i){
                //     $('.bl1Sb-btn.active').classList.remove("active")
                // }
                // btn.classList.add("active");
            }
        })
    }