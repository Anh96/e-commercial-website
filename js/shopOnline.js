$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);
import { renderProduct_RelativeShopPage } from "./product.js";
import { renderPromotionItem } from "./promotionCODE.js";
// change position for check-icon when click on each element nmethod name
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

// Promotion CODE
const promotion_nextBtn = $('.left-arr')
const promotion_item = $$('.PMTcode');
console.log(promotion_item)
