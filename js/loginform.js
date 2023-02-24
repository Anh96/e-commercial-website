const $ = document.querySelector.bind(document)
import {footerBase, footerBase_onMobile} from "./footer.js"
function fetchData(data){
    if(window.innerWidth <= 834){
        footerBase_onMobile();
    }
    if(window.innerWidth >= 1024){
        footerBase()
    }
}
fetchData();
$('#qrcode-ic').onclick = ()=>{
    $('#login_with_QRcode_layout').style.display = "block";
    $('#login_with_password_layout').style.display ="none";
}
$('#password-ic').onclick = ()=>{
    $('#login_with_QRcode_layout').style.display = "none";
    $('#login_with_password_layout').style.display ="block";
}
$(".show-hide-password").onclick = ()=>{
    if($("#password").getAttribute("type") === "password"){
        $("#password").setAttribute("type", "text")
    }else{
        $("#password").setAttribute("type", "password");
    }
    if($("#password").getAttribute("type") === "password"){
        $(".hidePassword").style.display = "block";
        $(".showPassword").style.display = "none";
    }else{
        $(".showPassword").style.display = "block";
        $(".hidePassword").style.display = "none";
    }
}
