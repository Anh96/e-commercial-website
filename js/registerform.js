import { footerBase, footerBase_onMobile } from "./footer.js";
function fetchData(data){
    if(window.innerWidth <= 834){
        footerBase_onMobile();
    }
    if(window.innerWidth >= 1022){
        footerBase()
    }
}
fetchData();
