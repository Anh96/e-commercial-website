import { header_none_logo_input_cart, header_paymentpage_mobile} from "./header.js";
import {footerBase} from "./footer.js";
let $ = document.querySelector.bind("document");
let $$ = document.querySelectorAll.bind("document");
let fetchData = ()=>{
    fetch("../data/data.json")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            if(window.innerWidth>=1008){
                header_none_logo_input_cart();
                footerBase();
                userInfo();
            }
            if(window.innerWidth<=834){
                header_paymentpage_mobile();
            }
            set_properties_payment();
        })
}
fetchData()

// Hidden Logo, input, cart
function set_properties_payment(){
}
function userInfo(){
    let user = document.querySelector(".user");
}