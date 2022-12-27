export function keysearch(keys){
    if(window.innerWidth >= 1280){
        keys.forEach(key=>{
            let htmls = `
                 <li class="name-products">
                     <a href="../page/sortResultSearching.html" target="_self" class="link-product">${key.key_product}</a>
                 </li>
             `
             $('.top-list-data-search').innerHTML += htmls;
         })
    }
}