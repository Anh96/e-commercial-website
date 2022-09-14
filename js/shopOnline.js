$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);
// change position for check-icon when click on each element namethod name
// js for change the key of search Method
var get_Value_input  = $('.shopOnline-nav-search-ctn .shopOnline-inputCTN input')
var historySearchFollowMethod = $('.shopOnline-nav-search-ctn .shopOnline-inputCTN .history-search-container .history-search #historyDIV')
var getName = $('.shopOnline-nav-search-ctn .search_inshop .above .which-shop');
var getNameMethod = $$('.shopOnline-nav-search-ctn .search_inshop .bellow-search_inshop .cekTXT')
var checkBtn = $('.check-btn')
getNameMethod.forEach((name,index)=>{
     name.onclick=  function(){
         const html = name.innerText;
         getName.innerHTML = html;

        // change position of check button
        $('.cekTXT.prd-active').classList.remove('prd-active')
        this.classList.add('prd-active')
        checkBtn.style.top = this.offsetTop + 10 +'px'
        $('.shopOnline-nav-search-ctn .shopOnline-inputCTN input').placeholder = 'Tìm trong shop này'
         // change placeholder value
        
        if(index==0){
            $('.search-inShop-history').style.display = 'block'
            $('.search_in-shope-ctn').style.display = 'none'
        }
        else{
            //active search in shop
            $('.agency-saleOff').style.display = 'block'
            //off search in shopee
            $('.search-inShop-history').style.display = 'none'
            $('.search-shop-inShopee').style.display ='none'
        
            var placeHolder = $('.search_in-shope-ctn .agency-saleOff span')
            $('.shopOnline-nav-search-ctn .shopOnline-inputCTN input').placeholder = placeHolder.innerText
            get_Value_input.onkeydown = function(){
                $('.agency-saleOff').style.display = 'none'
                $('.search-shop-inShopee').style.display= 'block'
            }
        }
         //get compatible history method search
      }
})

//recommend products shop online
let htmls;
fetch('../data/product.json')
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        renderPromotionItem(data.shop_promotion_codes)
        check(data.shop_promotion_codes)
        suggestion_products_ShopOnline(data.products_inshop)
        topsales(data.products_inshop)
    }) 
