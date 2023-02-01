$ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let htmls;
import {catagories_res_mobile, counting_frequencies_item_catagories_inshop} from "./condition_render_data.js";
import { handle_header_catagories_mobile } from "./responsive.js";
handle_header_catagories_mobile();
const arr = [10,3, 1 ,1, 4,3, 10, 10]
fetch("../data/data.json")
    .then(res=> {
        return res.json()
    })
    .then(data=>{
        render_info_shop_online(data.shop_onlines);
        catagories_res_mobile(data.products_inshop);
    })
    function render_info_shop_online(shops){
        shops.forEach(shop=>{
            if(shop.shop_id == 1){
                $('.ltf-img').innerHTML =  `<div class="logo_shop_img" style="background-image:url('${shop.logo_shop}')"></div>`;
                $('.shop-bgr').innerHTML = `<div class="shopBGR-img" style = "background-image:url('${shop.shop_background_image}')"></div>`
                if(shop.favorite_shop==true){
                    $('.fvr-shop').style.display = "block";
                }
                if(shop.favorite_shop == false){
                    $('.fvr-shop').style.display = "none";
                }
                $('.shopName').innerHTML = `${shop.shop_name}`
                if(shop.state_online==true){
                    $('.time-online').innerHTML =
                    `
                        <div class="circle-state"></div>
                        <div class=" txt-white-color mgl-8 font16">Đang hoạt động</div>
                    `
                }
                if(shop.state_online==false){
                    $('.time-online'),innerHTML = 
                        `
                            <div class=" txt-white-color font16";">Online ${shop.hours_online_ago} giờ trước</div>
                        `
                }
                $(".data-rating").innerHTML = `${shop.rating_shop}`;
                $(".followers div").innerHTML = `${shop.quantity_pages_follow}`;
            }
        })
    }