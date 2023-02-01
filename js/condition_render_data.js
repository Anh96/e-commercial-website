const $$ = document.querySelectorAll.bind(document)
//Caculate price promotion
export let calculator_promotion_price = (product)=>{
    // return product.price - (product.price *product.percent_saleoff/100);
    return new Intl.NumberFormat('vi-VN').format(product.price - (product.price *product.percent_saleoff/100));
}
let htmls;
export function render_products(prod){
    var x = calculator_promotion_price(prod)
        // Case: percent-sale-off >0 && footer_img_url != ""
            //Case: prod.percent_saleoff>0 && prod.freeship == true && prod.rating >0 && prod.quantity_sold>0
            if(prod.percent_saleoff>0 && prod.freeship == true && prod.rating >0 && prod.quantity_sold>0 && prod.footer_img_url != ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="header-link-sale-off-container">
                                            <div class="header-block-sale-off">
                                                <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                                <span class="sale-text">Giảm</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${prod.footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <del class="dell-price flxC color-gray">
                                                        <div class="currenty-sggtion font075">đ</div>
                                                        <div class="price-sggtion">${new Intl.NumberFormat('vi-VN').format(prod.price)}</div>
                                                    </del>
                                                    <div class="crr-price flxC mgl-8">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                                <div class="prc-right">
                                                    <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                                                        <g fill="none" fill-rule="evenodd" transform="">
                                                            <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                            <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                            <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                            <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                            <circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn">
                                                    <div class="rating-star-ctn flex">
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mgl-8 flex">Đã bán
                                                    <span class="number-sld mgl-8">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case: prod.percent_saleoff>0 && prod.freeship == false && prod.rating >0 && prod.quantity_sold>0
            if(prod.percent_saleoff>0 && prod.freeship == false && prod.rating >0 && prod.quantity_sold>0 && prod.footer_img_url!= ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="header-link-sale-off-container">
                                            <div class="header-block-sale-off">
                                                <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                                <span class="sale-text">Giảm</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${prod.footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <del class="dell-price flxC color-gray">
                                                        <div class="currenty-sggtion font075">đ</div>
                                                        <div class="price-sggtion">${new Intl.NumberFormat('vi-VN').format(prod.price)}</div>
                                                    </del>
                                                    <div class="crr-price flxC mgl-8">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn">
                                                    <div class="rating-star-ctn flex">
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mgl-8 flex">Đã bán
                                                    <span class="number-sld mgl-8">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case: prod.percent_saleoff>0 && prod.freeship == true && prod.rating ==0 && prod.quantity_sold>0
            if(prod.percent_saleoff>0 && prod.freeship == true && prod.rating ==0 && prod.quantity_sold>0 && prod.footer_img_url != ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="header-link-sale-off-container">
                                            <div class="header-block-sale-off">
                                                <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                                <span class="sale-text">Giảm</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${prod.footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <del class="dell-price flxC color-gray">
                                                        <div class="currenty-sggtion font075">đ</div>
                                                        <div class="price-sggtion">${new Intl.NumberFormat('vi-VN').format(prod.price)}</div>
                                                    </del>
                                                    <div class="crr-price flxC mgl-8">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                                <div class="prc-right">
                                                    <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                                                        <g fill="none" fill-rule="evenodd" transform="">
                                                            <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                            <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                            <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                            <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                            <circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn"></div>
                                                <div class="flex">Đã bán
                                                    <span class="number-sld mgl-8">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case: prod.percent_saleoff>0 && prod.freeship == true && prod.rating >0 && prod.quantity_sold==0
            if(prod.percent_saleoff>0 && prod.freeship == true && prod.rating >0 && prod.quantity_sold==0 && prod.footer_img_url!= ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="header-link-sale-off-container">
                                            <div class="header-block-sale-off">
                                                <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                                <span class="sale-text">Giảm</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${prod.footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <del class="dell-price flxC color-gray">
                                                        <div class="currenty-sggtion font075">đ</div>
                                                        <div class="price-sggtion">${new Intl.NumberFormat('vi-VN').format(prod.price)}</div>
                                                    </del>
                                                    <div class="crr-price flxC mgl-8">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                                <div class="prc-right">
                                                    <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                                                        <g fill="none" fill-rule="evenodd" transform="">
                                                            <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                            <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                            <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                            <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                            <circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn">
                                                    <div class="rating-star-ctn flex">
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case: prod.percent_saleoff>0 && prod.freeship == false && prod.rating ==0 && prod.quantity_sold>0
            if(prod.percent_saleoff>0 && prod.freeship == false && prod.rating ==0 && prod.quantity_sold>0 && prod.footer_img_url!= ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="header-link-sale-off-container">
                                            <div class="header-block-sale-off">
                                                <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                                <span class="sale-text">Giảm</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${prod.footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <del class="dell-price flxC color-gray">
                                                        <div class="currenty-sggtion font075">đ</div>
                                                        <div class="price-sggtion">${new Intl.NumberFormat('vi-VN').format(prod.price)}</div>
                                                    </del>
                                                    <div class="crr-price flxC mgl-8">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn"></div>
                                                <div class="flex">Đã bán
                                                    <span class="number-sld mgl-8">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case: prod.percent_saleoff>0 && prod.freeship == false && prod.rating >0 && prod.quantity_sold==0
            if(prod.percent_saleoff>0 && prod.freeship ==false && prod.rating >0 && prod.quantity_sold==0 && prod.footer_img_url != ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="header-link-sale-off-container">
                                            <div class="header-block-sale-off">
                                                <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                                <span class="sale-text">Giảm</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${prod.footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <del class="dell-price flxC color-gray">
                                                        <div class="currenty-sggtion font075">đ</div>
                                                        <div class="price-sggtion">${new Intl.NumberFormat('vi-VN').format(prod.price)}</div>
                                                    </del>
                                                    <div class="crr-price flxC mgl-8">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn">
                                                    <div class="rating-star-ctn flex">
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case: prod.percent_saleoff>0 && prod.freeship == true && prod.rating ==0 && prod.quantity_sold==0
            if(prod.percent_saleoff>0 && prod.freeship == true && prod.rating ==0 && prod.quantity_sold==0 && prod.footer_img_url != ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="header-link-sale-off-container">
                                            <div class="header-block-sale-off">
                                                <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                                <span class="sale-text">Giảm</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${prod.footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <del class="dell-price flxC color-gray">
                                                        <div class="currenty-sggtion font075">đ</div>
                                                        <div class="price-sggtion">${new Intl.NumberFormat('vi-VN').format(prod.price)}</div>
                                                    </del>
                                                    <div class="crr-price flxC mgl-8">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                                <div class="prc-right">
                                                    <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                                                        <g fill="none" fill-rule="evenodd" transform="">
                                                            <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                            <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                            <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                            <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                            <circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn"></div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case: prod.percent_saleoff>0 && prod.freeship == true && prod.rating >0 && prod.quantity_sold>0
            if(prod.percent_saleoff>0 && prod.freeship == false && prod.rating == 0 && prod.quantity_sold == 0 && prod.footer_img_url != ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="header-link-sale-off-container">
                                            <div class="header-block-sale-off">
                                                <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                                <span class="sale-text">Giảm</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${prod.footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <del class="dell-price flxC color-gray">
                                                        <div class="currenty-sggtion font075">đ</div>
                                                        <div class="price-sggtion">${new Intl.NumberFormat('vi-VN').format(prod.price)}</div>
                                                    </del>
                                                    <div class="crr-price flxC mgl-8">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx"></div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
        // Case: percent-sale-off >0 && footer_img_url == ""
            //Case: prod.percent_saleoff>0 && prod.freeship == true && prod.rating >0 && prod.quantity_sold>0
            if(prod.percent_saleoff>0 && prod.freeship == true && prod.rating >0 && prod.quantity_sold>0 && prod.footer_img_url == ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="header-link-sale-off-container">
                                            <div class="header-block-sale-off">
                                                <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                                <span class="sale-text">Giảm</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <del class="dell-price flxC color-gray">
                                                        <div class="currenty-sggtion font075">đ</div>
                                                        <div class="price-sggtion">${new Intl.NumberFormat('vi-VN').format(prod.price)}</div>
                                                    </del>
                                                    <div class="crr-price flxC mgl-8">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                                <div class="prc-right">
                                                    <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                                                        <g fill="none" fill-rule="evenodd" transform="">
                                                            <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                            <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                            <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                            <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                            <circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn">
                                                    <div class="rating-star-ctn flex">
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mgl-8 flex">Đã bán
                                                    <span class="number-sld mgl-8">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case: prod.percent_saleoff>0 && prod.freeship == false && prod.rating >0 && prod.quantity_sold>0
            if(prod.percent_saleoff>0 && prod.freeship == false && prod.rating >0 && prod.quantity_sold>0 && prod.footer_img_url == ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="header-link-sale-off-container">
                                            <div class="header-block-sale-off">
                                                <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                                <span class="sale-text">Giảm</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <del class="dell-price flxC color-gray">
                                                        <div class="currenty-sggtion font075">đ</div>
                                                        <div class="price-sggtion">${new Intl.NumberFormat('vi-VN').format(prod.price)}</div>
                                                    </del>
                                                    <div class="crr-price flxC mgl-8">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn">
                                                    <div class="rating-star-ctn flex">
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mgl-8 flex">Đã bán
                                                    <span class="number-sld mgl-8">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case: prod.percent_saleoff>0 && prod.freeship == true && prod.rating ==0 && prod.quantity_sold>0
            if(prod.percent_saleoff>0 && prod.freeship == true && prod.rating ==0 && prod.quantity_sold>0 && prod.footer_img_url == ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="header-link-sale-off-container">
                                            <div class="header-block-sale-off">
                                                <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                                <span class="sale-text">Giảm</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <del class="dell-price flxC color-gray">
                                                        <div class="currenty-sggtion font075">đ</div>
                                                        <div class="price-sggtion">${new Intl.NumberFormat('vi-VN').format(prod.price)}</div>
                                                    </del>
                                                    <div class="crr-price flxC mgl-8">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                                <div class="prc-right">
                                                    <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                                                        <g fill="none" fill-rule="evenodd" transform="">
                                                            <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                            <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                            <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                            <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                            <circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn"></div>
                                                <div class="flex">Đã bán
                                                    <span class="number-sld mgl-8">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case: prod.percent_saleoff>0 && prod.freeship == true && prod.rating >0 && prod.quantity_sold==0
            if(prod.percent_saleoff>0 && prod.freeship == true && prod.rating >0 && prod.quantity_sold==0 && prod.footer_img_url == ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="header-link-sale-off-container">
                                            <div class="header-block-sale-off">
                                                <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                                <span class="sale-text">Giảm</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <del class="dell-price flxC color-gray">
                                                        <div class="currenty-sggtion font075">đ</div>
                                                        <div class="price-sggtion">${new Intl.NumberFormat('vi-VN').format(prod.price)}</div>
                                                    </del>
                                                    <div class="crr-price flxC mgl-8">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                                <div class="prc-right">
                                                    <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                                                        <g fill="none" fill-rule="evenodd" transform="">
                                                            <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                            <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                            <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                            <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                            <circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn">
                                                    <div class="rating-star-ctn flex">
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case: prod.percent_saleoff>0 && prod.freeship == false && prod.rating ==0 && prod.quantity_sold>0
            if(prod.percent_saleoff>0 && prod.freeship == false && prod.rating ==0 && prod.quantity_sold>0 && prod.footer_img_url == ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="header-link-sale-off-container">
                                            <div class="header-block-sale-off">
                                                <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                                <span class="sale-text">Giảm</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <del class="dell-price flxC color-gray">
                                                        <div class="currenty-sggtion font075">đ</div>
                                                        <div class="price-sggtion">${new Intl.NumberFormat('vi-VN').format(prod.price)}</div>
                                                    </del>
                                                    <div class="crr-price flxC mgl-8">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn"></div>
                                                <div class="flex">Đã bán
                                                    <span class="number-sld mgl-8">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case: prod.percent_saleoff>0 && prod.freeship == false && prod.rating >0 && prod.quantity_sold==0
            if(prod.percent_saleoff>0 && prod.freeship ==false && prod.rating >0 && prod.quantity_sold==0 && prod.footer_img_url == ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="header-link-sale-off-container">
                                            <div class="header-block-sale-off">
                                                <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                                <span class="sale-text">Giảm</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <del class="dell-price flxC color-gray">
                                                        <div class="currenty-sggtion font075">đ</div>
                                                        <div class="price-sggtion">${new Intl.NumberFormat('vi-VN').format(prod.price)}</div>
                                                    </del>
                                                    <div class="crr-price flxC mgl-8">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn">
                                                    <div class="rating-star-ctn flex">
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case: prod.percent_saleoff>0 && prod.freeship == true && prod.rating ==0 && prod.quantity_sold==0
            if(prod.percent_saleoff>0 && prod.freeship == true && prod.rating ==0 && prod.quantity_sold==0 && prod.footer_img_url == ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="header-link-sale-off-container">
                                            <div class="header-block-sale-off">
                                                <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                                <span class="sale-text">Giảm</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <del class="dell-price flxC color-gray">
                                                        <div class="currenty-sggtion font075">đ</div>
                                                        <div class="price-sggtion">${new Intl.NumberFormat('vi-VN').format(prod.price)}</div>
                                                    </del>
                                                    <div class="crr-price flxC mgl-8">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                                <div class="prc-right">
                                                    <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                                                        <g fill="none" fill-rule="evenodd" transform="">
                                                            <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                            <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                            <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                            <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                            <circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn"></div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case: prod.percent_saleoff>0 && prod.freeship == true && prod.rating == 0 && prod.quantity_sold == 0
            if(prod.percent_saleoff>0 && prod.freeship == false && prod.rating == 0 && prod.quantity_sold == 0 && prod.footer_img_url == ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="header-link-sale-off-container">
                                            <div class="header-block-sale-off">
                                                <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                                <span class="sale-text">Giảm</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <del class="dell-price flxC color-gray">
                                                        <div class="currenty-sggtion font075">đ</div>
                                                        <div class="price-sggtion">${new Intl.NumberFormat('vi-VN').format(prod.price)}</div>
                                                    </del>
                                                    <div class="crr-price flxC mgl-8">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx"></div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
        // Case: percent-saleoff ==0 $$ footer_img_url != ""
            //Case:prod.percent_saleoff==0 && prod.freeship == false && prod.rating ==0 && prod.quantity_sold==0
            if(prod.percent_saleoff==0 && prod.freeship == false && prod.rating ==0 && prod.quantity_sold==0){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${prod.footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn"></div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case:prod.percent_saleoff==0 && prod.freeship == true && prod.rating >0 && prod.quantity_sold>0
            if(prod.percent_saleoff==0 && prod.freeship == true && prod.rating >0 && prod.quantity_sold>0){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${prod.footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                                <div class="prc-right">
                                                    <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                                                        <g fill="none" fill-rule="evenodd" transform="">
                                                            <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                            <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                            <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                            <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                            <circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn">
                                                    <div class="rating-star-ctn flex">
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mgl-8 flex">Đã bán
                                                    <span class="number-sld mgl-8">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case:prod.percent_saleoff==0 && prod.freeship == true && prod.rating == 0 && prod.quantity_sold>0
            if(prod.percent_saleoff==0 && prod.freeship == true && prod.rating == 0 && prod.quantity_sold>0){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${prod.footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                                <div class="prc-right">
                                                    <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                                                        <g fill="none" fill-rule="evenodd" transform="">
                                                            <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                            <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                            <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                            <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                            <circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn"></div>
                                                <div class="flex">Đã bán
                                                    <span class="number-sld mgl-8">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case:prod.percent_saleoff==0 && prod.freeship == true && prod.rating > 0 && prod.quantity_sold==0
            if(prod.percent_saleoff==0 && prod.freeship == true && prod.rating > 0 && prod.quantity_sold==0){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${prod.footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                                <div class="prc-right">
                                                    <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                                                        <g fill="none" fill-rule="evenodd" transform="">
                                                            <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                            <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                            <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                            <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                            <circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn">
                                                    <div class="rating-star-ctn flex">
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case:prod.percent_saleoff==0 && prod.freeship == true && prod.rating == 0 && prod.quantity_sold==0
            if(prod.percent_saleoff==0 && prod.freeship == true && prod.rating == 0 && prod.quantity_sold==0){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${prod.footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                                <div class="prc-right">
                                                    <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                                                        <g fill="none" fill-rule="evenodd" transform="">
                                                            <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                            <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                            <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                            <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                            <circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn"></div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ` 
            }
            //Case:prod.percent_saleoff==0 && prod.freeship == false && prod.rating > 0 && prod.quantity_sold>0
            if(prod.percent_saleoff==0 && prod.freeship == false && prod.rating > 0 && prod.quantity_sold>0){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${prod.footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn">
                                                    <div class="rating-star-ctn flex">
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mgl-8 flex">Đã bán
                                                    <span class="number-sld mgl-8">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case:prod.percent_saleoff==0 && prod.freeship == false && prod.rating == 0 && prod.quantity_sold>0
            if(prod.percent_saleoff==0 && prod.freeship == false && prod.rating == 0 && prod.quantity_sold>0){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${prod.footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn"></div>
                                                <div class="flex">Đã bán
                                                    <span class="number-sld mgl-8">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case:prod.percent_saleoff==0 && prod.freeship == false && prod.rating > 0 && prod.quantity_sold==0
            if(prod.percent_saleoff==0 && prod.freeship == false && prod.rating > 0 && prod.quantity_sold==0){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${prod.footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                                <div class="prc-right">
                                                    <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                                                        <g fill="none" fill-rule="evenodd" transform="">
                                                            <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                            <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                            <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                            <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                            <circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn">
                                                    <div class="rating-star-ctn flex">
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
        // Case: percent-saleoff ==0 $$ footer_img_url == ""
            //Case:prod.percent_saleoff==0 && prod.freeship == false && prod.rating ==0 && prod.quantity_sold==0
            if(prod.percent_saleoff==0 && prod.freeship == false && prod.rating ==0 && prod.quantity_sold==0 && prod.footer_img_url == ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn"></div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case:prod.percent_saleoff==0 && prod.freeship == true && prod.rating >0 && prod.quantity_sold>0
            if(prod.percent_saleoff==0 && prod.freeship == true && prod.rating >0 && prod.quantity_sold>0 && prod.footer_img_url == ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                                <div class="prc-right">
                                                    <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                                                        <g fill="none" fill-rule="evenodd" transform="">
                                                            <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                            <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                            <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                            <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                            <circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn">
                                                    <div class="rating-star-ctn flex">
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mgl-8 flex">Đã bán
                                                    <span class="number-sld mgl-8">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case:prod.percent_saleoff==0 && prod.freeship == true && prod.rating == 0 && prod.quantity_sold>0
            if(prod.percent_saleoff==0 && prod.freeship == true && prod.rating == 0 && prod.quantity_sold>0 && prod.footer_img_url == ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                                <div class="prc-right">
                                                    <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                                                        <g fill="none" fill-rule="evenodd" transform="">
                                                            <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                            <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                            <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                            <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                            <circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn"></div>
                                                <div class="flex">Đã bán
                                                    <span class="number-sld mgl-8">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case:prod.percent_saleoff==0 && prod.freeship == true && prod.rating > 0 && prod.quantity_sold==0
            if(prod.percent_saleoff==0 && prod.freeship == true && prod.rating > 0 && prod.quantity_sold==0 && prod.footer_img_url == ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                                <div class="prc-right">
                                                    <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                                                        <g fill="none" fill-rule="evenodd" transform="">
                                                            <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                            <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                            <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                            <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                            <circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn">
                                                    <div class="rating-star-ctn flex">
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case:prod.percent_saleoff==0 && prod.freeship == true && prod.rating == 0 && prod.quantity_sold==0
            if(prod.percent_saleoff==0 && prod.freeship == true && prod.rating == 0 && prod.quantity_sold==0 && prod.footer_img_url == ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                                <div class="prc-right">
                                                    <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                                                        <g fill="none" fill-rule="evenodd" transform="">
                                                            <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                            <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                            <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                            <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                            <circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn"></div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ` 
            }
            //Case:prod.percent_saleoff==0 && prod.freeship == false && prod.rating > 0 && prod.quantity_sold>0
            if(prod.percent_saleoff==0 && prod.freeship == false && prod.rating > 0 && prod.quantity_sold>0 && prod.footer_img_url == ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn">
                                                    <div class="rating-star-ctn flex">
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mgl-8 flex">Đã bán
                                                    <span class="number-sld mgl-8">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case:prod.percent_saleoff==0 && prod.freeship == false && prod.rating == 0 && prod.quantity_sold>0
            if(prod.percent_saleoff==0 && prod.freeship == false && prod.rating == 0 && prod.quantity_sold>0 && prod.footer_img_url == ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn"></div>
                                                <div class="flex">Đã bán
                                                    <span class="number-sld mgl-8">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            //Case:prod.percent_saleoff==0 && prod.freeship == false && prod.rating > 0 && prod.quantity_sold==0
            if(prod.percent_saleoff==0 && prod.freeship == false && prod.rating > 0 && prod.quantity_sold==0 && prod.footer_img_url == ""){
                htmls= 
                    `
                        <div id="sort_result_search" class="b4etd" data-catagories-inshop = "${prod.catagories_inshop.toLowerCase()}">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop">
                                            <div class="header-block-favorite-shop">
                                                <span class="fvr-text">Yêu thích</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${prod.body_img_url}" class="img-body" alt="">
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${prod.title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="sticker-brand-ctn mgTB-4 flex">
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                                </div>
                                                <div class="stkBr">
                                                    <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                                </div>
                                            </div>
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                                <div class="prc-right">
                                                    <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                                                        <g fill="none" fill-rule="evenodd" transform="">
                                                            <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                            <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                            <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                            <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                            <circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flx">
                                                <div class="rating-shop-ctn">
                                                    <div class="rating-star-ctn flex">
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                        <div class="item-rating-star">
                                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${prod.shop_adress}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
            }
            return htmls;
}

export function render_products_has_hoversameblock(prod){
    var x = calculator_promotion_price(prod)
    //Case: prod.percent_saleoff>0
        //Case: prod.percent_saleoff>0 && prod.quantity_sold>0 && footer_img_url != ""
        if(prod.percent_saleoff > 0 && prod.quantity_sold > 0 && prod.footer_img_url != ""){
            htmls =
            `
                <div class="b4etd none-change-opacity">
                    <a class="grid-item-link-product none-change-opacity box_shadow">
                        <div class="bellow-grid-item-link">
                            <div class="body-container">
                                <div class="favorite-shop">
                                    <div class="header-block-favorite-shop">
                                        <span class="fvr-text">Yêu thích</span>
                                    </div>
                                </div>
                                <div class="header-link-sale-off-container">
                                    <div class="header-block-sale-off">
                                        <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                        <span class="sale-text">Giảm</span>
                                    </div>
                                </div>
                                <div class="product-img-body">
                                    <img src="${prod.body_img_url}" class="img-body" alt="">
                                </div>
                                <div class="product-img-footer">
                                    <img src="${prod.footer_img_url}" class="img-footer">    
                                </div>
                            </div>
                            <div class="footer-sggtion">  
                                <div class="description-sggtion">
                                    <div class="descrp-txt-overflow">
                                        <div class="dcrs0">
                                            <div class="dcrs00">
                                            ${prod.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>          
                                <div class="ft-sggtion-block ">
                                    <div class="sticker-brand-ctn mgTB-4 flxC">
                                        <div class="stkBr flex">
                                            <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                        </div>
                                        <div class="stkBr flex">
                                            <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                        </div>
                                    </div>
                                    <div class="price-block mgT32 flex-jtfspbt">
                                            <div class="crr-price flxC">
                                                <div class="currenty-sggtion">đ</div>
                                                <div class="price-sggtion">${x}</div>
                                            </div>  
                                            <div class="nbs-sggtion flex">
                                                <div class="mgl-8">Đã bán
                                                    <span class="number-sld">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div class="hover-looking-same-product">
                        <div class="hv-above">
                            <a href="../page/product_detail.html" ></a>
                        </div>
                        <a class="none-change-opacity none-padding txt-white-color">
                            <div class="flex font16">
                                Tìm sản phẩm tương tự
                            </div>
                        </a>
                    </div>
                </div>
            `
        }
        //Case: prod.percent_saleoff>0 && prod.quantity_sold==0 && footer_img_url != ""
        if(prod.percent_saleoff > 0 && prod.quantity_sold == 0 && prod.footer_img_url != ""){
            htmls =
            `
                <div class="b4etd none-change-opacity">
                    <a class="grid-item-link-product none-change-opacity box_shadow">
                        <div class="bellow-grid-item-link">
                            <div class="body-container">
                                <div class="favorite-shop">
                                    <div class="header-block-favorite-shop">
                                        <span class="fvr-text">Yêu thích</span>
                                    </div>
                                </div>
                                <div class="header-link-sale-off-container">
                                    <div class="header-block-sale-off">
                                        <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                        <span class="sale-text">Giảm</span>
                                    </div>
                                </div>
                                <div class="product-img-body">
                                    <img src="${prod.body_img_url}" class="img-body" alt="">
                                </div>
                                <div class="product-img-footer">
                                    <img src="${prod.footer_img_url}" class="img-footer">    
                                </div>
                            </div>
                            <div class="footer-sggtion">  
                                <div class="description-sggtion">
                                    <div class="descrp-txt-overflow">
                                        <div class="dcrs0">
                                            <div class="dcrs00">
                                            ${prod.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>          
                                <div class="ft-sggtion-block ">
                                    <div class="sticker-brand-ctn mgTB-4 flxC">
                                        <div class="stkBr flex">
                                            <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                        </div>
                                        <div class="stkBr flex">
                                            <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                        </div>
                                    </div>
                                    <div class="price-block mgT32 flex-jtfspbt">
                                        <div class="crr-price flxC">
                                            <div class="currenty-sggtion">đ</div>
                                            <div class="price-sggtion">${x}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div class="hover-looking-same-product">
                        <div class="hv-above">
                            <a href="../page/product_detail.html" ></a>
                        </div>
                        <a class="none-change-opacity none-padding txt-white-color">
                            <div class="flex font16">
                                Tìm sản phẩm tương tự
                            </div>
                        </a>
                    </div>
                </div>
            `
        }
        //Case: prod.percent_saleoff>0 && prod.quantity_sold>0 && footer_img_url == ""
        if(prod.percent_saleoff > 0 && prod.quantity_sold > 0 && prod.footer_img_url == ""){
            htmls =
            `
                <div class="b4etd none-change-opacity">
                    <a class="grid-item-link-product none-change-opacity box_shadow">
                        <div class="bellow-grid-item-link">
                            <div class="body-container">
                                <div class="favorite-shop">
                                    <div class="header-block-favorite-shop">
                                        <span class="fvr-text">Yêu thích</span>
                                    </div>
                                </div>
                                <div class="header-link-sale-off-container">
                                    <div class="header-block-sale-off">
                                        <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                        <span class="sale-text">Giảm</span>
                                    </div>
                                </div>
                                <div class="product-img-body">
                                    <img src="${prod.body_img_url}" class="img-body" alt="">
                                </div>
                            </div>
                            <div class="footer-sggtion">  
                                <div class="description-sggtion">
                                    <div class="descrp-txt-overflow">
                                        <div class="dcrs0">
                                            <div class="dcrs00">
                                            ${prod.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>          
                                <div class="ft-sggtion-block ">
                                    <div class="sticker-brand-ctn mgTB-4 flxC">
                                        <div class="stkBr flex">
                                            <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                        </div>
                                        <div class="stkBr flex">
                                            <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                        </div>
                                    </div>
                                    <div class="price-block mgT32 flex-jtfspbt">
                                            <div class="crr-price flxC">
                                                <div class="currenty-sggtion">đ</div>
                                                <div class="price-sggtion">${x}</div>
                                            </div>  
                                            <div class="nbs-sggtion flex">
                                                <div class="mgl-8 font-14">Đã bán
                                                    <span class="number-sld">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div class="hover-looking-same-product">
                        <div class="hv-above">
                            <a href="../page/product_detail.html" ></a>
                        </div>
                        <a class="none-change-opacity none-padding txt-white-color">
                            <div class="flex font16">
                                Tìm sản phẩm tương tự
                            </div>
                        </a>
                    </div>
                </div>
            `
        }
        //Case: prod.percent_saleoff>0 && prod.quantity_sold==0 && footer_img_url == ""
        if(prod.percent_saleoff > 0 && prod.quantity_sold == 0 && prod.footer_img_url == ""){
            htmls =
            `
                <div class="b4etd none-change-opacity">
                    <a class="grid-item-link-product none-change-opacity box_shadow">
                        <div class="bellow-grid-item-link">
                            <div class="body-container">
                                <div class="favorite-shop">
                                    <div class="header-block-favorite-shop">
                                        <span class="fvr-text">Yêu thích</span>
                                    </div>
                                </div>
                                <div class="header-link-sale-off-container">
                                    <div class="header-block-sale-off">
                                        <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                                        <span class="sale-text">Giảm</span>
                                    </div>
                                </div>
                                <div class="product-img-body">
                                    <img src="${prod.body_img_url}" class="img-body" alt="">
                                </div>
                            </div>
                            <div class="footer-sggtion">  
                                <div class="description-sggtion">
                                    <div class="descrp-txt-overflow">
                                        <div class="dcrs0">
                                            <div class="dcrs00">
                                            ${prod.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>          
                                <div class="ft-sggtion-block ">
                                    <div class="sticker-brand-ctn mgTB-4 flxC">
                                        <div class="stkBr flex">
                                            <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                        </div>
                                        <div class="stkBr flex">
                                            <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                        </div>
                                    </div>
                                    <div class="price-block mgT32 flex-jtfspbt">
                                        <div class="crr-price flxC">
                                            <div class="currenty-sggtion">đ</div>
                                            <div class="price-sggtion">${x}</div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div class="hover-looking-same-product">
                        <div class="hv-above">
                            <a href="../page/product_detail.html" ></a>
                        </div>
                        <a class="none-change-opacity none-padding txt-white-color">
                            <div class="flex font16">
                                Tìm sản phẩm tương tự
                            </div>
                        </a>
                    </div>
                </div>
            `
        }
    //Case: prod.percent_saleoff == 0
        //Case: prod.percent_saleoff == 0 && prod.quantity_sold>0 && footer_img_url != ""
        if(prod.percent_saleoff == 0 && prod.quantity_sold > 0 && prod.footer_img_url != ""){
            htmls =
            `
                <div class="b4etd none-change-opacity">
                    <a class="grid-item-link-product none-change-opacity box_shadow">
                        <div class="bellow-grid-item-link">
                            <div class="body-container">
                                <div class="favorite-shop">
                                    <div class="header-block-favorite-shop">
                                        <span class="fvr-text">Yêu thích</span>
                                    </div>
                                </div>
                                <div class="product-img-body">
                                    <img src="${prod.body_img_url}" class="img-body" alt="">
                                </div>
                                <div class="product-img-footer">
                                    <img src="${prod.footer_img_url}" class="img-footer">    
                                </div>
                            </div>
                            <div class="footer-sggtion">  
                                <div class="description-sggtion">
                                    <div class="descrp-txt-overflow">
                                        <div class="dcrs0">
                                            <div class="dcrs00">
                                            ${prod.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>          
                                <div class="ft-sggtion-block ">
                                    <div class="sticker-brand-ctn mgTB-4 flxC">
                                        <div class="stkBr flex">
                                            <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                        </div>
                                        <div class="stkBr flex">
                                            <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                        </div>
                                    </div>
                                    <div class="price-block mgT32 flex-jtfspbt">
                                            <div class="crr-price flxC">
                                                <div class="currenty-sggtion">đ</div>
                                                <div class="price-sggtion">${x}</div>
                                            </div>  
                                            <div class="nbs-sggtion flex">
                                                <div class="mgl-8 font-14">Đã bán
                                                    <span class="number-sld">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div class="hover-looking-same-product">
                        <div class="hv-above">
                            <a href="../page/product_detail.html" ></a>
                        </div>
                        <a class="none-change-opacity none-padding txt-white-color">
                            <div class="flex font16">
                                Tìm sản phẩm tương tự
                            </div>
                        </a>
                    </div>
                </div>
            `
        }
        //Case: prod.percent_saleoff == 0 && prod.quantity_sold==0 && footer_img_url != ""
        if(prod.percent_saleoff == 0 && prod.quantity_sold == 0 && prod.footer_img_url != ""){
            htmls =
            `
                <div class="b4etd none-change-opacity">
                    <a class="grid-item-link-product none-change-opacity box_shadow">
                        <div class="bellow-grid-item-link">
                            <div class="body-container">
                                <div class="favorite-shop">
                                    <div class="header-block-favorite-shop">
                                        <span class="fvr-text">Yêu thích</span>
                                    </div>
                                </div>
                                <div class="product-img-body">
                                    <img src="${prod.body_img_url}" class="img-body" alt="">
                                </div>
                                <div class="product-img-footer">
                                    <img src="${prod.footer_img_url}" class="img-footer">    
                                </div>
                            </div>
                            <div class="footer-sggtion">  
                                <div class="description-sggtion">
                                    <div class="descrp-txt-overflow">
                                        <div class="dcrs0">
                                            <div class="dcrs00">
                                            ${prod.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>          
                                <div class="ft-sggtion-block ">
                                    <div class="sticker-brand-ctn mgTB-4 flxC">
                                        <div class="stkBr flex">
                                            <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                        </div>
                                        <div class="stkBr flex">
                                            <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                        </div>
                                    </div>
                                    <div class="price-block mgT32 flex-jtfspbt">
                                        <div class="crr-price flxC">
                                            <div class="currenty-sggtion">đ</div>
                                            <div class="price-sggtion">${x}</div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div class="hover-looking-same-product">
                        <div class="hv-above">
                            <a href="../page/product_detail.html" ></a>
                        </div>
                        <a class="none-change-opacity none-padding txt-white-color">
                            <div class="flex font16">
                                Tìm sản phẩm tương tự
                            </div>
                        </a>
                    </div>
                </div>
            `
        }
        //Case: prod.percent_saleoff == 0 && prod.quantity_sold>0 && footer_img_url == ""
        if(prod.percent_saleoff == 0 && prod.quantity_sold > 0 && prod.footer_img_url == ""){
            htmls =
            `
                <div class="b4etd none-change-opacity">
                    <a class="grid-item-link-product none-change-opacity box_shadow">
                        <div class="bellow-grid-item-link">
                            <div class="body-container">
                                <div class="favorite-shop">
                                    <div class="header-block-favorite-shop">
                                        <span class="fvr-text">Yêu thích</span>
                                    </div>
                                </div>
                                <div class="product-img-body">
                                    <img src="${prod.body_img_url}" class="img-body" alt="">
                                </div>
                            </div>
                            <div class="footer-sggtion">  
                                <div class="description-sggtion">
                                    <div class="descrp-txt-overflow">
                                        <div class="dcrs0">
                                            <div class="dcrs00">
                                            ${prod.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>          
                                <div class="ft-sggtion-block ">
                                    <div class="sticker-brand-ctn mgTB-4 flxC">
                                        <div class="stkBr flex">
                                            <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                        </div>
                                        <div class="stkBr flex">
                                            <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                        </div>
                                    </div>
                                    <div class="price-block mgT32 flex-jtfspbt">
                                            <div class="crr-price flxC">
                                                <div class="currenty-sggtion">đ</div>
                                                <div class="price-sggtion">${x}</div>
                                            </div>  
                                            <div class="nbs-sggtion flex">
                                                <div class="mgl-8 font-14">Đã bán
                                                    <span class="number-sld">${prod.quantity_sold}</span>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div class="hover-looking-same-product">
                        <div class="hv-above">
                            <a href="../page/product_detail.html" ></a>
                        </div>
                        <a class="none-change-opacity none-padding txt-white-color">
                            <div class="flex font16">
                                Tìm sản phẩm tương tự
                            </div>
                        </a>
                    </div>
                </div>
            `
        }
        //Case: prod.percent_saleoff == 0 && prod.quantity_sold==0 && footer_img_url == ""
        if(prod.percent_saleoff == 0 && prod.quantity_sold == 0 && prod.footer_img_url == ""){
            htmls =
            `
                <div class="b4etd none-change-opacity">
                    <a class="grid-item-link-product none-change-opacity box_shadow">
                        <div class="bellow-grid-item-link">
                            <div class="body-container">
                                <div class="favorite-shop">
                                    <div class="header-block-favorite-shop">
                                        <span class="fvr-text">Yêu thích</span>
                                    </div>
                                </div>
                                <div class="product-img-body">
                                    <img src="${prod.body_img_url}" class="img-body" alt="">
                                </div>
                            </div>
                            <div class="footer-sggtion">  
                                <div class="description-sggtion">
                                    <div class="descrp-txt-overflow">
                                        <div class="dcrs0">
                                            <div class="dcrs00">
                                            ${prod.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>          
                                <div class="ft-sggtion-block ">
                                    <div class="sticker-brand-ctn mgTB-4 flxC">
                                        <div class="stkBr flex">
                                            <div class="txtBr color-primary-text font075">#ShopXuHuong</div>
                                        </div>
                                        <div class="stkBr flex">
                                            <div class="txtBr color-primary-text font075">#ShopDacBiet</div>
                                        </div>
                                    </div>
                                    <div class="price-block mgT32 flex-jtfspbt">
                                        <div class="crr-price flxC">
                                            <div class="currenty-sggtion">đ</div>
                                            <div class="price-sggtion">${x}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div class="hover-looking-same-product">
                        <div class="hv-above">
                            <a href="../page/product_detail.html" ></a>
                        </div>
                        <a class="none-change-opacity none-padding txt-white-color">
                            <div class="flex font16">
                                Tìm sản phẩm tương tự
                            </div>
                        </a>
                    </div>
                </div>
            `
        }
    return htmls;
}
export function render_header_catagMobile(){
    htmls = `
        <div class="lft-ctn-shop-menu">
            <div class=" menu-left flxC">
                <a id="shop" href="#" class="ctPRD flex none-change-opacity txt-Black-color item-CtPRD-active">
                    <div class="txt-Capitalize flex">Shop </div>
                </a>
                <a href="../page/shopPage.html" class="ctPRD flex txt-Black-color">
                    <div class="txt-UperCase flex">sản phẩm</div>
                </a>
                <a id = "detail-catagories" href="../page/catagories_responsive_mobile.html" class="ctPRD flex txt-Black-color">
                    <div class="txt-UperCase flex">Danh mục</div>
                </a>
            </div>
        </div>
    `
    $("#catagories-mobile").innerHTML += htmls;
}
export let counting_frequencies_item_catagories_inshop = (arr)=>{
    //let countDuplicatesItem = arr.reduce((accVal, crrVal) => (accVal[crrVal] = accVal[crrVal] + 1 || 1, accVal), {})
    const countDuplicatesItem = {};
    arr.forEach(element => {
        countDuplicatesItem[element] = (countDuplicatesItem[element] || 0) + 1;
    });
    return countDuplicatesItem;
}
let shops_ID = (shops)=>{
    let new_arrr = new Array;
    shops.map(shop=>{
       if(shop.shop_id == 1){
           new_arrr.push(shop);
       }
    })
    return new_arrr;
}
export function catagories_res_mobile(shops){
    let catagNames = [];
    shops_ID(shops).forEach(shop=>{
        catagNames.push(shop.catagories_inshop);
    })
    let entries = Object.entries(counting_frequencies_item_catagories_inshop(catagNames))
    for(let i in entries){
        htmls = `
            <li class="flex-jtfspbt none-change-opacity">
                <a href="" class="detail-cata-link flex-jtfspbt">
                    <div class="flxC mgl-8">
                        <div class="flxC">
                            <img src="" alt="" style="width: 30px; height:30px">
                        </div>
                        <div class="mgLR-4">
                            <div class="catag-name flxC">
                                <div>
                                    ${entries[i][0]}
                                </div>
                            </div>
                            <div class="flxC below-catagName">
                                <div class="quantity_products mgR-8">${entries[i][1]}</div>
                                <div class="">Sản phẩm</div>
                            </div>
                        </div>
                    </div>
                    <div class="flxC mgR-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </a>
            </li>
        `
        $("#all-catagories_resp_mobile").innerHTML  += htmls;
    }
    htmls = `
        <li class="flex-jtfspbt none-change-opacity">
            <a href="" class="detail-cata-link flex-jtfspbt">
                <div class="flxC mgl-8">
                    <div class="mgLR-4">
                        <div class="catag-name flxC">
                            <div>
                               Sản phẩm
                            </div>
                        </div>
                        <div class="flxC below-catagName">
                            <div class="quantity_products mgR-8">${catagNames.length}</div>
                            <div class="">Sản phẩm</div>
                        </div>
                    </div>
                </div>
                <div class="flxC mgR-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </a>
        </li>
    `
    $("#all-catagories_resp_mobile").innerHTML  += htmls;
}