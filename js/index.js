// import {start} from "./product.js";
import {renderProduct_Relative_HomePage} from "./product.js"
import {handleProducts} from "./product.js"
$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);   
// handle box search
const get_input_value = $('.header-home input');
const get_headingTXT_agency = $('.agency-saleOff span');
const agency = $('.agency-saleOff')
const search_Shop = $('.search-shop-inShopee')

// handlde search history
get_input_value.placeholder= get_headingTXT_agency.innerText;
get_input_value.onkeydown = function(){
    agency.style.display = 'none'
    search_Shop.style.display ='block'
}
// Handlde Catagories
    // Get variable Catagories
    const sectionContainer = $('.section-grid-layout-container')
    const listItemSection = $$('.list-item-section')
    const leftArrowBtn = $('.left-arr')
    const rightArrowBtn = $('.right-arr')

    rightArrowBtn.onclick = function(){
        sectionContainer.style.transform = 'translateX(-360px)'
        leftArrowBtn.style.display ='block'
        this.style.display ='none'
    }
    leftArrowBtn.onclick = function(){
        sectionContainer.style.transform = 'translateX(0px)'
        rightArrowBtn.style.display ='block'
        this.style.display ='none'
    }

    // Method 2
    /*listItemSection.forEach((item,index)=>{
        rightArrowBtn.onclick = ()=>{
            let x = item.getBoundingClientRect();
            let y = x.width +'px';
            item.style.scrollLeft += y
        }
    })*/
// Handle Flash sale
const gridContainerFlashSale = $('.grid-containter-flash-sale')
const gridItemProduct = $$('#item_Flash_sale')
const flash_leftArrow = $('.leftArr_flashSale')
const flash_rightArrow = $('.rightArr_flashSale')
let clickCounter =0;
let l=0;
flash_rightArrow.onclick = function(){
    l++;
    for(var i of gridItemProduct){
        if(l==0){
            i.style.left = '0px'
        }
        if(l==1){
            i.style.left = '-1000px'
            flash_leftArrow.style.display = 'block'
            
        }
        if(l==2){
            i.style.left = '-2000px'
            flash_rightArrow.style.display ='none'
        }
        if(l>2){l=2}
    }
}
flash_leftArrow.onclick = function(){
    l--;
    for(var i of gridItemProduct){
        if(l==0){
            i.style.left = '0px'
            flash_leftArrow.style.display= 'none'
            flash_rightArrow.style.display = 'block'
        }
        if(l==1){
            i.style.left = '-1000px'
            
        }
        if(l<0){l=0}
    }
}
/*flash_rightArrow.onclick = function(){
    x+=6;
    clickCounter++;
    if(x <= gridItemProduct.length){
        var i;
        for( i=0; i< x-1;i++){
            gridItemProduct[i].style.display = 'none';
            flash_leftArrow.style.display ='block';
        }
        if(clickCounter>2){
            flash_rightArrow.style.display ='none'
        }
        console.log('next' + ' ' + x+ " " + 'next click' +' '+clickCounter)
    }
}*/

// SHOPEE MALL
    // Shopee Mall Slider
    const prev_shopeeMall = $('.left-shopeeMall');
    const next_shopeeMall = $('.right-shopeeMall');
    const spM_sliders = $$('.slide-item-spM');
    const nextCircleShopeeMall = $$('.dotShopeeMall')
    let indexSlideShopeeMall = 0;
    // autoshow slide 
    autoshowSlideShopeeMall()
    function autoshowSlideShopeeMall(){
        let i ;
        for(i=0;i<spM_sliders.length;++i){
            spM_sliders[i].style.display = 'none';
        }
        for(i =0;i<nextCircleShopeeMall.length;++i){
            nextCircleShopeeMall[i].classList.remove('active');
        }
        indexSlideShopeeMall++;
        if(indexSlideShopeeMall>spM_sliders.length){
            indexSlideShopeeMall =1;
        }
        spM_sliders[indexSlideShopeeMall-1].style.display = 'block';
        nextCircleShopeeMall[indexSlideShopeeMall-1].classList.add('active')
        setTimeout(autoshowSlideShopeeMall,4000)
    }
    // handle when press button arrow
    function plusSlideShopeeMall(n){
        showSlideShopeeMall(indexSlideShopeeMall+=n);
    }
    function currentSlideShopeeMall(n){
        showSlideShopeeMall(indexSlideShopeeMall =n)
    }
    showSlideShopeeMall(indexSlideShopeeMall);
    function showSlideShopeeMall(n){
        let i;
        if(n>spM_sliders.length){
            indexSlideShopeeMall = 1;
        }
        if(n<1){
            indexSlideShopeeMall=spM_sliders.length;
        }
        for(i =0;i<spM_sliders.length ;++i){
            spM_sliders[i].style.display ='none';
        }
        for( i =0; i<nextCircleShopeeMall.length;++i){
            nextCircleShopeeMall[i].classList.remove('active')
        }
        spM_sliders[indexSlideShopeeMall-1].style.display = 'block'
        nextCircleShopeeMall[indexSlideShopeeMall-1].classList.add('active')
    }
    prev_shopeeMall.onclick = function(){
        plusSlideShopeeMall(-1);
    }
    next_shopeeMall.onclick =function(){

        plusSlideShopeeMall(1)
    }

    // handle product slider
    let click_shopeeMall =0;
    const shopeeMallproductList = $('.spM-product-list')
    const next__SPM_productBtn = $('.rightArr_shopeeMallProduct')
    const prev__SPM_productBtn = $('.leftArr_shopeeMallProduct')
    next__SPM_productBtn.onclick = ()=>{
        click_shopeeMall++;
        if(click_shopeeMall==0){
            shopeeMallproductList.style.transform= 'translateX(0px)'
        }
        if(click_shopeeMall==1){
            shopeeMallproductList.style.transform= 'translateX(-907px)'
            prev__SPM_productBtn.style.display = 'block'
            next__SPM_productBtn.style.display = 'none'
        }
    }
    prev__SPM_productBtn.onclick = ()=>{
        click_shopeeMall--;
        if(click_shopeeMall==0){
            shopeeMallproductList.style.transform= 'translateX(0px)'
            prev__SPM_productBtn.style.display = 'none'
            next__SPM_productBtn.style.display = 'block'
        }
        if(click_shopeeMall==1){
            shopeeMallproductList.style.transform= 'translateX(907px)'
        }
    }

// HANDLE TOP SEARCH
const next_topSearch = $('.nextBtn_topSearch')
const prev_topSearch = $('.prevBtn_topSearch')
const topSearch_productCTN = $('.top-search-wrapper')
let click_TopSearch = 0;
console.log()
next_topSearch.onclick = ()=>{
    click_TopSearch++;
    if(click_TopSearch==1){
        topSearch_productCTN.style.transform = 'translateX(-1000px)'
        prev_topSearch.style.display = 'block'
        next_topSearch.style.display = 'none'
    }
}
prev_topSearch.onclick = ()=>{
    click_TopSearch--;
    if(click_TopSearch ==0){
        topSearch_productCTN.style.transform = 'translateX(0px)'
        next_topSearch.style.display = 'block'
        prev_topSearch.style.display = 'none'
    }
    if(click_TopSearch==1){
        topSearch_productCTN.style.transform = 'translateX(1000px)'
    }
}
