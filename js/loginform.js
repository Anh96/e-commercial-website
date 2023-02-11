const $ = document.querySelector.bind(document)
import {footerBase} from "./footer.js"
footerBase();
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
