 let htmls, results;
 const h4txts=$$('.h4txt');
 export const btns = $$('.bl1Sb-btn');
export function moveArrowInCatagories(h4txt){
    $('.icx').style.height = h4txt.offsetHeight + 'px';
    $('.icx').style.top = h4txt.offsetTop + 'px';
    $(".h4txt.prd-active").classList.remove("prd-active");
    h4txt.classList.add('prd-active');
} 
export function setValue(){
    const ctPRDs =  $$('.ctPRD');
    ctPRDs.forEach((ctPRD,index)=>{
        ctPRD.setAttribute("data-id",index);
    })
    h4txts.forEach((h4txt,curr)=>{
        if(curr==0){
            h4txt.classList.add('prd-active')
        }
    })
    btns.forEach((btn,currBtn)=>{
        if(currBtn==0){
            btn.classList.add('active');
        }
        btn.setAttribute("data-relBtn",currBtn)
    })
}
function getValue(btn){
    if(btn.getAttribute('class').indexOf('active')> -1){
        return true;
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
// All Products
    // Check available products
    function quantity_availableProducts(products){
        products.filter(prod=>prod.quantity_available>0)
    }
    // Sort follow keyword of bl1Sb-btn button clicked;
    // ascending sort
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
    import {render_products} from "./condition_render_products.js";
    // Catagories in shop
        //Filter products follow keyword of catagories
        export function filter_products(){
            const ctPRDs =  $$('.ctPRD'),h4txts=$$('.h4txt'),products = $$('#tdsgtion-relative-product #sort_result_search');
            let text, index;
            //handle ctPRDs are clicked (Header Catagories)
            for(let i=1;i<ctPRDs.length;i++){
                ctPRDs[i].onclick =()=>{
                    if(i!=1){
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
                    }
                    if(i==1){
                        index =0;
                        for(let prod of products){
                            //All products are displayed
                            prod.style.display = "block";
                        }
                    }
                    moveArrowInCatagories(h4txts[index]);
                }
            }
            ///handle h4txts are clicked (left side of body Catagories)
            for(let i =0; i<h4txts.length;++i){
                h4txts[i].onclick = ()=>{
                    moveArrowInCatagories(h4txts[i]);
                    if(i!=0){
                        btns[0].classList.add('active');
                        btns.forEach((btn,index)=>{
                            if(index!=0){
                                btn.classList.remove('active')
                            }
                        })
                        for(let j =0; j<products.length;++j){
                            if(products[j].getAttribute("data-catagories-inshop")==h4txts[i].getAttribute("data-catagories-inshop")){
                                products[j].style.display = "block";
                            }
                            else{
                                products[j].style.display = "none";
                            }
                        }
                        btns.forEach((btn,index)=>{
                            btn.onclick = ()=>{
                                if(index==0){
                                    btn.classList.add('active');
                                    btns.forEach((btn,index)=>{
                                        if(index!=0){
                                            btn.classList.remove('active');
                                        }
                                    })
                                    for(let j =0; j<products.length;++j){
                                        if(products[j].getAttribute("data-catagories-inshop")==h4txts[i].getAttribute("data-catagories-inshop")){
                                            products[j].style.display = "block";
                                        }
                                        else{
                                            products[j].style.display = "none";
                                        }
                                    }
                                }
                                if(index==1){
                                    btn.classList.add('active');
                                    btns.forEach((btn,index)=>{
                                        if(index!=1){
                                            btn.classList.remove('active');
                                        }
                                    })
                                }
                                if(index==2){
                                    btns[2].classList.add('active');
                                    btns.forEach((btn,index)=>{
                                        if(index!=2){
                                            btn.classList.remove('active');
                                        }
                                    });
                                    sort_quantitySold(products)
                                    for(let j =0; j<products.length;++j){
                                        if(products[j].getAttribute("data-catagories-inshop")==h4txts[i].getAttribute("data-catagories-inshop")){
                                            products[j].style.display = "block";
                                        }
                                        else{
                                            products[j].style.display == 'none'
                                        }
                                    }
                                }
                            }
                        })
                    }
                    if(i==0){
                        for(let prod of products){
                            // All products are displayed 
                            prod.style.display = "block";
                        }
                    }
                }
            }
            //sortFollowBtn(products)
        }
        export function sortFollowBtn(products){
            btns.forEach((btn,i)=>{
                btn.onclick = ()=>{
                    if(i<=2){
                        $('.bl1Sb-btn.active').classList.remove('active');
                        btn.classList.add('active');
                        //console.log(getValue(btn));
                        if(i==0){
                            htmls = $$('#sort_result_search');
                            htmls.forEach(html=>{
                                html.style.display = "block";
                            })
                        }
                        if(i==2){
                            htmls = $$('#sort_result_search');
                            htmls.forEach(html=>{
                                html.style.display = "none";
                            })
                            sort_quantitySold(products)
                            products.forEach(prod=>{
                                htmls = render_products(prod);
                                $('#tdsgtion-relative-product').insertAdjacentHTML('beforeend',htmls);
                            })
                        }
                    }
                }
            })
        }
    // Sort follow price
   
