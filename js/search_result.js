$ = document.querySelector.bind(document);
const top_list_data_search  = $('.top-list-data-search')
fetch("../data/product.json")
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        render_Search_FollowData(data.key_search)
    })
function render_Search_FollowData(keys){
    keys.forEach(key => {
        const htmls = 
            `
                <li class="name-products">
                    <a href="../page/sortResultSearching.html" target="_self" class="link-product">${key.key_product}</a>
                </li>
            `
        top_list_data_search.insertAdjacentHTML("beforeend",htmls)
    });
}