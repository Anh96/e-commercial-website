$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);
fetch('../data/product.json')
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        render_info_shop_online(data.shop_onlines)
    })
let htmls;
function render_info_shop_online(shop_onlines){
    shop_onlines.forEach((shop,index) => {
        if(index==0){
            $('.ltf-img').innerHTML = `<div class="logo_shop_img" style="background-image:url('${shop.logo_shop}')"></div>`
            if(shop.favfavvorite_shop==true){
            $('.fvr-shop').style.display = "block"
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
                $('.quantity_rating').innerHTML = `${quantity_rating}`
            }
            $('.time_shop_joined').innerHTML = `${shop.time_shop_joined}`
        }
        $('.shop-bgr').innerHTML = `<div class="shopBGR-img" style = "background-image:url('${shop.shop_background_image}')"></div>`
    })
}
