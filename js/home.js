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
            render_FlashSale_homePage(data.flash_sale)
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
// HOME BANNER
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

// CATAGORIES
function render_Catagory_homePage(products){
    var x=[], y=[];
    for(let i =0; i<products.length;++i){
        if(products[i].id_catagory%2>0){
            x.push(products[i])
        }
        if(products[i].id_catagory%2==0){
            y.push(products[i])
        }
    }
    x.forEach((item,index)=>{
        htmls =
            `
                <li class="list-item-section">
                    <div class="section-link-group none-border">
                        <a class="section-grid-layout-item">
                            <div class="section-z04-div">
                                <div class="section-z04-img">
                                    <div class="stc-im">
                                        <div id="above" class="img-bgr-section" style="background-image:url('${item.catagory_img}')"></div>
                                    </div>
                                </div>
                                <div class="z04tx-txt txt-Capitalize">${item.catagory_name}</div>
                            </div>
                        </a>
                        <a class="section-grid-layout-item">
                            <div class="section-z04-div">
                                <div class="section-z04-img">
                                    <div class="stc-im">
                                        <div id="bellow" class="img-bgr-section" style="background-image:url('${y[index].catagory_img}')"></div>
                                    </div>
                                </div>
                                <div class="z04tx-txt txt-Capitalize">${y[index].catagory_name}</div>
                            </div>
                        </a>
                    </div>
                </li>
            `
        section_grid_layout_container.insertAdjacentHTML('beforeend',htmls)
    })
    
}

