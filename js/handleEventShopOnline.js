 let htmls, results;
    export function moveIconArrCatagories(h4txts){
        h4txts.forEach(item=>{
            item.onclick = ()=>{
                $('.icx').style.height = item.offsetHeight + 'px';
                $('.icx').style.top = item.offsetTop + 'px';
                $('.h4txt.prd-active').classList.remove('prd-active');
                item.classList.add('prd-active');
            }
        })
    }
    export function moveArrowInCatagories(h4txt){
        $('.icx').style.height = h4txt.offsetHeight + 'px';
        $('.icx').style.top = h4txt.offsetTop + 'px';
        $(".h4txt.prd-active").classList.remove("prd-active");
        h4txt.classList.add('prd-active');
    }
// Catagories in shop
    //Filter products follow keyword of catagories
    export function filter_products(){
        const ctPRDs =  $$('.ctPRD'),h4txts=$$('.h4txt'),products = $$('#sort_result_search');
        let text, index;
        //handle header catagories
        for(let i=1;i<ctPRDs.length;i++){
            ctPRDs[i].onclick =()=>{
                if(i!=1)
                    index = i-1;
                    text = ctPRDs[i].getAttribute("data-catagory");
                    for(let j =0;j<products.length;j++){
                        if(products[j].getAttribute("data-catagories-inshop") == text){
                            products[j].style.display = "block";
                        }
                        else{
                            products[j].style.display = "none"
                        }
                    }
                if(i==1){
                    index =0;
                    for(let prod of products){
                        prod.style.display = "block"
                    }
                }
                moveArrowInCatagories(h4txts[index])
            }
        }
        ///handle sort-result catagories in shop
        for(let i =0; i<h4txts.length;++i){
            h4txts[i].onclick = ()=>{
                moveArrowInCatagories(h4txts[i])
                if(i!=0){
                    for(let j =0; j<products.length;++j){
                        if(products[j].getAttribute("data-catagories-inshop")==h4txts[i].getAttribute("data-catagories-inshop")){
                            products[j].style.display = "block";
                        }
                        else{
                            products[j].style.display = "none";
                        }
                    }
                }
                if(i==0){
                    for(let prod of products){
                        prod.style.display = "block"
                    }
                }
            }
        }
    }
    //handle animation 
//Promotion Code
    export function getWidth_promotion_code(promotion){
        const getWidth = promotion.getBoundingClientRect().width;
        return getWidth;
    }
// Suggestion
    export let calculator_promotion_price = (products)=>{
        return products.price - (products.price *products.percent_saleoff/100);
    }
// All Products
    // Check available products
    function quantity_availableProducts(products){
        products.filter(prod=>prod.quantity_available>0)
    }
    // Sort follow keyword of bl1Sb-btn button clicked;
    export function sort_quantitySold(products){
        let temp;
        for(let x= 0; x<products.length;++x){
            for(let y= x+1;y<products.length;++y){
                if(products[x].quantity_sold < products[y].quantity_sold){
                    temp = products[x]
                    products[x]= products[y];
                    products[y] = temp;
                }
            }
        }
        return products;
    }
    import {render_products} from "./shopPage.js";
    export function sortFollowBtn(products){
        const btns = $$('.bl1Sb-btn');
        btns.forEach((btn,i)=>{
            btn.onclick = ()=>{
                if(i<=2){
                    $('.bl1Sb-btn.active').classList.remove('active');
                    btn.classList.add('active');
                    if(i==0){
                        htmls = $$('#sort_result_search');
                        htmls.forEach(html=>{
                            html.style.display = "block";
                        })
                    }
                    if(i==2){
                        sort_quantitySold(products)
                        htmls = $$('#sort_result_search');
                        htmls.forEach(html=>{
                            html.style.display = "none";
                        })
                        products.forEach(prod=>{
                            render_products(prod)
                        })
                        
                    }
                }
            }
        })
    }
