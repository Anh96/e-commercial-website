
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
    //get text content
    // Filter Products Follow Catagories
    export function getTextContent(ctPRDs){
        ctPRDs.forEach((cata,index)=>{
            if(index!= 0 && index !=1){
                    cata.onclick = ()=>{
                    return cata.innerText.toLowerCase();
                }
            }
        })
    }
//Filter products follow keyword of catagories
    export function filter_products(){
        const ctPRDs =  $$('.ctPRD'),products = $$('#sort_result_search');
        let result, text;
        for(let i=2;i<ctPRDs.length;i++){
            ctPRDs[i].onclick =()=>{
                // console.log(ctPRDs[i].getAttribute("data-catagory"));
                text = ctPRDs[i].getAttribute("data-catagory");
                for(let j =0;j<products.length;j++){
                    //console.log(products[j].getAttribute("data-catagories-inshop"))
                    if(products[j].getAttribute("data-catagories-inshop")== text){
                        //console.log(products[j].getAttribute("data-catagories-inshop"))
                        products[j].style.display = "block";
                    }
                    else{
                        products[j].style.display = "none"
                    }
                }
            }
        }
        
    }
//Promotion Code
    export function getWidth_promotion_code(promotion){
        const getWidth = promotion.getBoundingClientRect().width;
        return getWidth;
    }
// Suggestion
    export let calculator_promotion_price = (products)=>{
        return products.price - (products.price *products.percent_saleoff/100);
    }