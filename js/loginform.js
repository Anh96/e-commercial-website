$ = document.querySelector.bind(document)
$('#qrcode-ic').onclick = ()=>{
    $('#login_with_QRcode_layout').style.display = "block";
    $('#login_with_password_layout').style.display ="none";
}
$('#password-ic').onclick = ()=>{
    $('#login_with_QRcode_layout').style.display = "none";
    $('#login_with_password_layout').style.display ="block";
}