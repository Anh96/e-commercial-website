//import data from '../product.json' assert {type: 'json'};
$ = document.querySelector.bind(document)
const top_search_link_ctn = $('.top_search_link_ctn')
const spM_product_list = $('.spM-product-list')
// const grid_layout_product =$('.grid_layout_product')
const productsAPI = "../data/product.json"
const section_grid_layout_container = $('.section-grid-layout-container')
const trennding_linkCTN = $('.grid-ctn-body-trendding')
const tdsgtion = $('#tdsgtion-relative-product');
let htmls;
function handleProducts(){
    fetch(productsAPI)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            render_slide_leftSlide_homeBanner(data.slider)
            render_slide_rightSlide_homeBanner(data.right_banner)
            render_Catagory_homePage(data.catagories)
            renderProduct_ShopeeMall(data.shopee_mall)
            renderProduct_TrenddingSearch(data.trendding_search)
            renderProduct_topSearch(data.products)
            renderProduct_Relative_HomePage(data.products);
        })
} 
handleProducts()
var imgSliders;
var currentIndex =0;
const nextCircleAnimationHomeBanner = $$('.list-next-circle-animation')
const prev_btn = $('.left-btn')
const next_btn = $('.right-btn')
function render_slide_leftSlide_homeBanner(sliders){
    sliders.forEach(slide=>{
        const htmls = 
            `
                <li class="sld-img-item none-change-opacity"> 
                    <img src="${slide.silde_img_link}" alt="">
                </li>
            `
            $('.letf-slider-img-list').insertAdjacentHTML('beforeend',htmls)
    })
    imgSliders = $('.letf-slider-img-list').querySelectorAll('.sld-img-item');
    autoshow();
    function autoshow(){
        let i;
        for(i=0;i<imgSliders.length;++i){
            imgSliders[i].style.display ='none'
        }
        currentIndex++;
        if(currentIndex>imgSliders.length){
            currentIndex = 1;
        }
        for(i =0; i<nextCircleAnimationHomeBanner.length;++i){
            nextCircleAnimationHomeBanner[i].classList.remove('active')
        }
        imgSliders[currentIndex-1].style.display ='block'
        nextCircleAnimationHomeBanner[currentIndex-1].classList.add('active')
        setTimeout(autoshow,4000);
    }
    /////////////////////////////////////////////////////////////////////////
    //handle press button
    show(currentIndex);
    function plusSlide(n){
        show(currentIndex+=n);
    }
    function currentSlide(n){
        show(currentIndex=n);
    }
    function show(n){
        let i;
        if(n>imgSliders.length){
            currentIndex = 1;
        }
        if(n<1){
            currentIndex=imgSliders.length;
        }
        for(i =0;i<imgSliders.length ;++i){
            imgSliders[i].style.display ='none';
        }
        for( i =0; i<nextCircleAnimationHomeBanner.length;++i){
            nextCircleAnimationHomeBanner[i].classList.remove('active')
        }
        imgSliders[currentIndex-1].style.display = 'block'
        nextCircleAnimationHomeBanner[currentIndex-1].classList.add('active')
    }
    /////////////////////////////////////////////////////////////////////////
    // handle arrow button
    prev_btn.onclick = function(){
        plusSlide(-1);
        imgSliders[currentIndex-1].style.animation = 'slideGoFromRight .2s forwards'
    }
    next_btn.onclick = function(){
        plusSlide(1);
        imgSliders[currentIndex-1].style.animation = 'slideGoFromLeft .2s forwards '
    }
    // handle circle animation
    nextCircleAnimationHomeBanner.forEach((dot,index)=> {
        dot.onclick = function(){
            currentSlide(index+1)
        }
    });

}
function render_slide_rightSlide_homeBanner(imgs){
    imgs.forEach(img=>{
        htmls = 
        `
            <a class="right-slider-img box_shadow none-padding">
                <div class="right-slider-img-bgr">
                    <div class="right-img" style="background-image:url('${img.right_img}')"></div>
                </div>
            </a>
        `
        $('.right-slider').insertAdjacentHTML("beforeend", htmls)
    })
}
function render_Catagory_homePage(products){
    for(let i =0; i<products.length;++i){
        htmls =
            `
                <li class="list-item-section">
                    <div class="section-link-group none-border">
                        <a class="section-grid-layout-item">
                            <div class="section-z04-div">
                                <div class="section-z04-img">
                                    <div class="stc-im">
                                        <div id="above" class="img-bgr-section"></div>
                                    </div>
                                </div>
                                <div class="z04tx-txt txt-Capitalize"></div>
                            </div>
                        </a>
                        <a class="section-grid-layout-item">
                            <div class="section-z04-div">
                                <div class="section-z04-img">
                                    <div class="stc-im">
                                        <div id="bellow" class="img-bgr-section"></div>
                                    </div>
                                </div>
                                <div class="z04tx-txt txt-Capitalize"></div>
                            </div>
                        </a>
                    </div>
                </li>
            `
        section_grid_layout_container.insertAdjacentHTML('beforeend',htmls)
    }
}
function renderProduct_ShopeeMall(products){
    products.forEach((prod,index)=>{
        let htmls, i,j;
        //console.log(index)
        if(index<products.length-1){
            htmls=
                `
                    <li class="spM-item-product">
                        <a href="#" class="spM-item-link-product none-change-opacity">
                            <img id="spM_img" src="${prod.body_img_url}" alt="">
                        </a>
                        <a href="#" class="spM-item-link-product none-change-opacity">
                            <img id="spM_img" src="${products[index+1].body_img_url}" alt="">
                        </a>
                    </li>
                `
        }
        if(index == products.length){
            htmls = 
                `
                    <li class="spM-item-product">
                        <a href="#" class="spM-item-link-product none-change-opacity">
                            <img id="spM_img" src="${prod.body_img_url}" alt="">
                        </a>
                        <a href="#" id ="spM_SeeMore" class="spM-item-link-product flex none-change-opacity">
                            <button class="shopeeMall_seeAll_Promotion flex none-change-opacity ">
                                <div>Xem tất cả </div>
                                <span class="flex mgl-8">
                                    <svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="shopee-svg-icon icon-arrow-right"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path></svg>
                                </span>
                            </button>
                        </a>
                    </li>
                `
        }
        spM_product_list.insertAdjacentHTML("beforeend",htmls)
    })
}
function renderProduct_TrenddingSearch(producs){
    producs.forEach(prod=>{
        const htmls = 
        `
            <a href="#" class="grid-item-trendding">
                <div class="grid-item-text">
                    <div class="name-product-trendding">Dép</div>
                    <div class="number-product-sold">${prod.quantity_sold} sản phẩm</div>
                </div>
                <img class="bgr-item-trendding" src="${prod.body_img_url}"></div>
            </a>
        `
        trennding_linkCTN.insertAdjacentHTML("beforeend", htmls)
    })
}
function renderProduct_topSearch(products){
    products.forEach((prod,index) =>{
        const htmls = 
        `
            <a href="#" class="grid-item-link-product-saleoff top-search-item-link  alpha-grid-item-link none-change-opacity">
                <div class="alpha-header">
                    <div class="alpha-block">Top</div>
                </div>
                <div class="img-sale-off-container alpha-img">
                    <div class="product-img-body prd-img-top-search alpha-img-div">
                        <img src="${prod.body_img_url}" class="img-body alpha-img-body" alt="">
                    </div>
                    <div class="number-sold-top alpha-sold-number">
                        <div class="nbsc-top-text"> Đã bán 
                        <span>${prod.quantity_sold}</span>
                            / tháng</div>
                    </div>
                </div>
                <div class="alpha-footer">
                    <div class="text">Sữa rửa mặt</div>
                </div>
            </a>
        `
        top_search_link_ctn.insertAdjacentHTML("beforeend", htmls)
    })
}
export function renderProduct_Relative_HomePage(products){
    let htmls, loadmore = $('.ft-sggtion-btn');
    var maxResult = 6;
    for(let i =0; i<maxResult;++i) {
            htmls= 
                `
                    <div class="b4etd">
                        <a href="../page/product_detail.html" class="grid-item-link-product none-change-opacity box_shadow">
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
                                        <img src="${products[i].body_img_url}" class="img-body" alt="">
                                    </div>
                                    <div class="product-img-footer">
                                        <img src="${products[i].footer_img_url}" class="img-footer">    
                                    </div>
                                </div>
                                <div class="footer-sggtion">  
                                    <div class="description-sggtion">
                                        <div class="descrp-txt-overflow">
                                            <div class="dcrs0">
                                                <div class="dcrs00">
                                                ${products[i].title}
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
                                                    <div class="price-sggtion font10">${products[i].price_promotion}</div>
                                                </del>
                                                <div class="crr-price flxC mgl-8">
                                                    <div class="currenty-sggtion font-14">đ</div>
                                                    <div class="price-sggtion">${products[i].price}</div>
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
                                                <span class="number-sld">${products[i].quantity_sold}</span>
                                            </div>
                                        </div>
                                        <div class="address-shop mgT16">
                                            <div class="add txt-Black-color">${products[i].shop_adress}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                `
        tdsgtion.insertAdjacentHTML("beforeend", htmls)
    }
    // tdsgtion.insertAdjacentHTML("beforeend", htmls)
    loadmore.onclick = ()=>{
        for(let i =maxResult;i<maxResult+6;++i){
            htmls= 
            `
                <div class="b4etd">
                    <a href="../page/product_detail.html" class="grid-item-link-product none-change-opacity box_shadow">
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
                                    <img src="${products[i].body_img_url}" class="img-body" alt="">
                                </div>
                                <div class="product-img-footer">
                                    <img src="${products[i].footer_img_url}" class="img-footer">    
                                </div>
                            </div>
                            <div class="footer-sggtion">  
                                <div class="description-sggtion">
                                    <div class="descrp-txt-overflow">
                                        <div class="dcrs0">
                                            <div class="dcrs00">
                                            ${products[i].title}
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
                                                <div class="price-sggtion font10">${products[i].price_promotion}</div>
                                            </del>
                                            <div class="crr-price flxC mgl-8">
                                                <div class="currenty-sggtion font-14">đ</div>
                                                <div class="price-sggtion">${products[i].price}</div>
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
                                            <span class="number-sld">${products[i].quantity_sold}</span>
                                        </div>
                                    </div>
                                    <div class="address-shop mgT16">
                                        <div class="add txt-Black-color">${products[i].shop_adress}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `
            tdsgtion.insertAdjacentHTML("beforeend", htmls)
        }
        maxResult+=6;
        if(maxResult>=products.length){
            $('.footer-sggtion-see-more').style.display ='none'
        }
    }
}