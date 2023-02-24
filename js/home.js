const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const top_search_link_ctn = $('.top_search_link_ctn')
const trennding_linkCTN = $('.grid-ctn-body-trendding')
const tdsgtion = $('#tdsgtion-relative-product');
let htmls,new_Array = new Array;
import {renderHeaderNav_base_desktop, renderHeaderNav_homepage_mobile,} from "./header.js";
import {keysearch} from "./keyword_search.js";
import {footerHomepage, renderFooter_mobile_has_watchmoreBtn, footerTodaySuggestionMobile} from "./footer.js"
import {
    handleEvent_next_prevBtn, handleEventBtnsSliderShopeeMall, 
    handle_sliders_shopeemall, handleEventClick_NexPrevBtns_PC, handleEventClick_NextPrevBtns_Mobile
} from "./handleEvent.js"
function fetchData(){
    fetch("../data/data.json")
        .then(res=>{
            return res.json()
        })
        .then(data=>{      
            render_slide_leftSlide_homeBanner(data.slider);
            setproperties_when_window_widthchanges();
            if(window.innerWidth <= 834){
                renderHeaderNav_homepage_mobile();
                render_Catagory_homePage_mobile(data.catagories);
                renderLayout_ShopeeMall_mobile(data.shopee_mall);
                handleEventClick_NextPrevBtns_Mobile();
                renderFooter_mobile_has_watchmoreBtn();
            }
            if(window.innerWidth >= 1008){
                renderHeaderNav_base_desktop()
                render_slide_rightSlide_homeBanner(data.right_banner);
                render_Catagory_homePage(data.catagories);
                keysearch(data.key_search);
                renderLayout_ShopeeMall_desktop(data.shopee_mall);
                handleEventClick_NexPrevBtns_PC();
                footerHomepage();
            }
            footerBanner(data.footerBanner);
            render_FlashSale_homePage(data.flash_sale)
            renderProduct_TrenddingSearch(data.trendding_search)
            renderProduct_topSearch(data.products)
            renderProduct_Relative_HomePage(data.products);

        })
} 
fetchData()
// 
var imgSliders;
var currentIndex =0;
const nextCircleAnimationHomeBanner = document.querySelectorAll(".full-home-banner .list-next-circle-animation")
// $$('.full-home-banner .list-next-circle-animation')
const prev_btn = $('.left-btn')
const next_btn = $('.right-btn')
// Set grid
function setproperties_when_window_widthchanges(){
    
    if(window.innerWidth >= 1008){
        
        // banner
        $(".full-home-banner").style.height = "300px";
        document.querySelectorAll(".sld-img-item").forEach(bgimg=>{
            bgimg.style.backgroundSize = "contain";
        })
        $(".left-slider").style.flex = "2 1 0";
    }
    if(window.innerWidth <= 834){
        // Top search
        document.querySelectorAll(".top-search-item-link").forEach(item=>{
            item.style.width = "150px";
        })
        // Today Suggesstion
        // window.addEventListener("scroll", (event)=>{
        //     // today sugestion

        //     console.log(this.scrollY)
        //     // if(window.scrollY>=2000){
        //     //     document.querySelector(".header-ctn-today-sggtion").style.top = "130px";
        //     // }
        // })
        $$(".home-page .hover-looking-same-product").forEach(item=>{
            item.style.display = "none";
        })
        $$(".nbs-sggtion").forEach(item=>{
            item.style.fontSize = "10px"
        })
        $$(".crr-price").forEach(item=>{
            item.style.fontSize = "13px"
        })
    }
}
// HOME BANNER
function render_slide_leftSlide_homeBanner(sliders){
    sliders.forEach(slide=>{
        $('.letf-slider-img-list').innerHTML +=
            `
                <li class="sld-img-item none-change-opacity" style="background-image: url(${slide.slide_img_link}); background-size: contain"></li>
            `
    })
    // imgSliders = $('.letf-slider-img-list').querySelectorAll('.sld-img-item');
    imgSliders = document.querySelectorAll(".letf-slider-img-list .sld-img-item");
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
        $('.right-slider').innerHTML += htmls;
    })
}

