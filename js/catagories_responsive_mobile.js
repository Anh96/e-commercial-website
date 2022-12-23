$ = document.querySelector.bind(document);
let htmls;
fetch("../data/data.json")
    .then(res=> {
        return res.json()
    })
    .then(data=>{
        render_info_shop_online(data.shop_onlines);
        render_catagories_res_mobile(data.shop_onlines);
    })
    // .catch(er=> {
    //     alert("Error fetching data")
    // })
    function render_info_shop_online(shops){
        shops.forEach(shop=>{
            if(shop.shop_id == 1){
                $('.ltf-img').innerHTML =  `<div class="logo_shop_img" style="background-image:url('${shop.logo_shop}')"></div>`;
                $('.shop-bgr').innerHTML = `<div class="shopBGR-img" style = "background-image:url('${shop.shop_background_image}')"></div>`
                if(shop.favorite_shop==true){
                    $('.fvr-shop').style.display = "block";
                }
                if(shop.favorite_shop == false){
                    $('.fvr-shop').style.display = "none";
                }
                $('.shopName').innerHTML = `${shop.shop_name}`
                if(shop.state_online==true){
                    $('.time-online').innerHTML =
                    `
                        <div class="circle-state"></div>
                        <div class=" txt-white-color mgl-8 font16">Đang hoạt động</div>
                    `
                }
                if(shop.state_online==false){
                    $('.time-online'),innerHTML = 
                        `
                            <div class=" txt-white-color font16";">Online ${shop.hours_online_ago} giờ trước</div>
                        `
                }
                $(".data-rating").innerHTML = `${shop.rating_shop}`;
                $(".followers div").innerHTML = `${shop.quantity_pages_follow}`
            }
        })
    }
    function render_catagories_res_mobile(shops){
        shops.map(shop=>{
            if(shop.shop_id == 1){
                htmls = `
                    <li class="flex-jtfspbt">
                        <div class="flxC mgl-8">
                            <div class="flxC"> <img src="../assets/imgs/favicon/technical-support-2_icon-icons.com_52811.ico" alt="" style="width: 30px; height:30px"></div>
                            <div class="mgLR-4">
                                <div class="flxC">On Sale</div>
                                <div class="flxC">
                                    <div class="quantity_products mgR-8"></div>
                                    <div class="">Sản phẩm</div>
                                </div>
                            </div>
                        </div>
                        <div class="flxC mgR-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                        </div>
                    </li>
                `
                return $("#all-catagories_resp_mobile ul").innerHTML += htmls;

            }
        })
    }
