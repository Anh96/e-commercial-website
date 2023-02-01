import {render_products} from "./condition_render_data.js";
import {renderHeaderNav_base_desktop} from "./header.js";
import {keysearch} from "./keyword_search.js"
import {footerBase} from "./footer.js";
import {pagination} from "./paging.js"
import {sortFollowBtn, sortFollowPrice} from "./handleEventShopOnline.js"
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let htmls;
fetch('../data/data.json')
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        if(window.innerWidth>=1240){
            renderHeaderNav_base_desktop();
            keysearch(data.key_search);
            relative_products(data.products_inshop)
            footerBase();
        }
        shopInfo(data.shop_onlines)
    })
//Shop Info
    function shopInfo(infos){
        infos.forEach(info=>{
            if(info.shop_id ==1){
                htmls = 
                `
                    <a href="../page/shopPage.html" class="rlt0Sk txt-Black-color flex none-change-opacity">
                        <div class="lft-rltSk flx mgl-8">
                            <div class="ltf-img-ctn">
                                <div class="ltf-img">
                                    <div id="logo_shop_img" style="background-image:url('${info.logo_shop}')"></div>
                                </div>
                                <div class="fvr-shop txt-white-color flex">Yêu Thích</div>
                            </div>
                            <div class="rgt mgl-8">
                                <div class="rgt-heading mgTB-8">
                                    <h3>${info.shop_name}</h3>
                                </div>
                                <div class="rgt-heading mgTB-8">Tài trợ bởi ${info.shop_patron}</div>
                                <div class="rgt-heading flex">
                                    <div class="number-follow-data flx color-primary-text">${info.quantity_users_follow/1000}k
                                        <div class="mgl-8 color-gray">Người theo dõi</div>
                                    </div>
                                    <div class="number-shop-follow flx mgl-8 color-primary-text">${info.quantity_pages_follow}
                                        <div class="mgl-8 color-gray">Đang theo</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right-rltSk-ctn flex">
                            <ul class="nav-Right-ctn flex">
                                <li class="rgt-item-nav bd-left bd-right pd-LR-4">
                                    <div class="item-nav-link txt-Black-color">
                                        <div class="ctn flex">
                                            <div>
                                                <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" stroke="var(--primary-color)" class="shopee-svg-icon icon-products">
                                                    <g>
                                                        <path d="m10 1 4.5 2.5-.5 3h-2v7.5h-9v-7.5h-2l-.5-3 4.6-2.5c.3 1.1 1.3 1.9 2.4 1.9s2.1-.8 2.5-1.9z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
                                                        <line fill="none" stroke-linecap="round" stroke-miterlimit="10" x1="3" x2="12" y1="11.5" y2="11.5"></line>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div class="color-primary-text font-14 mgl-8">${info.quantity_products_inshop}</div>
                                        </div>
                                        <div class="txt-Black-color flex color-gray">Sản Phẩm</div>
                                    </div>
                                </li>
                                <li class="rgt-item-nav pd-LR-4 bd-right">
                                    <div class="item-nav-link txt-Black-color">
                                        <div class="ctn flex">
                                            <div>
                                                <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" stroke="var(--primary-color)" class="shopee-svg-icon icon-rating"><polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon></svg>
                                            </div>
                                            <div class="color-primary-text font-14 mgl-8">${info.rating_shop}</div>
                                        </div>
                                        <div class="txt-Black-color flex color-gray">Đánh Giá</div>
                                    </div>
                                </li>
                                <li class="rgt-item-nav pd-LR-4 bd-right">
                                    <div class="item-nav-link txt-Black-color">
                                        <div class="ctn flex">
                                            <div>
                                                <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" stroke="var(--primary-color)" class="shopee-svg-icon"><g><polygon fill="none" points="14 10.8 7 10.8 3 13.8 3 10.8 1 10.8 1 1.2 14 1.2" stroke-linejoin="round" stroke-miterlimit="10"></polygon><circle cx="4" cy="5.8" r="1" stroke="none"></circle><circle cx="7.5" cy="5.8" r="1" stroke="none"></circle><circle cx="11" cy="5.8" r="1" stroke="none"></circle></g></svg>
                                            </div>
                                            <div class="color-primary-text font-14 mgl-8">${info.percent_respons}%</div>
                                        </div>
                                        <div class="txt-Black-color flex color-gray">Tỉ Lệ Phản Hồi</div>
                                    </div>
                                </li>
                                <li class="rgt-item-nav pd-LR-4 bd-right">
                                    <div class="item-nav-link txt-Black-color">
                                        <div class="ctn flex">
                                            <div>
                                                <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" stroke="var(--primary-color)" class="shopee-svg-icon"><g><polyline fill="none" points="7.2 3.5 7.2 7.8 10.5 7.8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polyline><circle cx="7.5" cy="7.5" fill="none" r="6.5" stroke-miterlimit="10"></circle></g></svg>
                                            </div>
                                            <div class="color-primary-text font-14 mgl-8">trong vài giờ</div>
                                        </div>
                                        <div class="txt-Black-color flex color-gray">Thời Gian Phản Hồi</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </a>
                `
                $('.relative-shop-key-ctn').insertAdjacentHTML('beforeend',htmls)
            }
        })
    }
//Relative Products
    function relative_products(products){
        pagination(products);
        sortFollowBtn(products);
        sortFollowPrice(products);
    }