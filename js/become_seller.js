import {renderHeaderNav_base_desktop} from "./header.js"
import {keysearch} from "./keyword_search.js";
import {footerBase} from "./footer.js"
function fetchData(){
    fetch("../data/data.json")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            if(window.innerWidth <= 834){
                // renderHeaderNav_homepage_mobile();
            }
            if(window.innerWidth >= 1008){
                renderHeaderNav_base_desktop();
                keysearch(data.key_search);
                footerBase();
            }
        })
} 
fetchData()