//Promotion CODE
    //Condition to hide or show next button
    function check(promotions){
        var sum=0;
        promotions.forEach(p=>{
            if(p.id_shop==1){
                sum++;
            }
        })
        if(sum<=3){
            $('.right-arr').style.display="none"
        }
        if(sum>3){
            $('.right-arr').style.display="block"
        }
    }
    function transform_promotion_code(promotion){
        const getWidth = promotion.getBoundingClientRect().width;
        return getWidth;
    }
    function renderPromotionItem(promotions){
        let count =0;
        promotions.forEach(promot=>{
            if(promot.id_shop==1){
                count ++;
            }
        })
        if(count==0){
            $('.top').style.display ='none'
        }
        if(count>0){
            promotions.forEach(promot => {
                if(promot.id_shop==1){
                    if(promot.max_off>0){
                        htmls=
                            `
                                <div class="PMTcode margin-tb16 flx">
                                    <div class="curve-PRM flex">
                                        <div class="cUVR">
                                            <div class="cPRm"></div>
                                        </div>
                                    </div>
                                    <div class="main-Promotion-CODE pd-LR-4 flex-jtfspbt">
                                        <div class="lft-PRM">
                                            <div class="txt-Capitalize color-primary-text mgTB-4 font600">giảm ${promot.percent_off_promotion_code}%</div>
                                            <div class="color-primary-text minimum-order flxC">
                                                <div class="txt-Capitalize">Đơn tối thiểu</div>
                                                <span class="mgLR-4">đ${promot.min_bill/1000}k </span>
                                                <div class="txt-Capitalize">Giảm tối đa</div>
                                                <span class="mgLR-4"> đ${promot.max_off/1000}k </span>
                                            </div>
                                            <div class="progress progress-bar-used mgTB-4">
                                                <div class="progress-bar progress-change" role ="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:${promot.used_quantity}%"></div>
                                            </div>
                                            <div class="txt-Capitalize color-gray font075 mgTB-4 flxC">
                                                đã dùng
                                                <span class="pce mgLR-4">${promot.used_quantity}%</span>
                                                , HSD: 
                                                <span class="date-time">${promot.code_exp}</span>
                                            </div>
                                        </div>
                                        <div class="right-PRM mgl-8 flex">
                                            <div class="flex txt-white-color font16 none-change-opacity"> Lưu</div>
                                        </div>
                                    </div>
                                </div>
                            `
                    }
                    if(promot.max_off==0){
                        htmls=
                            `
                                <div class="PMTcode margin-tb16 flx">
                                    <div class="curve-PRM flex">
                                        <div class="cUVR">
                                            <div class="cPRm"></div>
                                        </div>
                                    </div>
                                    <div class="main-Promotion-CODE pd-LR-4 flex-jtfspbt">
                                        <div class="lft-PRM">
                                            <div class="txt-Capitalize color-primary-text mgTB-4 font600">giảm ${promot.percent_off_promotion_code}%</div>
                                            <div class="color-primary-text minimum-order flxC">
                                                <div class="txt-Capitalize">Đơn tối thiểu</div>
                                                <span class="mgLR-4">đ${promot.min_bill/1000}k </span>
                                            </div>
                                            <div class="progress progress-bar-used mgTB-4">
                                                <div class="progress-bar progress-change" role ="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:${promot.used_quantity}%"></div>
                                            </div>
                                            <div class="txt-Capitalize color-gray font075 mgTB-4 flxC">
                                                đã dùng
                                                <span class="pce mgLR-4">${promot.used_quantity}%</span>
                                                , HSD: 
                                                <span class="date-time">${promot.code_exp}</span>
                                            </div>
                                        </div>
                                        <div class="right-PRM mgl-8 flex">
                                            <div class="flex txt-white-color font16 none-change-opacity"> Lưu</div>
                                        </div>
                                    </div>
                                </div>
                            `
                    }
                    if(promot.used_quantity==0){
                        htmls=
                            `
                                <div class="PMTcode margin-tb16 flx">
                                    <div class="curve-PRM flex">
                                        <div class="cUVR">
                                            <div class="cPRm"></div>
                                        </div>
                                    </div>
                                    <div class="main-Promotion-CODE pd-LR-4 flex-jtfspbt">
                                        <div class="lft-PRM">
                                            <div class="txt-Capitalize color-primary-text mgTB-4 font600">giảm ${promot.percent_off_promotion_code}%</div>
                                            <div class="color-primary-text minimum-order flxC">
                                                <div class="txt-Capitalize">Đơn tối thiểu</div>
                                                <span class="mgLR-4">đ${promot.min_bill/1000}k </span>
                                                <div class="txt-Capitalize">Giảm tối đa</div>
                                                <span class="mgLR-4"> đ${promot.max_off/1000}k </span>
                                            </div>
                                            <div class="txt-Capitalize color-gray font075 mgTB-4 flxC">
                                                HSD: 
                                                <span class="date-time">${promot.code_exp}</span>
                                            </div>
                                        </div>
                                        <div class="right-PRM mgl-8 flex">
                                            <div class="flex txt-white-color font16 none-change-opacity"> Lưu</div>
                                        </div>
                                    </div>
                                </div>
                            `
                    }
                    $('.CDpmt-wrapper').insertAdjacentHTML('beforeend',htmls);
                }
            });
        }
        const PMTcode = $$('.PMTcode')
        let count_click=0;
        PMTcode.forEach(ptmcode=>{
            $('.right-arr').onclick =()=>{
                count_click++;
                if(count_click>0){
                    $('.left-arr').style.display ="block"
                    console.log(count_click*transform_promotion_code(ptmcode))
                }
                if(PMTcode.length*transform_promotion_code(ptmcode)==count_click){
                    $('.right-arr').style.display =="none"
                }
                $('.CDpmt-wrapper').scrollLeft +=transform_promotion_code(ptmcode);
            }
            $('.left-arr').onclick =()=>{
                count_click--;
                if(count_click>0){
                    $('.right-arr').style.display ='block'
                }
                if(count_click<=0){
                    $('.left-arr').style.display ="none";
                }
                $('.CDpmt-wrapper').scrollLeft -=transform_promotion_code(ptmcode);
            }
        })
    }

