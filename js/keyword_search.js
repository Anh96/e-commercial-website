export function keysearch(keys){
    keys.forEach(key=>{
        let htmls = `
             <li class="name-products">
                 <a href="../page/sortResultSearching.html" target="_self" class="link-product change-opacity">${key.key_product}</a>
             </li>
         `
         document.querySelector('.top-list-data-search').innerHTML += htmls;
     });
}
