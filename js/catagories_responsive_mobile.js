$ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let htmls;
import {catagories_res_mobile, counting_frequencies_item_catagories_inshop} from "./condition_render_data.js";
import {render_info_shop_online} from "./shop_information.js"
const arr = [10,3, 1 ,1, 4,3, 10, 10]
fetch("../data/data.json")
    .then(res=> {
        return res.json()
    })
    .then(data=>{
        render_info_shop_online(data.shop_onlines)
        catagories_res_mobile(data.products_inshop);
    })