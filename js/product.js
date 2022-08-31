import products from '../data/product.json' assert {type: 'json'}
$ = document.querySelector.bind(document)
const tdsgtion = $('#tdsgtion-relative-product')
var productAPI="http://localhost:3000/products"
fetch(productAPI)
    .then
renderProduct_RelativeShopPage= (products)=>{
    products.forEach(prod => {
        let htmls= 
            `
                <div class="b4etd">
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
                                        <span class="percent-sale-off">33%</span>
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
                                    <div class="price-block mgTB-8 flex-jtfspbt">
                                        <div class="prc flx">
                                            <del class="dell-price flxC color-gray">
                                                <div class="currenty-sggtion font075">đ</div>
                                                <div class="price-sggtion font10">${prod.price_promotion}</div>
                                            </del>
                                            <div class="crr-price flxC mgl-8">
                                                <div class="currenty-sggtion font-14">đ</div>
                                                <div class="price-sggtion">${prod.price}</div>
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
                                        <div class="mgl-8">Đã bán
                                            <span class="number-sld">${prod.quanlity_sold}</span>
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
        tdsgtion.insertAdjacentHTML("beforeend", htmls)
    })
    // tdsgtion.insertAdjacentHTML("beforeend", htmls)
}
renderProduct_RelativeShopPage(products)
//export {renderProduct_RelativeShopPage}