//Suggesstion
    function calculator_promotion_price(products){
        return products.price - (products.price *products.percent_saleoff/100);
    }
    function suggestion_products_ShopOnline(products){
        var x=0;
        products.forEach((prod,index)=>{
             x = calculator_promotion_price(prod);
            if(index<6){
                if(prod.percent_saleoff>0){
                    htmls=
                            `
                                <div id="id-b4etd" class="b4etd">
                                    <a href="../page/product_detail.html" class="grid-item-link-product none-change-opacity box_shadow">
                                        <div class="bellow-grid-item-link">
                                            <div class="body-container">
                                                <div class="favorite-shop">
                                                    <div class="header-block-favorite-shop">
                                                        <span class="fvr-text">Yêu thích</span>
                                                    </div>
                                                </div>
                                                <div id="percent_promotion">
                                                    <div class="header-link-sale-off-container">
                                                        <div class="header-block-sale-off">
                                                            <span class="percent-sale-off">${products[index].percent_saleoff}%</span>
                                                            <span class="sale-text">Giảm</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div class="product-img-body">
                                                    <img src="${products[index].body_img_url}" class="img-body" alt="">
                                                </div>
                                                <div class="product-img-footer">
                                                    <img src="${products[index].footer_img_url}" class="img-footer">    
                                                </div>
                                            </div>
                                            <div class="footer-sggtion">  
                                                <div class="description-sggtion">
                                                    <div class="descrp-txt-overflow">
                                                        <div class="dcrs0">
                                                            <div class="dcrs00">
                                                            ${products[index].title}
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
                                                        <div class="prc flex-jtfspbt">
                                                            <del class="dell-price flxC color-gray">
                                                                <div class="price-sggtion font10 mgR-8">đ ${products[index].price}</div>
                                                            </del>
                                                            <div class="crr-price flxC">
                                                                <div class="currenty-sggtion font-14">đ</div>
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
                                                    <div class="nbs-sggtion flex-jtfspbt">
                                                        <div>Đã bán
                                                            <span class="number-sld">${products[index].quantity_sold}</span>
                                                        </div>
                                                        <div class="address-shop flex">
                                                            <div class="add txt-Black-color">${products[index].shop_adress}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            `
                }
                if(prod.percent_saleoff==0){
                    htmls=
                            `
                                <div id="id-b4etd" class="b4etd">
                                    <a href="../page/product_detail.html" class="grid-item-link-product none-change-opacity box_shadow">
                                        <div class="bellow-grid-item-link">
                                            <div class="body-container">
                                                <div class="favorite-shop">
                                                    <div class="header-block-favorite-shop">
                                                        <span class="fvr-text">Yêu thích</span>
                                                    </div>
                                                </div>
                                                </div>
                                                <div class="product-img-body">
                                                    <img src="${products[index].body_img_url}" class="img-body" alt="">
                                                </div>
                                                <div class="product-img-footer">
                                                    <img src="${products[index].footer_img_url}" class="img-footer">    
                                                </div>
                                            </div>
                                            <div class="footer-sggtion">  
                                                <div class="description-sggtion">
                                                    <div class="descrp-txt-overflow">
                                                        <div class="dcrs0">
                                                            <div class="dcrs00">
                                                            ${products[index].title}
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
                                                        <div class="prc flex-jtfspbt">
                                                            <div class="crr-price flxC">
                                                                <div class="currenty-sggtion font-14">đ</div>
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
                                                    <div class="nbs-sggtion flex-jtfspbt">
                                                        <div>Đã bán
                                                            <span class="number-sld">${products[index].quantity_sold}</span>
                                                        </div>
                                                        <div class="address-shop flex">
                                                            <div class="add txt-Black-color">${products[index].shop_adress}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            `
                }
                if(prod.quantity_sold==0){
                    htmls=
                            `
                                <div id="id-b4etd" class="b4etd">
                                    <a href="../page/product_detail.html" class="grid-item-link-product none-change-opacity box_shadow">
                                        <div class="bellow-grid-item-link">
                                            <div class="body-container">
                                                <div class="favorite-shop">
                                                    <div class="header-block-favorite-shop">
                                                        <span class="fvr-text">Yêu thích</span>
                                                    </div>
                                                </div>
                                                </div>
                                                <div class="product-img-body">
                                                    <img src="${products[index].body_img_url}" class="img-body" alt="">
                                                </div>
                                                <div class="product-img-footer">
                                                    <img src="${products[index].footer_img_url}" class="img-footer">    
                                                </div>
                                            </div>
                                            <div class="footer-sggtion">  
                                                <div class="description-sggtion">
                                                    <div class="descrp-txt-overflow">
                                                        <div class="dcrs0">
                                                            <div class="dcrs00">
                                                            ${products[index].title}
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
                                                        <div class="prc flex-jtfspbt">
                                                            <div class="crr-price flxC">
                                                                <div class="currenty-sggtion font-14">đ</div>
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
                                                    <div class="nbs-sggtion flex-jtfspbt">
                                                        <div class="address-shop flex">
                                                            <div class="add txt-Black-color">${products[index].shop_adress}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            `
                }
                $('.suggestion_products_ShopOnline').insertAdjacentHTML('beforeend',htmls)
            }
        })
    }

