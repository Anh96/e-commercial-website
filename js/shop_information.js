$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);
let htmls;
export function create_htmls_frame_infoshop(){
    const li = document.createElement("div");
    li.classList.add("right-rltSk-ctn");
    li.classList.add("flex");
    htmls = `
        <ul class="nav-Right-ctn">
                <li class="rgt-item-nav">
                    <div class="item-nav-link txt-Black-color">
                        <div class="ctn flxC">
                            <div class="ic pd-LR-4">
                                <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" stroke-width="0" class="shopee-icon"><path d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z"></path></svg>
                            </div>
                            <div class="txt-Black-color txt-Capitalize flex">Sản Phẩm:</div>
                            <div class="quantity_products_inshop color-primary-text font-16 mgl-8"></div>
                        </div>
                    </div>
                </li>
                <li class="rgt-item-nav">
                    <div class="item-nav-link txt-Black-color">
                        <div class="ctn flxC">
                            <div class="ic pd-LR-4">
                                <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" stroke="#000"  class="shopee-icon"><g><circle cx="7" cy="4.5" fill="none" r="3.8" stroke-miterlimit="10"></circle><line fill="none" stroke-linecap="round" stroke-miterlimit="10" x1="12" x2="12" y1="11.2" y2="14.2"></line><line fill="none" stroke-linecap="round" stroke-miterlimit="10" x1="10.5" x2="13.5" y1="12.8" y2="12.8"></line><path d="m1.5 13.8c0-3 2.5-5.5 5.5-5.5 1.5 0 2.9.6 3.9 1.6" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path></g></svg>
                            </div>
                            <div class="txt-Black-color txt-Capitalize flex">Đang theo:</div>
                            <div class="quantity_pages_follow color-primary-text font-16 mgl-8"></div>
                        </div>
                    </div>
                </li>
                <li class="rgt-item-nav">
                    <div class="item-nav-link txt-Black-color">
                        <div class="ctn flxC">
                            <div class="ic pd-LR-4">
                                <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" stroke="#000" class="shopee-icon"><g><polygon fill="none" points="14 10.8 7 10.8 3 13.8 3 10.8 1 10.8 1 1.2 14 1.2" stroke-linejoin="round" stroke-miterlimit="10"></polygon><circle cx="4" cy="5.8" r="1" stroke="none"></circle><circle cx="7.5" cy="5.8" r="1" stroke="none"></circle><circle cx="11" cy="5.8" r="1" stroke="none"></circle></g></svg>
                            </div>
                            <div class="txt-Black-color txt-Capitalize flex">Tỉ lệ phản hồi chat:</div>
                            <div class="color-primary-text font-16 mgl-8">
                                <span class="percent_respons"></span>
                                <span>
                                    <svg width="10" height="10"><g fill="currentColor" fill-rule="nonzero" color="gray" stroke-width="0"><path d="M5 10A5 5 0 1 1 5 0a5 5 0 0 1 0 10zM5 .675a4.325 4.325 0 1 0 0 8.65 4.325 4.325 0 0 0 0-8.65z"></path><path d="M6.235 5.073c.334-.335.519-.79.514-1.264a1.715 1.715 0 0 0-.14-.684 1.814 1.814 0 0 0-.933-.951A1.623 1.623 0 0 0 5 2.03a1.66 1.66 0 0 0-.676.14 1.772 1.772 0 0 0-.934.948c-.093.219-.14.454-.138.691a.381.381 0 0 0 .106.276c.07.073.168.113.27.11a.37.37 0 0 0 .348-.235c.02-.047.031-.099.03-.15a1.006 1.006 0 0 1 .607-.933.954.954 0 0 1 .772.002 1.032 1.032 0 0 1 .61.93c.003.267-.1.525-.288.716l-.567.537c-.343.35-.514.746-.514 1.187a.37.37 0 0 0 .379.382c.1.002.195-.037.265-.108a.375.375 0 0 0 .106-.274c0-.232.097-.446.29-.642l.568-.534zM5 6.927a.491.491 0 0 0-.363.152.53.53 0 0 0 0 .74.508.508 0 0 0 .726 0 .53.53 0 0 0 0-.74A.491.491 0 0 0 5 6.927z"></path></g></svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="nav-Right-ctn">
                <li class="rgt-item-nav">
                    <div class="item-nav-link txt-Black-color">
                        <div class="ctn flxC">
                            <div class="ic pd-LR-4">
                                <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" stroke ="#000" class="shopee-icon"><g><circle cx="5.5" cy="5" fill="none" r="4" stroke-miterlimit="10"></circle><path d="m8.4 7.5c.7 0 1.1.7 1.1 1.6v4.9h-8v-4.9c0-.9.4-1.6 1.1-1.6" fill="none" stroke-linejoin="round" stroke-miterlimit="10"></path><path d="m12.6 6.9c.7 0 .9.6.9 1.2v5.7h-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path><path d="m9.5 1.2c1.9 0 3.5 1.6 3.5 3.5 0 1.4-.9 2.7-2.1 3.2" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path></g></svg>
                            </div>
                            <div class="txt-Black-color txt-Capitalize flex">Người Theo Dõi:</div>
                            <div class="quantity_users_follow color-primary-text font-16 mgl-8"></div>
                        </div>
                    </div>
                </li>
                <li class="rgt-item-nav">
                    <div class="item-nav-link txt-Black-color">
                        <div class="ctn flxC">
                            <div class="ic pd-LR-4">
                                <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" stroke="#000" class="shopee-icon icon-rating"><polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon></svg>
                            </div>
                            <div class="txt-Black-color txt-Capitalize flex">Đánh giá:</div>
                            <div class="color-primary-text txt-Capitalize font-16 mgl-8">
                                <span class="rating_shop"></span>
                                <span class="quantity_rating"></span>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="rgt-item-nav">
                    <div class="item-nav-link txt-Black-color">
                        <div class="ctn flxC">
                            <div class="ic pd-LR-4">
                                <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" stroke="#000" class="shopee-icon"><g><circle cx="6.8" cy="4.2" fill="none" r="3.8" stroke-miterlimit="10"></circle><polyline fill="none" points="9.2 12.5 11.2 14.5 14.2 11" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polyline><path d="m .8 14c0-3.3 2.7-6 6-6 2.1 0 3.9 1 5 2.6" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path></g></svg>
                            </div>
                            <div class="txt-Black-color txt-Capitalize flex">Tham gia:</div>
                            <div class="time_shop_joined color-primary-text txt-Capitalize font-16 mgl-8"></div>
                        </div>
                    </div>
                </li>
            </ul>
    `
    $(".rlt0Sk").append(li)
    return li.innerHTML = htmls;
}
export function render_info_shop_online(shop_onlines){
    create_htmls_frame_infoshop();
    shop_onlines.forEach((shop,index) => {
        if(index==0){
            $('.ltf-img').innerHTML = `<div class="logo_shop_img" style="background-image:url('${shop.logo_shop}')"></div>`
            if(shop.favorite_shop==true){
                $('.fvr-shop').style.display = "block";
            }
            if(shop.favorite_shop == false){
                $('.fvr-shop').style.display = "none";
            }
            $('.shopName').innerHTML = `${shop.shop_name}`
            if(shop.state_online==true){
                htmls =
                `
                    <div class="circle-state"></div>
                    <div class=" txt-white-color mgl-8 font16">Đang hoạt động</div>
                `
            }
            if(shop.state_online==false){
                htmls = 
                    `
                        <div class=" txt-white-color font16";">Online ${shop.hours_online_ago} giờ trước</div>
                    `
            }
            $('.time-online').insertAdjacentHTML('beforeend',htmls)
            //handle data > 10000
            if(shop.quantity_products_inshop>1000){
                $('.quantity_products_inshop').innerHTML = `${shop.quantity_products_inshop/1000}k`
            }
            if(shop.quantity_products_inshop<1000){
                $('.quantity_products_inshop').innerHTML = `${shop.quantity_products_inshop}`
            }

            if(shop.quantity_pages_follow>1000){
                $('.quantity_pages_follow').innerHTML = `${shop.quantity_pages_follow/1000}k`
            }
            if(shop.quantity_products_inshop<1000){
                $('.quantity_pages_follow').innerHTML = `${shop.quantity_pages_follow}`
            }
            $('.percent_respons').innerHTML = `${shop.percent_respons}%`

            if(shop.quantity_users_follow>1000){
                $('.quantity_users_follow').innerHTML = `${shop.quantity_users_follow/1000}k`
            }
            if(shop.quantity_users_follow<1000){
                $('.quantity_users_follow').innerHTML = `${shop.quantity_users_follow}`
            }
            //rating shop
            $('.rating_shop').innerHTML = `${shop.rating_shop}`
            if(shop.quantity_rating>1000){
                $('.quantity_rating').innerHTML = `(${shop.quantity_rating/1000}k Đánh giá)`
            }
            if(shop.quantity_rating<1000){
                $('.quantity_rating').innerHTML = `${shop.quantity_rating}`
            }
            $('.time_shop_joined').innerHTML = `${shop.time_shop_joined}`
            // MOBILE SCREEN
            //$("data-rating").innerHTML = `${shop.rating_shop}`
            if(window.innerWidth<=480){
                //$(".mobile-rating-followers").style.display = "block";
                $(".data-rating").innerHTML = `${shop.rating_shop}`;
                $(".followers div").innerHTML = `${shop.quantity_pages_follow}`
            }
            
        }
        $('.shop-bgr').innerHTML = `<div class="shopBGR-img" style = "background-image:url('${shop.shop_background_image}')"></div>`
    })
}
