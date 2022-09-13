$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);
import { renderPromotionItem } from "./promotionCODE.js";
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

//suggestion products shop online
let htmls;
fetch('../data/product.json')
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        suggestion_products_ShopOnline(data.products)
    })
function suggestion_products_ShopOnline(products){
    products.forEach((prod,index)=>{
        if(index<4){
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
                                        <div id="percent_promotion" style="display:none">
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
                                                        <div class="price-sggtion font10 mgR-8">đ ${products[index].price_promotion}</div>
                                                    </del>
                                                    <div class="crr-price flxC">
                                                        <div class="currenty-sggtion font-14">đ</div>
                                                        <div class="price-sggtion">${products[index].price}</div>
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
            $('.suggestion_products_ShopOnline').insertAdjacentHTML('beforeend',htmls)
            percent_promotion(prod)
        }
    })
}
function percent_promotion(product){
    if(product.percent_saleoff>0){
        $('#percent_promotion').style.display ="block"
    }
    if(product.percent_saleoff==0){
        $('#percent_promotion').style.display ="none"
        
    }
}