//Top Sales
    function topsales(products){
        let amount= [];
        products.forEach(prod=>{
            if(prod.quantity_sold>=400){
                amount.push(prod)
            }
        })

        var x=0; //price promotion
        for(var i =0 ; i < amount.length;++i){
            x=calculator_promotion_price(products[i]);
            if(i<6){
                if(amount[i].percent_saleoff>0){
                    htmls = 
                    `
                        <div class="b4etd">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop shopeeMall-tag">
                                            <div class="header-block-favorite-shop">
                                                <div class="fvr-text txt-UperCase">Xử lý đơn hàng bởi shopee</div>
                                            </div>
                                        </div>
                                        <div class="header-link-sale-off-container">
                                            <div class="header-block-sale-off">
                                                <span class="percent-sale-off">${amount[i].percent_saleoff}%</span>
                                                <span class="sale-text">Giảm</span>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${amount[i].body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${amount[i].footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${amount[i].title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flex-jtfspbt">
                                                    <del class="dell-price flxC color-gray mgR-8">
                                                        <div class="currenty-sggtion font075">đ</div>
                                                        <div class="price-sggtion font10">${amount[i].price}</div>
                                                    </del>
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion font-14">đ</div>
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
                                            <div class="nbs-sggtion flex-jtfspbt">
                                                <div class="rating-shop-ctn flex">
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
                                                <div>Đã bán
                                                    <span class="number-sld">${amount[i].quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${amount[i].shop_adress}</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
                }
                if(amount[i].percent_saleoff==0){
                    htmls = 
                    `
                        <div class="b4etd">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop shopeeMall-tag">
                                            <div class="header-block-favorite-shop">
                                                <div class="fvr-text txt-UperCase">Xử lý đơn hàng bởi shopee</div>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${amount[i].body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${amount[i].footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${amount[i].title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flex-jtfspbt">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion font-14">đ</div>
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
                                            <div class="nbs-sggtion flex-jtfspbt">
                                                <div class="rating-shop-ctn flex">
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
                                                <div>Đã bán
                                                    <span class="number-sld">${amount[i].quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${amount[i].shop_adress}</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
                }
                if(amount[i].freeship==false){
                    htmls = 
                    `
                        <div class="b4etd">
                            <a href="#" class="grid-item-link-product box_shadow">
                                <div class="bellow-grid-item-link">
                                    <div class="body-container">
                                        <div class="favorite-shop shopeeMall-tag">
                                            <div class="header-block-favorite-shop">
                                                <div class="fvr-text txt-UperCase">Xử lý đơn hàng bởi shopee</div>
                                            </div>
                                        </div>
                                        <div class="product-img-body">
                                            <img src="${amount[i].body_img_url}" class="img-body" alt="">
                                        </div>
                                        <div class="product-img-footer">
                                            <img src="${amount[i].footer_img_url}" class="img-footer">    
                                        </div>
                                    </div>
                                    <div class="footer-sggtion">  
                                        <div class="description-sggtion">
                                            <div class="descrp-txt-overflow">
                                                <div class="dcrs0">
                                                    <div class="dcrs00">${amount[i].title}</div>
                                                </div>
                                            </div>
                                        </div>          
                                        <div class="ft-sggtion-block ">
                                            <div class="price-block mgTB-8 flex-jtfspbt">
                                                <div class="prc flex-jtfspbt">
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion font-14">đ</div>
                                                        <div class="price-sggtion">${x}</div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="nbs-sggtion flex-jtfspbt">
                                                <div class="rating-shop-ctn flex">
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
                                                <div>Đã bán
                                                    <span class="number-sld">${amount[i].quantity_sold}</span>
                                                </div>
                                            </div>
                                            <div class="address-shop mgT16">
                                                <div class="add txt-Black-color">${amount[i].shop_adress}</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `
                }
                $('#top_sales').insertAdjacentHTML('beforeend',htmls)
            }
        }
    }
