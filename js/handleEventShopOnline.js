
    export function moveArrCatagories(h4txts){
        h4txts.forEach(item=>{
            item.onclick = ()=>{
                $('.icx').style.height = item.offsetHeight + 'px';
                $('.icx').style.top = item.offsetTop + 'px';
                $('.h4txt.prd-active').classList.remove('prd-active');
                item.classList.add('prd-active');
            }
        })
    }
// Catagories in shop

//Promotion Code
    export function getWidth_promotion_code(promotion){
        const getWidth = promotion.getBoundingClientRect().width;
        return getWidth;
    }
// Suggestion
    export let calculator_promotion_price = (products)=>{
        return products.price - (products.price *products.percent_saleoff/100);
    }