$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);
import {render_products} from './condition_render_products.js'
import { totalPages, pagination } from './paging.js';
import {getWidth_promotion_code,moveArrowInCatagories, filter, sortFollowBtn, sortFollowPrice} from "./handleEventShopOnline.js"
import {render_info_shop_online } from './shop_information.js';
import { renderHeaderNav } from './header.js';
import {keysearch} from "./keyword_search.js"
// import { responsive_shop_page } from './responsive.js';
// change position for check-icon when click on each element namethod name
    // js for change the key of search Method
    var get_Value_input  = $('.shopOnline-nav-search-ctn .shopOnline-inputCTN input')
    var getName = $('.shopOnline-nav-search-ctn .search_inshop .above .which-shop');
    var getNameMethod = $$('.shopOnline-nav-search-ctn .search_inshop .bellow-search_inshop .cekTXT')
    var checkBtn = $('.check-btn');
//bannner var
    const next_circle = $$('.list-next-circle-animation')
    var current_index =0;
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
// Call API uses FETCH
    let htmls;
    fetch('../data/product.json')
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        renderHeaderNav();
        catagories(data.products_inshop);
        renderPromotionItem(data.shop_promotion_codes)
        check(data.shop_promotion_codes)
        suggestion_products_ShopOnline(data.products_inshop)
        banner(data.banner_shop_online)
        topsales(data.products_inshop)
        allproducts_inshop(data.products_inshop);
        render_info_shop_online(data.shop_onlines);
        if(window.innerWidth >= 1280){
            keysearch(data.key_search)
        }
    })
    
//Catagories in shop
   let catas = new Array;
   function check_lengthCatagories(catagories){
       catagories = catas.length;
       if(catagories>4){
           return true;
       }
       else{
           return false;
       }
   }
   function catagories(catagories){
       catagories.forEach(cata=>{
           if(!catas.includes(cata.catagories_inshop.toLowerCase())){
               catas.push(cata.catagories_inshop.toLowerCase())
           }
       })
       if(check_lengthCatagories(catas)){
           $('.show-more-ctn').style.display = "block";
           catas.forEach((cata,index)=>{
               if(index<4){
                   htmls = `
                       <a href="#all-products" class="ctPRD flex none-change-opacity txt-Black-color" data-catagory ="${cata.toLowerCase()}">
                           <div class="txt-Capitalize">${cata}</div>
                       </a>
                   `
                   $('.ctalist').insertAdjacentHTML('beforeend',htmls)
               }
               if(index>=4){
                  
                   htmls = `
                       <a href="#all-products" class="ctPRD font16 none-change-opacity txt-Black-color" data-catagory ="${cata.toLowerCase()}">
                           <div class="txt-Capitalize">${cata}</div>
                       </a>
                   `
                   $('.choose-prd').insertAdjacentHTML('beforeend',htmls)
 
               }
           })
       }
       if(!check_lengthCatagories(catas)){
               $('.show-more-ctn').style.display = "block";
               catas.forEach(cata=>{
                   htmls = `
                       <a href="" class="ctPRD flex none-change-opacity txt-Black-color">
                           <div class="txt-UperCase">${cata}</div>
                       </a>
                   `
               })
       }
 
       //render catagories in sort side
       catas.forEach(fil=>{
           htmls =
           `
               <div class="shTxt flxC mgTB-8 none-change-opacity font600">
                   <div class="txt-Capitalize h4txt" data-catagories-inshop="${fil.toLowerCase()}">${fil}</div>
               </div>
           `
           $('#shTxt-group').insertAdjacentHTML('beforeend',htmls)
       })
       const h4txts = $$('.h4txt');
       h4txts.forEach(h4txt=>{
           h4txt.onclick = ()=>{
               moveArrowInCatagories(h4txt)
           }
       })
   }
 
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
                               <div class="PMTcode margin-tb16 flx id-${promot.id_code}">
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
                               <div class="PMTcode margin-tb16 flx id-${promot.id_code}">
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
                               <div class="PMTcode margin-tb16 flx id-${promot.id_code}">
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
                   if(count_click*2+1==PMTcode.length){
                       $('.right-arr').style.display = "none"
                   }
                   if((count_click+1)*2==PMTcode.length){
                       $('.right-arr').style.display = "none"
                   }
               }
               $('.CDpmt-wrapper').scrollLeft += getWidth_promotion_code(ptmcode);
           }
           $('.left-arr').onclick =()=>{
               count_click--;
               if(count_click>0){
                   $('.right-arr').style.display ='block'
               }
               if(count_click<=0){
                   $('.left-arr').style.display ="none";
               }
               $('.CDpmt-wrapper').scrollLeft -= getWidth_promotion_code(ptmcode);
           }
       })
   }
 
//Suggesstion
   function suggestion_products_ShopOnline(products){
       var x=0;
       products.forEach((prod,index)=>{
           if(index<6){
               const result  = render_products(prod);
               $('.suggestion_products_ShopOnline').insertAdjacentHTML('beforeend',result);
           }
       })
   }
//Banner shop online
   //display img banner
   function banner(banners){
       banners.forEach(banner=>{
           htmls =
           `
               <li class="list-item-shopSld">
                   <a href="${banner.banner_link}" class="lIt-link none-padding none-change-opacity">
                       <div class="lIt-item-BGR">
                           <div>
                               <img  class="LIRqnE _1KQ1MG" style="object-fit:cover" src="${banner.banner_img_link}">
                           </div>
                       </div>
                   </a>
               </li>
           `
           $('.ul-list-shopSld').insertAdjacentHTML('beforeend',htmls);
       })
       ///////////////hanndle slide banner
       const imgs=$$('.list-item-shopSld');
        ///////////auto show slide
        autoshow();
        function autoshow(){
            let i;
            for(i=0;i<imgs.length;++i){
                imgs[i].style.display ='none'
            }
            current_index++;
            if(current_index>imgs.length){
                current_index = 1;
            }
            for(i =0; i<next_circle.length;++i){
                next_circle[i].classList.remove('active')
            }
            imgs[current_index-1].style.display ='block'
            next_circle[current_index-1].classList.add('active')
            setTimeout(autoshow,3000);
        }
        //////////handle click button
        function currentSlide(n){
            show(current_index=n);
        }
        function plusSlide(n){
            show(current_index+=n);
        }
        show(current_index)
        function show(n){
            let i;
            if(n>imgs.length){
                current_index = 1;
            }
            if(n<1){
                current_index=imgs.length;
            }
            for(i =0;i<imgs.length ;++i){
                imgs[i].style.display ='none';
            }
            for( i =0; i<next_circle.length;++i){
                next_circle[i].classList.remove('active')
            }
            imgs[current_index-1].style.display = 'block'
            next_circle[current_index-1].classList.add('active')
        }
        //handle click circle
        next_circle.forEach((dot,index)=>{
            dot.onclick= ()=>{
                currentSlide(index+1)
            }
        })
        //handle click next-prev-btn
        $('.left-btn').onclick = ()=>{
            plusSlide(-1);
        }
        $('.right-btn').onclick = ()=>{
            plusSlide(1)
        }
   }  
//Top Sales
   function topsales(products){
       let amount= new Array;
       products.forEach(prod=>{
           if(prod.quantity_sold>=500){
               amount.push(prod)
           }
       })
       for(var i =0 ; i < 6;++i){
          const result = render_products(amount[i]);
           $('#top_sales').insertAdjacentHTML('beforeend',result);
       }
   }
//ALL Products
function allproducts_inshop(products){
    pagination(products);
    filter(products);
    sortFollowBtn(products);
    sortFollowPrice(products);
}