// CATAGORIES
function render_Catagory_homePage(data){
    $(".section-grid-layout-heading").innerHTML = `
        <div class="section-heading-title shtPC">Danh mục</div>
    `
    $(".section-grid-layout-container").innerHTML = `<div class="sGLC sGlC-PC"></div>`
    var x=[], y=[];
    for(let i =0; i<data.length;++i){
        if(data[i].id_catagory%2>0){
            x.push(data[i])
        }
        if(data[i].id_catagory%2==0){
            y.push(data[i])
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
                                        <div id="bellow" class="img-bgr-section" style="background-image:url('${y[index].catagory_img}');"></div>
                                    </div>
                                </div>
                                <div class="z04tx-txt txt-Capitalize">${y[index].catagory_name}</div>
                            </div>
                        </a>
                    </div>
                </li>
            `
        $(".sGlC-PC").innerHTML += htmls;
    });
}
function render_Catagory_homePage_mobile(data){
    $(".section-grid-layout-heading").innerHTML = `
        <div class="flex-jtfspbt section-grid-layout-heading-mobile">
            <div class="section-heading-title">Danh mục</div>
            <div class="btn-ic-see-all">
                <a class="see-all-flash-sale-btn font075 none-change-opacity">Xem tất cả </a>
                <div class="flex">
                    <svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="shopee-svg-icon icon-arrow-right-see_more"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path></svg>
                </div>
            </div>
        </div>
    `
    data.forEach((item, index)=>{
        if(index<8){
            htmls =
            `
                <li class="list-item-section" style="">
                    <div class="section-link-group none-border">
                        <a class="section-grid-layout-item">
                            <div class="section-z04-div" style="height: 110px">
                                <div class="section-z04-img">
                                    <div class="stc-im">
                                        <div id="above" class="img-bgr-section" style="background-image:url('${item.catagory_img}');"></div>
                                    </div>
                                </div>
                                <div class="z04tx-txt txt-Capitalize" style="font-size:0.65rem">${item.catagory_name}</div>
                            </div>
                        </a>
                    </div>
                </li>
            `
            $(".section-grid-layout-container").innerHTML += htmls;
        }
        }
    )
    $(".small-btn").style.display = "none";
    $(".shopee-promotion-ctn").innerHTML += `
            <div style="position: relative; width: 100%; height:auto">
                <img src="https://cf.shopee.vn/file/302b42ec44be61b1c8b817c29ee390fb" alt="" style="width: inherit;">
                <div class="promotion-group-links flex-jtfspbt" style="position: absolute;">
                    <a href="https://shopee.vn/samsung_official_store" target="_blank"></a>
                    <a href=""></a>
                    <a href=""></a>
                </div>
            </div>
            <div style="width: inherit; height:auto">
                <img src="https://cf.shopee.vn/file/808a14bb3abcf8b6249cfa8a09821f85" alt="" style="width: inherit ;">
            </div>
        `
}
//CATAGORIES AT FOOTER BANNER
function footerBanner(data){
    data.forEach(data=>{
        $(".footer-banner-container").innerHTML += `
            <div class="coll">
                <a>
                    <div class="Z04TX">
                        <div class="z04tx-div">
                            <div class="z04tx-div-ic">
                                <img src="${data.cata_ft_img_link}" alt="" class="z04tx-icon"></img>
                            </div>
                        </div>
                        <div class="z04tx-txt">${data.cata_ft_name}</div>
                    </div>
                </a>
            </div>
        `
    })
    
}
// FLASH SALE
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
        $('.grid-containter-flash-sale').innerHTML += htmls;
        document.querySelectorAll(".img-bgr-section").forEach(img=>{
            img.style.backgroundSize = "contain"
        })
    })
    const item_Flash_sale = document.querySelectorAll('#item_Flash_sale')
    handleEvent_next_prevBtn(item_Flash_sale);

}
// SHOPEE MALL
function renderLayout_ShopeeMall_desktop(products){
    // layout Shopee Mall on desktop
    $(".shopee-mall-container").innerHTML += `
        <div class="sml-div-container">
            <div class="header-smll-container flex-jtfspbt box_shadow" style="position: relative; width: 100%; height: 50px">
                <div class="left-header-smll-container" style="width:80%;">
                    <div class="heading-smll left-smll-item flex" style="50%">
                        <span class="header-item-vertical-line heading-span">Shopee Mall</span>
                    </div>
                    <div class="a8XyX2-ctn flex-jtfspbt" style="50%">
                        <div class="item-header-smll-container left-smll-item">
                            <img class="a8XyX2" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/6c502a2641457578b0d5f5153b53dd5d.png">
                            <span>7 ngày miễn phí trả hàng</span>
                        </div>
                        <div class="item-header-smll-container left-smll-item">
                            <img class="a8XyX2" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/16ead7e0a68c3cff9f32910e4be08122.png">
                            <span>Hàng chính hãng 100%</span>
                        </div>
                        <div class="item-header-smll-container left-smll-item">
                            <img class="a8XyX2" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/511aca04cc3ba9234ab0e4fcf20768a2.png">
                            <span>Miễn phí vận chuyển</span>
                        </div>
                    </div>
                </div>
                <div class="right-header-smll-container" style="position: relative; width:10%; height: inherit; >
                    <div class="right-header-flash-sale" style="width100%; height: 100%; position: absolute; right:40px; ">
                        <div class="btn-ic-see-all flex" style="width:100%;>
                            <button class="see-all-flash-sale-btn none-change-opacity">Xem tất cả </button>
                            <div class="flex">
                                <svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="shopee-svg-icon icon-arrow-right-see_more"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shopeeMall-body-container flxC">
                <div class="spM-left-body-ctn none-change-opacity mgl-8">
                    <ul class="spM_Slider flxC none-padding">
                        <li class="slide-item-spM">
                            <img class="banner-image" src="https://cf.shopee.vn/file/5199f2e952b29ac21494ed7ce93b5a6f">
                        </li>
                        <li class="slide-item-spM">
                            <img class="banner-image" src="https://cf.shopee.vn/file/be47f76f6344736ffef2e87c9a06700b">
                        </li>
                        <li class="slide-item-spM">
                            <img class="banner-image" src="https://cf.shopee.vn/file/d7437d1c73db64636ff4223fbb6ad651">
                        </li>
                        <li class="slide-item-spM">
                            <img class="banner-image" src="https://cf.shopee.vn/file/d7437d1c73db64636ff4223fbb6ad651">
                        </li>
                    </ul>
                    <div>
                        <button class="left-slider-arrow left-btn left-shopeeMall none-change-opacity">
                            <svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" role="img" class="stardust-icon stardust-icon-arrow-left-bold"><path stroke="none" d="m4.2 10l7.9-7.9-2.1-2.2-9 9-1.1 1.1 1.1 1 9 9 2.1-2.1z"></path></svg>
                        </button>
                        <button class="left-slider-arrow right-btn right-shopeeMall none-change-opacity">
                            <svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" role="img" class="stardust-icon stardust-icon-arrow-right-bold"><path stroke="none" d="m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z"></path></svg>
                        </button>
                    </div>
                    <div class="next-circle-animation flex">
                        <div class="list-next-circle-animation none-change-opacity dotShopeeMall active"></div>
                        <div class="list-next-circle-animation none-change-opacity dotShopeeMall "></div>
                        <div class="list-next-circle-animation none-change-opacity dotShopeeMall"></div>
                        <div class="list-next-circle-animation none-change-opacity dotShopeeMall"></div>
                    </div>
                </div>
                <div class="spM-right-body-ctn">
                    <div class="spM-right-overflow" style="overflow: hidden;">
                        <ul class="spM-product-list flxC"></ul>
                    </div>
                    <div class="small-btn flex-jtfspbt">
                        <div class="arrow-btn-ctn left-arr leftArr_shopeeMallProduct none-change-opacity">
                            <svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" class="shopee-svg-icon icon-arrow-bold"><polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon></svg>
                        </div>
                        <div class="arrow-btn-ctn right-arr rightArr_shopeeMallProduct none-change-opacity">
                            <svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" class="shopee-svg-icon icon-arrow-bold"><polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    // render products on Shopee Mall
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
        $(".spM-product-list").innerHTML +=
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
                $(".spM-product-list").innerHTML  += 
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
    });
    handle_sliders_shopeemall();
    handleEventBtnsSliderShopeeMall();
}
function renderLayout_ShopeeMall_mobile(data){
    // header shopee mall
    $(".shopee-mall-container").innerHTML = `
        <div class="sml-div-container">
            <div class="header-smll-container flex-jtfspbt box_shadow" style= "position: relative; width:100%;">
                <div class="left-header-smll-container" style="width:50%; height:inherit; font-size: 10px; ">
                    <div class="heading-smll left-smll-item">
                        <span class="header-item-vertical-line heading-span">Shopee Mall</span>
                    </div>
                </div>
                <div class="right-header-smll-container" style="width:50%;">
                    <div class="right-header-flash-sale" style="width:100%;">
                        <div class="btn-ic-see-all">
                            <button class="see-all-flash-sale-btn none-change-opacity">Xem tất cả </button>
                            <div class="flex">
                                <svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="shopee-svg-icon icon-arrow-right-see_more"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="a8XyX2-ctn flex-jtfspbt" style="position: relative; width:100%; height: 50px ; background-color: white " >
                <div class="item-header-smll-container left-smll-item" >
                    <img class="a8XyX2" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/6c502a2641457578b0d5f5153b53dd5d.png" style="width: 10px; height: 10px">
                    <span class="font075">7 ngày miễn phí trả hàng</span>
                </div>
                <div class="item-header-smll-container left-smll-item">
                    <img class="a8XyX2" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/16ead7e0a68c3cff9f32910e4be08122.png" style="width: 10px; height: 10px">
                    <span class="font075">Hàng chính hãng 100%</span>
                </div>
                <div class="item-header-smll-container left-smll-item">
                    <img class="a8XyX2" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/511aca04cc3ba9234ab0e4fcf20768a2.png" style="width: 10px; height: 10px">
                    <span class="font075">Miễn phí vận chuyển</span>
                </div>
            </div>
            <div class="shopeeMall-body-container flxC" style="width:100%; overflow: hidden">
                <div class="spM-right-body-ctn" style="position:relative;overflow-x: scroll; width:100%;">
                    <div class="spM-right-overflow">
                        <ul class="spM-product-list flxC" style="padding-left:0px; width: fit-content"></ul>
                    </div>
                </div>
            </div>
        </div>
    `
    // render products SHOPEE MALL
    data.forEach(data=>{
        $(".spM-product-list").innerHTML += `
            <li class="spM-item-product" style="width:150px; margin: 2px">
                <a href="#" class="spM-item-link-product none-change-opacity">
                    <img id="spM_img" src="${data.body_img_url}" alt="">
                    <div id="spM_content" class="font-14 font600"  style="color:var(--red-color);">
                        <div">${data.content_description}</div>
                    </div>
                </a>
            </li>
        `
    });
}
// TRENDDING SEARCH
function renderProduct_TrenddingSearch(products){
    products.forEach(prod=>{
         $(".scroll-ctn-body-trendding").innerHTML += 
        `
            <div class="coll-trendding">
                <a href="#" class="flex-item-trendding">
                    <div class="flex-item-text">
                        <div class="name-product-trendding">Dép</div>
                        <div class="number-product-sold">${prod.quantity_sold} sản phẩm</div>
                    </div>
                    <img class="bgr-item-trendding" src="${prod.body_img_url}"></div>
                </a>
            </div>
        `
       
    });
    if(window.innerWidth <=480){
        $(".scroll-ctn-body-trendding").style.touchAction = "pan-x";
    }
}
// TOP SEARCH
function renderProduct_topSearch(products){
    products.forEach(prod =>{
         top_search_link_ctn.innerHTML += 
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
                    <div class="text">${prod.catagory_TopSearch}</div>
                </div>
            </a>
        `
    })
}
// TODAY SUGGESSTIONS
import { render_products_none_hoversameblock, render_products_has_hoversameblock } from "./condition_render_data.js";
export function renderProduct_Relative_HomePage(products){
    let loadmore = document.querySelector('.ft-sggtion-btn');
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
            for(let i = maxResult;i<maxResult+6;++i){
                htmls = render_products_has_hoversameblock(products[i]);
                tdsgtion.innerHTML += htmls;
            }
            maxResult+=6;
            if(maxResult >= products.length){
                $('.footer-sggtion-see-more').style.display ='none';
                footerTodaySuggestionMobile();

            }
        }
    }
}