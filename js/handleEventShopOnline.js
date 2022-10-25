let htmls, clickAmount=0;
const h4txts=$$('.h4txt');
export const btns = $$('.bl1Sb-btn');
const conditions_sort_links = $$(".hv-prcx a");
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
  
   // Sort follow keyword of bl1Sb-btn button clicked;
   //function sort
   // descending sort
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
   export function sort_AscendingPriceSold(products){
       products.sort(function(a,b){
           //return (a.price - (a.price * a.percent_saleoff/100)) - (b.price - (b.price * b.percent_saleoff/100));
           return calculator_promotion_price(a) - calculator_promotion_price(b);
       })
   }
   export function sort_DescendingPriceSold(products){
       products.sort(function(a,b){
           //return (b.price - (b.price * b.percent_saleoff/100)) - (a.price - (a.price * a.percent_saleoff/100));
           return calculator_promotion_price(b) - calculator_promotion_price(a);
       })
   }
   import {render_products} from "./condition_render_products.js";
   // Catagories in shop
       //Filter products follow keyword of catagories
       export function filter(products){
           const ctPRDs =  $$('.ctPRD'),h4txts=$$('.h4txt');
           const newArrayProducts = new Array;
           products.map(prod=>{
               return newArrayProducts.push(prod);
           })
           const newArrayAscendingSort = new Array;
           products.map(prod=>{
               return newArrayAscendingSort.push(prod);
           })
           const newArrayDescendingSort = new Array;
           products.map(prod=>{
               return newArrayDescendingSort.push(prod);
           })
           let index;
           //handle ctPRDs are clicked (Header Catagories)
           for(let i=1;i<ctPRDs.length;i++){
               sort_quantitySold(newArrayProducts);
               ctPRDs[i].onclick =()=>{
                   moveArrowInCatagories(h4txts[i]);
                   btns[0].classList.add('active');
                   btns.forEach((btn,ind)=>{
                       if(ind!=0){
                           btn.classList.remove('active')
                       }
                   })
                   if(i!=1){
                       index = i-1;
                       htmls = products.map(prod=>{
                           if(ctPRDs[i].getAttribute("data-catagory") == prod.catagories_inshop.toLowerCase()){
                               return render_products(prod);
                           }
                       })
                       $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                       //sort follow pressing btns
                       btns.forEach((btn,ind)=>{
                           btn.onclick = ()=>{
                               if(ind==0){
                                   btn.classList.add('active');
                                   btns.forEach((btn,ind)=>{
                                       if(ind!=0){
                                           btn.classList.remove('active');
                                       }
                                   })
                                   htmls = products.map(prod=>{
                                       if(ctPRDs[i].getAttribute("data-catagory") == prod.catagories_inshop.toLowerCase()){
                                           return render_products(prod);
                                       }
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                               }
                               if(ind==1){
                                   btn.classList.add('active');
                                   btns.forEach((btn,ind)=>{
                                       if(ind!=1){
                                           btn.classList.remove('active');
                                       }
                                   })
                               }
                               if(ind==2){
                                   btns[2].classList.add('active');
                                   btns.forEach((btn,ind)=>{
                                       if(ind!=2){
                                           btn.classList.remove('active');
                                       }
                                   })
                                   htmls = newArrayProducts.map(prod=>{
                                       if(ctPRDs[i].getAttribute("data-catagory") == prod.catagories_inshop.toLowerCase()){
                                           return render_products(prod);
                                       }
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                               }
                           }
                       })
                       //sort low-hight & reverse
                       conditions_sort_links.forEach((link,ind)=>{
                           link.onclick = ()=>{
                               if(ind ==0){
                                   sort_AscendingPriceSold(newArrayAscendingSort);
                                   htmls = newArrayAscendingSort.map(prod=>{
                                       if(ctPRDs[i].getAttribute("data-catagory") == prod.catagories_inshop.toLowerCase()){
                                           return render_products(prod);
                                       }
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                               if(ind == 1){
                                   sort_DescendingPriceSold(newArrayDescendingSort);
                                   htmls = newArrayDescendingSort.map(prod=>{
                                       if(ctPRDs[i].getAttribute("data-catagory") == prod.catagories_inshop.toLowerCase()){
                                           return render_products(prod);
                                       }
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                           }
                       })
                   }
                   if(i==1){
                       index = 0;
                       htmls = products.map(prod=>{
                           return render_products(prod)
                       })
                       $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                       //sort follow pressing btns
                       btns.forEach((btn,ind)=>{
                           btn.onclick = ()=>{
                               if(ind==0){
                                   btn.classList.add('active');
                                   btns.forEach((btn,ind)=>{
                                       if(ind!=0){
                                           btn.classList.remove('active');
                                       }
                                   })
                                   htmls = products.map(prod=>{
                                      return render_products(prod)
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                               }
                               if(ind==1){
                                   btn.classList.add('active');
                                   btns.forEach((btn,ind)=>{
                                       if(ind!=1){
                                           btn.classList.remove('active');
                                       }
                                   })
                               }
                               if(ind==2){
                                   btns[2].classList.add('active');
                                   btns.forEach((btn,ind)=>{
                                       if(ind!=2){
                                           btn.classList.remove('active');
                                       }
                                   })
                                   htmls = newArrayProducts.map(prod=>{
                                       return render_products(prod)
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                               }
                           }
                       })
                       //sort low-hight & reverse
                       conditions_sort_links.forEach((link,ind)=>{
                           link.onclick = ()=>{
                               if(ind ==0){
                                   sort_AscendingPriceSold(newArrayAscendingSort);
                                   htmls = newArrayAscendingSort.map(prod=>{
                                       return render_products(prod);
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                               if(ind == 1){
                                   sort_DescendingPriceSold(newArrayDescendingSort);
                                   htmls = newArrayDescendingSort.map(prod=>{
                                       return render_products(prod)
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                           }
                       })
                   }
                   moveArrowInCatagories(h4txts[index]);
               }
           }
           ///handle h4txts are clicked (left side of body Catagories)
           for(let i =0; i<h4txts.length;++i){
               sort_quantitySold(newArrayProducts);
               h4txts[i].onclick = ()=>{
                   moveArrowInCatagories(h4txts[i]);
                   btns[0].classList.add('active');
                   btns.forEach((btn,index_btn)=>{
                       if(index_btn!=0){
                           btn.classList.remove('active')
                       }
                   })
                   if(i!=0){
                       btns[0].classList.add('active');
                       btns.forEach((btn,index_btn)=>{
                           if(index_btn!=0){
                               btn.classList.remove('active')
                           }
                       })
                       htmls = products.map(prod=>{
                           if(h4txts[i].getAttribute("data-catagories-inshop") == prod.catagories_inshop.toLowerCase()){
                               return render_products(prod);
                           }
                       })
                       $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                       //sort follow pressing btns
                       btns.forEach((btn,index_btn)=>{
                           btn.onclick = ()=>{
                               if(index_btn==0){
                                   btn.classList.add('active');
                                   btns.forEach((btn,index_btn)=>{
                                       if(index_btn!=0){
                                           btn.classList.remove('active');
                                       }
                                   })
                                   htmls = products.map(prod=>{
                                       if(h4txts[i].getAttribute("data-catagories-inshop") == prod.catagories_inshop.toLowerCase()){
                                           return render_products(prod);
                                       }
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                               if(index_btn==1){
                                   btn.classList.add('active');
                                   btns.forEach((btn,index_btn)=>{
                                       if(index_btn!=1){
                                           btn.classList.remove('active');
                                       }
                                   })
                               }
                               if(index_btn==2){
                                   btns[2].classList.add('active');
                                   btns.forEach((btn,index_btn)=>{
                                       if(index_btn!=2){
                                           btn.classList.remove('active');
                                       }
                                   })
                                   htmls = newArrayProducts.map(prod=>{
                                       if(h4txts[i].getAttribute("data-catagories-inshop") == prod.catagories_inshop.toLowerCase()){
                                           return render_products(prod);
                                       }
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                           }
                       })
                       //sort low-hight & reverse
                       conditions_sort_links.forEach((link,ind)=>{
                           link.onclick = ()=>{
                               if(ind ==0){
                                   sort_AscendingPriceSold(newArrayAscendingSort);
                                   htmls = newArrayAscendingSort.map(prod=>{
                                       if(h4txts[i].getAttribute("data-catagories-inshop") == prod.catagories_inshop.toLowerCase()){
                                           return render_products(prod);
                                       }
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                               if(ind == 1){
                                   sort_DescendingPriceSold(newArrayDescendingSort);
                                   htmls = newArrayDescendingSort.map(prod=>{
                                       if(h4txts[i].getAttribute("data-catagories-inshop") == prod.catagories_inshop.toLowerCase()){
                                           return render_products(prod);
                                       }
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                           }
                       })
                   }
                   if(i==0){
                       btns[0].classList.add('active');
                       btns.forEach((btn,index_btn)=>{
                           if(index_btn!=0){
                               btn.classList.remove('active')
                           }
                       })
                       htmls = products.map(prod =>{
                           return render_products(prod);
                       })
                       $('#tdsgtion-relative-product').innerHTML = htmls.join('');
                       //sort follow pressing btns
                       btns.forEach((btn,index_btn)=>{
                           btn.onclick = ()=>{
                               if(index_btn==0){
                                   btn.classList.add('active');
                                   btns.forEach((btn,index_btn)=>{
                                       if(index_btn!=0){
                                           btn.classList.remove('active');
                                       }
                                   })
                                   htmls = products.map(prod=>{
                                       return render_products(prod)
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                               if(index_btn==1){
                                   btn.classList.add('active');
                                   btns.forEach((btn,index_btn)=>{
                                       if(index_btn!=1){
                                           btn.classList.remove('active');
                                       }
                                   })
                               }
                               if(index_btn==2){
                                   btns[2].classList.add('active');
                                   btns.forEach((btn,index_btn)=>{
                                       if(index_btn!=2){
                                           btn.classList.remove('active');
                                       }
                                   })
                                   //sort_quantitySold(products);
                                   htmls = newArrayProducts.map(prod=>{
                                       return render_products(prod)
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                           }
                       })
                       //sort low-hight & reverse
                       conditions_sort_links.forEach((link,ind)=>{
                           link.onclick = ()=>{
                               if(ind ==0){
                                   sort_AscendingPriceSold(newArrayAscendingSort);
                                   htmls = newArrayAscendingSort.map(prod=>{
                                       return render_products(prod);
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                               if(ind == 1){
                                   sort_DescendingPriceSold(newArrayDescendingSort);
                                   htmls = newArrayDescendingSort.map(prod=>{
                                       return render_products(prod)
                                   })
                                   $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                               }
                           }
                       })
                   }
               }
           }
       }
       export function sortFollowBtn(products){
           btns.forEach((btn,i)=>{
               btn.onclick = ()=>{
                   if(i<=2){
                       $('.bl1Sb-btn.active').classList.remove('active');
                       btn.classList.add('active');
                       //console.log(getValue(btn));
                       if(i==0){
                           htmls = products.map(prod=>{
                               return render_products(prod);
                           })
                           $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                       }
                       if(i==2){
                           clickAmount++;
                           const products2 = new Array;
                           products.map(prod=>{
                               products2.push(prod);
                           })
                           sort_quantitySold(products2);
                           htmls = products2.map(prod=>{
                               return render_products(prod);
                           })
                           $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                       }
                   }
               }
           })
       }
       export function sortFollowPrice(products){
           const newArrayAscendingSort = new Array;
           products.map(prod=>{
               return newArrayAscendingSort.push(prod);
           })
           const newArrayDescendingSort = new Array;
           products.map(prod=>{
               return newArrayDescendingSort.push(prod);
           })
           conditions_sort_links.forEach((link,ind)=>{
               link.onclick = ()=>{
                   if(ind ==0){
                       sort_AscendingPriceSold(newArrayAscendingSort);
                       htmls = newArrayAscendingSort.map(prod=>{
                           return render_products(prod);
                       })
                       $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                   }
                   if(ind == 1){
                       sort_DescendingPriceSold(newArrayDescendingSort);
                       htmls = newArrayDescendingSort.map(prod=>{
                           return render_products(prod);
                       })
                       $('#tdsgtion-relative-product').innerHTML = htmls.join('')
                   }
               }
           })
       }
 
 // Pagnition
 export function pagnition(){
     
 }
 
