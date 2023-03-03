import { footerBase, footerBase_onMobile } from "./footer.js";
$(document).ready(function(){
        function fetchData(){
            if(window.innerWidth <= 834){
                footerBase_onMobile();
            }
            if(window.innerWidth >= 1022){
                footerBase()
            }
            ValidateEmail();
        }
        fetchData();
    })
function ValidateEmail(){
    jQuery(".btn-sbmit button").click(function(){
        // if(isEmail(jQuery("#user-acc").val())){
        //     alert("Valid email address!");
        //     return true;
        // }
        // if(!isEmail(jQuery("#user-acc").val())){
        //     alert("Invalid Email!");
        //     return false;
        // }
        if(isPhone(jQuery("#user-acc").val())){
            alert("valid phone!");
            return true;
        }
        if(!isPhone(jQuery("#user-acc").val())){
            alert("Invalid phone!");
            return false;
        }
    })
}
function isEmail(email){
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)){
        return true;
    }else{
        return false;
    }
}
function isPhone(phone){
    let phoneformating = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    return phone.match(phoneformating) ? true : false;
}
