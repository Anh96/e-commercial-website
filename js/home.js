$ = document.querySelector.bind(document)
const top_search_link_ctn = $('.top_search_link_ctn')
const spM_product_list = $('.spM-product-list')
const productsAPI = "../data/product.json"
const section_grid_layout_container = $('.section-grid-layout-container')
const trennding_linkCTN = $('.grid-ctn-body-trendding')
const tdsgtion = $('#tdsgtion-relative-product');
let htmls,new_Array = new Array;
import {renderHeaderNav} from "./header.js"
import {keysearch} from "./keyword_search.js"
renderHeaderNav();
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
            if(window.innerWidth>= 1280){
                keysearch(data.key_search)
            }
        })
} 
handleProducts()
// 
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
                    <div class="right-img" style="background-image:url('${img.right_img}'); background-size: cover; background-repeat: no-repeat no-repeat'"></div>
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
import { render_products_has_hoversameblock } from "./condition_render_products.js"
export function renderProduct_Relative_HomePage(products){
    let loadmore = $('.ft-sggtion-btn');
    var maxResult = 6;
    if(products.length<= maxResult){
        for( let i in products){
            htmls = render_products_has_hoversameblock(products[i]);
            tdsgtion.innerHTML += htmls;
        }
    }
    else{
        for(let i =0; i<maxResult;++i) {
            htmls = render_products_has_hoversameblock(products[i]);
            tdsgtion.innerHTML += htmls;
        }
        loadmore.onclick = ()=>{
            for(let i =maxResult;i<maxResult+6;++i){
                htmls = render_products_has_hoversameblock(products[i]);
                tdsgtion.innerHTML += htmls;
            }
            maxResult+=6;
            if(maxResult>= products.length){
                $('.footer-sggtion-see-more').style.display ='none'
            }
        }
    }
}