// FLASH SALE
import handleEvent_next_prevBtn from "./handleEvent.js"
export function render_FlashSale_homePage(products){
    products.forEach(prod=>{
        htmls=
        `
            <a href="#" id="item_Flash_sale" class="grid-item-link-product-saleoff">
                <div class="container-link-flash-sale">
                    <div class="header-link-sale-off-container flex">
                        <div class="header-block-sale-off">
                            <span class="percent-sale-off">${prod.percent_saleoff}%</span>
                            <span class="sale-text">Giảm</span>
                        </div>
                    </div>
                    <div class="img-sale-off-container">
                        <div class="product-img-body">
                            <img src= "${prod.body_img_url}" class="img-body" alt="">
                        </div>
                        <div class="product-img-footer">
                            <img src= "${prod.footer_img_url}" class="img-footer">    
                        </div>
                    </div>
                    <div class="footer-flash-sale-item">
                        <div class="price-sale-off">
                            <div class="number-price">
                                <span class="currentcy">đ</span>
                                ${prod.price}
                            </div>
                        </div>
                        <div class="number-sold">
                            <div class="nb-sold-child">
                                <div class="nbsc-background">
                                    <div class="nbsc-text">Đã bán ${prod.quantity_sold}</div>
                                    <div class="hot-sale"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        `
        $('.grid-containter-flash-sale').insertAdjacentHTML("beforeend",htmls);
    })
    const item_Flash_sale = $$('#item_Flash_sale')
    handleEvent_next_prevBtn(item_Flash_sale)
}
// SHOPEE MALL
function renderProduct_ShopeeMall(products){
    var x =[], y =[];
    for(let i =0;i<products.length;++i){
        if(i%2==0){
            x.push(products[i])
        }
        if(i%2>0){
            y.push(products[i])
        }
    }
    x.forEach((itemX,index)=>{
        if(index < x.length-1)
           htmls=
                `
                    <li class="spM-item-product">
                        <a href="#" class="spM-item-link-product none-change-opacity">
                            <img id="spM_img" src="${itemX.body_img_url}" alt="">
                            <div id="spM_content" class="font20 font600"  style="color:var(--red-color);">
                                <div">${itemX.content_description}</div>
                            </div>
                        </a>
                        <a href="#" class="spM-item-link-product none-change-opacity">
                            <img id="spM_img" src="${y[index].body_img_url}" alt="">
                            <div id="spM_content" class="font20 font600"  style="color:var(--red-color);">
                                <div">${y[index].content_description}</div>
                            </div>
                        </a>
                    </li>
                `
            if(index == x.length-1){
                    htmls = 
                        `
                            <li class="spM-item-product">
                                <a href="#" class="spM-item-link-product none-change-opacity">
                                    <img id="spM_img" src="${itemX.body_img_url}" alt="">
                                </a>
                                <a href="#" id ="spM_SeeMore" class="spM-item-link-product none-change-opacity">
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

// TRENDDING SEARCH
function renderProduct_TrenddingSearch(products){
    products.forEach(prod=>{
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

// TOP SEARCH
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

// TODAY SUGGESSTIONS
import {calculator_promotion_price} from "./handleEvent.js"
export function renderProduct_Relative_HomePage(products){
    let htmls, loadmore = $('.ft-sggtion-btn');
    var maxResult = 6;
    var x=0;
    for(let i =0; i<maxResult;++i) {
        x = calculator_promotion_price(products[i])
        if(products[i].percent_saleoff>0){
            htmls= 
                `
                    <div class="b4etd none-change-opacity">
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
                                            <span class="percent-sale-off">${products[i].percent_saleoff}%</span>
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
                                        <div class="price-block mgT16 flex-jtfspbt">
                                            <div class="prc flx">
                                                <del class="dell-price flxC color-gray">
                                                    <div class="currenty-sggtion font075">đ</div>
                                                    <div class="price-sggtion font10">${products[i].price}</div>
                                                </del>
                                                <div class="crr-price flxC mgl-8">
                                                    <div class="currenty-sggtion font-14">đ</div>
                                                    <div class="price-sggtion">${x}</div>
                                                </div>  
                                            </div>
                                        </div>
                                        <div class="nbs-sggtion">
                                                <div class="font-14">Đã bán
                                                    <span class="number-sld">${products[i].quantity_sold}</span>
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
        if(products[i].percent_saleoff==0){
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
                                        <div class="price-block mgT32 flex-jtfspbt">
                                                <div class="crr-price flxC">
                                                    <div class="currenty-sggtion font-14">đ</div>
                                                    <div class="price-sggtion">${products[i].price}</div>
                                                </div>  
                                                <div class="nbs-sggtion flex">
                                                    <div class="mgl-8 font-14">Đã bán
                                                        <span class="number-sld">${products[i].quantity_sold}</span>
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
        tdsgtion.insertAdjacentHTML("beforeend", htmls)
    }
    // tdsgtion.insertAdjacentHTML("beforeend", htmls)
    loadmore.onclick = ()=>{
        for(let i =maxResult;i<maxResult+6;++i){
            x = calculator_promotion_price(products[i])
            if(products[i].percent_saleoff>0){
                htmls= 
                `
                        <div class="b4etd none-change-opacity">
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
                                                <span class="percent-sale-off">${products[i].percent_saleoff}%</span>
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
                                            <div class="price-block mgT16 flex-jtfspbt">
                                                <div class="prc flx">
                                                    <del class="dell-price flxC color-gray">
                                                        <div class="currenty-sggtion font075">đ</div>
                                                        <div class="price-sggtion font10">${products[i].price}</div>
                                                    </del>
                                                    <div class="crr-price flxC mgl-8">
                                                        <div class="currenty-sggtion font-14">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion">
                                                    <div class="font-14">Đã bán
                                                        <span class="number-sld">${products[i].quantity_sold}</span>
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
            if(products[i].percent_saleoff==0){
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
                                            <div class="price-block mgT32 flex-jtfspbt">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion font-14">đ</div>
                                                        <div class="price-sggtion">${products[i].price}</div>
                                                    </div>  
                                                    <div class="nbs-sggtion flex">
                                                        <div class="mgl-8 font-14">Đã bán
                                                            <span class="number-sld">${products[i].quantity_sold}</span>
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
            tdsgtion.insertAdjacentHTML("beforeend", htmls)
        }
        maxResult+=6;
        if(maxResult>=products.length){
            $('.footer-sggtion-see-more').style.display ='none'
        }
    }
}