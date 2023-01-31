const $ = document.querySelector.bind(document);
let htmls;
export function renderHeaderNav_base_desktop(){
    document.querySelector("header").innerHTML += `<div class="header" style="position: fixed; top: 0; left: 0; right: 0;
    transform: translateZ(0); z-index: 100; height:var(--header-heigh); background-image: linear-gradient(0, #fe6433, #f53e28);color: var(--white-color); padding-top: 4px;">
    </div>`
    $(".header").innerHTML += `<div class="grid nav-bar-wrap-container header_resp_desktop"></div>`
    $(".header_resp_desktop").innerHTML += `
        <nav class="header-nav-bar flex-jtfspbt"></nav>
    `
    
    $(".header-nav-bar").innerHTML +=
    `
            <div class="nav-bar-list left-nav-bar-list flex-jtfspar">
                <div class="header-navbar-item header-item-vertical-line flex-jtfspar">
                    <a  href="../page/seller.html" target="blank">Kênh người bán</a>
                </div>
                <div class="header-navbar-item header-item-vertical-line flex-jtfspar">
                    <a href="../page/become_seller.html"  target="blank">Trở thành người bán Shopee</a>
                </div>
                <div class="header-navbar-item header-item-vertical-line hover-show-qrcode-download flex-jtfspar">
                    <a class="qrcode-link-download" href="#" target="blank">Tải ứng dụng</a>
                    <div class="qrcode-download">
                        <img src="../assets/imgs/logo/qrcode.png" alt="" class="qrcode-img">
                        <div class="header-qrapp-download">
                            <img src="../assets/imgs/logo/appstore.png" alt="" class="app-store-img">
                            <img src="../assets/imgs/logo/googlestore.png" alt="" class="app-store-img">
                            <img src="../assets/imgs/logo/appgallery.png" alt="" class="app-store-img">
                        </div>
                        </div>
                </div>
                    <div class="header-navbar-item connect flex">
                    <div>Kết nối</div>
                    <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>
                    </a>
                    <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                            </svg>
                    </a>
                    </div>
            </div>
            <ul class="nav-bar-list right-nav-bar-list inlineFlex">
                <li class="header-navbar-item hover-show-notification">
                    <div class="ic-span-notification flex">
                            <div class="ic flex">
                                <svg viewBox="3 2.5 14 14" x="0" y="0" class="shopee-svg-icon icon-notification-2"><path d="m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z"></path><path d="m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z"></path></svg>
                            </div>
                        <span class="mgLR-4">Thông Báo</span>
                    </div>
                    <div class="notification box_shadow">
                        <div id="logged_in_status_notification" style="display:none;">                                   
                            <p class="ul-heading-txt">Thông báo mới nhận</p>
                            <ul class="list-notification">
                                <li class="detail-list-notify change-bg-viewed">
                                    <a href="" class="notification-link">
                                        <div class="div-img-product">
                                            <img src="https://cf.shopee.vn/file/2df03414664f207c5535244cd56d3728_tn" alt="$error loaded">
                                        </div>
                                        
                                        <div class="description-notify">
                                            <h3 class="h3-heading">Yeah!Đã tìm được tài xế.</h3>
                                            <p class="detail-description-notification ul-heading-txt">Chúc mừng, đã tìm được tài xế cho đơn hàng 220622GYWD49X9 của bạn.
                                                Thông tin tài xế Trường Nguyễn Việt, 0903111112, 59H-31464.
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <footer id="see-all-notification">
                                <a href="#" target="">Xem tất cả</a>
                            </footer>
                        </div>
                        <div id="complete-signIn-toseeNotification" style="display:block ;">
                            <div class="c1">
                                <div class="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="black" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                        <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    </svg>
                                </div>
                                <div class="flex txt-Black-color">Đăng nhập để xem thông báo</div>
                            </div>
                            
                            <div class="btn-login-signup flex">
                                <a href="../page/register_form.html" class="txt-Black-color none-change-opacity">Đăng nhập</a>
                                <a href="../page/signin_form.html" class="txt-Black-color none-change-opacity">Đăng ký</a>
                            </div>
                        </div>
                    </div>
                    
                </li>
                <li class="header-navbar-item change-opacity">
                    <div class="ic flex">
                        <svg height="16" viewBox="0 0 16 16" width="16" class="shopee-svg-icon icon-help-center"><g fill="none" fill-rule="evenodd" transform="translate(1)"><circle cx="7" cy="8" r="7" stroke="currentColor"></circle><path fill="currentColor" d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"></path></g></svg>
                    </div>
                    <a href="../page/support.html"  target="_self" class="mgLR-4">Hỗ Trợ</a>
                </li>
                <li class="header-navbar-item">
                    <div class="change-languages-container">
                        <a class="languagues-ic change-opacity">
                            <div class="lgic flex">
                                <div class="ic flex">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 14.6667C11.6825 14.6667 14.6673 11.6819 14.6673 8.00004C14.6673 4.31814 11.6825 1.33337 8.00065 1.33337C4.31875 1.33337 1.33398 4.31814 1.33398 8.00004C1.33398 11.6819 4.31875 14.6667 8.00065 14.6667Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.33464 8.00004C5.33464 11.6819 6.52854 14.6667 8.0013 14.6667C9.47406 14.6667 10.668 11.6819 10.668 8.00004C10.668 4.31814 9.47406 1.33337 8.0013 1.33337C6.52854 1.33337 5.33464 4.31814 5.33464 8.00004Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.33398 8H14.6673" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <span class="mgLR-4">Tiếng Việt</span>
                                <div class="ic flex">
                                    <svg viewBox="0 0 12 12" fill="none" width="12" height="12" color="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8.146L11.146 3l.707.707-5.146 5.147a1 1 0 01-1.414 0L.146 3.707.854 3 6 8.146z" fill="currentColor"></path></svg>
                                </div>
                            </div>               
                        </a>
                        <div class="change-langues box_shadow">
                            <a>Tiếng Việt</a>
                            <a>Tiếng Anh</a>
                        </div>
                    </div>
                </li>
                <li id="sign-in" class="header-navbar-item header-item-vertical-line flex-jtfspar">
                    <a class="font-weigh-bold" href="../page/signin_form.html" target="_self">Đăng Ký</a>
                </li>
                <li id="log-in" class="header-navbar-item flex-jtfspar">
                    <a class="font-weigh-bold" href="../page/register_form.html" target="_self">Đăng Nhập</a>
                </li>

            </ul>
    `
    $(".header_resp_desktop").innerHTML += `<div class="search-logo-cart"></div>`

    $(".search-logo-cart").innerHTML  += 
    `
        <div id= "mainSctn" class="nav-header-container-with-search">
            <a href="index.html" class="header-logo">
                <div class="header-logo-wraper inlineFlex" href="#">
                    <img src="../assets/imgs/logo/logoshop.png" alt="$logo-error" id="logo-img">
                    <div id="shop-name">Fast Buy</div>
                </div>
            </a>     
            <div class="nav-header-with-search">
                <div class="box-search">
                    <div class="box-search-input-icon">
                        <div class="container-input-history-search">
                            <input type="text" name="search" value="" autocomplete="off" class="nav-search-input" placeholder="">
                            <div class="history-search-container box_shadow">
                                <div class="history-search">
                                    <div id="historyDIV">
                                        <div id="sH" class="search_in-shope-ctn">
                                            <a href="#" class="shopee-searchbar-hints__history-prefill agency-saleOff  flex-jtfspbt" style="display:block">
                                                <span class="mgl-8 mgR-8 txt-UperCase">Tựu trường sale chất -50%</span>
                                                <img src="https://cf.shopee.vn/file/4fa96751e79f4d4d2de96f87d8a8dc85" height="24">
                                            </a>
                                            <a href="#" class="shopee-searchbar-hints__history-prefill search-shop-inShopee" style="display:none">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ee4d2d" class="bi bi-shop mgl-8" viewBox="0 0 16 16">
                                                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                                                </svg>
                                                <span class="mgl-8">Tìm Shop</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="keyWordHistory">
                                        <a href="#" class="list-history-search-link">
                                            <div class="shopee-searchbar-hints__history-entry__text">
                                                <span>lọ chiết serum</span>
                                            </div> 
                                        </a>
                                        <a href="#" class="list-history-search-link">
                                            <div class="shopee-searchbar-hints__history-entry__text">
                                                <span>Caldium frog of blended</span>
                                            </div> 
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="search-btn flex">
                                <svg height="19" viewBox="0 0 19 19" width="19" class="shopee-svg-icon sBTN"><g fill-rule="evenodd" stroke="none" stroke-width="1"><g transform="translate(-1016 -32)"><g><g transform="translate(405 21)"><g transform="translate(611 11)"><path d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z"></path><path d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z"></path></g></g></g></g></g></svg>
                        </button>
                    </div>
                    <div class="box-search-follow-data">
                        <ul class="top-list-data-search"></ul>
                    </div>
                </div>
            </div>                     
            <div class="shopping-cart">
                <a href="#" class="shopping-cart-link">
                    <div>
                        <svg class="iicon-shopping-cart-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    </div>
                </a>
                <div class="cart-view-notification box_shadow">
                    <div class="shopping-cart-none-products">
                        <img src="../assets/imgs/notification/f716952b0acbc99590da.jpg" alt="" class="img-cart-view-none-product">
                        <p>Chưa có sản phẩm nào</p>
                    </div>
                    <div class="shopping-cart-has-product">
                        <ul class="ul-cart-bag">
                            <p class="ul-heading-txt">Sản phẩm mới thêm</p>
                            <li class="list-product-in-bag">
                                <a href="#" class="product-cart-detail-link">
                                    <div class="div-img-product-cart-view">
                                        <img src="../assets/imgs/product_img/jacklyn-pr-1.jpg" alt="" class="product-img-cart">
                                    </div>
                                    <div class="div-txt">
                                        <p class="name-product">Cây con Jacklyn</p>
                                        <p class="price-product">đ14.0000</p>
                                    </div>
                                </a>
                            </li>
                            <div class="footer-cart-notification">
                                <div class="count-number-other-product">3 sản phẩm thêm vào giỏ hàng</div>
                                <div class="btn-see-cart-view">
                                    <button>Xem giỏ hàng</button>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `

}
export function renderHeaderNav_homepage_mobile(){
    document.querySelector("header").innerHTML += `<div class="header_resp_onmobile" style="position: relative; width: 100%; height: 90px; z-index:200"></div>`
    $(".header_resp_onmobile").innerHTML = `<div class="search-logo-cart"></div>`

    $(".search-logo-cart").innerHTML = 
    `
        <div class="box-search-input-icon flex" style="width: 70%; height: 50px; margin-left: 10px">
            <button class="search-btn flex" style="width: fit-content ;background-color: white; margin:0px">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </button>
            <div class="container-input-history-search" style="margin-left:8px">
                <input type="text" name="search" value="" autocomplete="off" class="nav-search-input" placeholder="Type to search...">
            </div>
            <button class="search-btn flex" style="width: fit-content ;background-color: white; margin:0px">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-camera" viewBox="0 0 16 16">
                    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                </svg>
            </button>
        </div>
        <div class="shopping-cart flex" style="width: fit-content;">
            <a href="#" class="shopping-cart-link" style="display: block">
                <div>
                    <svg class="iicon-shopping-cart-2" xmlns="http://www.w3.org/2000/svg" stroke = "white" width="26" height="26" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                </div>
            </a>
            <a href="#" class="shopping-cart-link" style="display:block">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" stroke = "white" width="26" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                </div>
            </a>
        </div>
    `
    $(".box-search-input-icon").style.border = "0.8px solid var(--line-color)";
    $(".search-logo-cart").style.position = "absolute";
    $(".search-logo-cart").style.top = "20%";
    $(".xCao3k").style.marginTop = "-130px";
}
