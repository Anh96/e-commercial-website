import {render_products, calculator_promotion_price} from "./condition_render_data.js";
import {renderHeaderNav_base_desktop} from "./header.js";
import {keysearch} from "./keyword_search.js"
import {footerBase, footerBase_onMobile} from "./footer.js";
import {pagination, prevRange, currRange,reset_bl1SbBtn} from "./paging.js";
import {render_info_sortResultPage } from './shop_information.js';
import { sort_quantitySold, sort_AscendingPriceSold, sort_DescendingPriceSold} from "./handleEventShopOnline.js";
let htmls, products_paging_after_filter = new Array;
fetch("../data/data.json")
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        if(window.innerWidth>=1008){
            renderHeaderNav_base_desktop();
            footerBase();
            keysearch(data.key_search)
        }
        if(window.innerWidth<=834){
            footerBase_onMobile();
        }
        filter_with_rangePrice();
        relative_products(data.products_inshop);
        render_info_sortResultPage(data.shop_onlines);
    })
//Relative Products
    // Sort

    function sortFollowBtn(products){
        jQuery(".bl1Sb-btn").each(function(){
            jQuery(this).click(function(){
                products_paging_after_filter.length = 0;
                reset_bl1SbBtn();
                jQuery(".bl1Sb-btn.active").removeClass("active");
                jQuery(this).addClass("active");
                jQuery(".tdsgtion").empty();
                jQuery(".pRCX span").html(`Giá:`);
                jQuery(".pRCX span").css("color", "black");
                jQuery(".icon-arrow-down-small").css("fill", "black");

                if(jQuery(this).index()==1){
                    jQuery.ajax({
                        type: "get",
                        url: "../data/data.json",
                        data: "data",
                        dataType: "json",
                        success: function (data) {
                            products_paging_after_filter.length = 0;
                            jQuery(data.products_inshop).each(function(index, value){
                                if(index >= prevRange && index < currRange){
                                    jQuery(".tdsgtion").append(render_products(value));
                                }
                            })
                        }
                    });
                }
                if(jQuery(this).index()==3){
                    jQuery.ajax({
                        type: "get",
                        url: "../data/data.json",
                        data: "data",
                        dataType: "json",
                        success: function (data) {
                            
                            jQuery(data.products_inshop).each(function(index, value){
                                if(index >= prevRange && index < currRange){
                                    products_paging_after_filter.push(value);
                                }
                            })
                            sort_quantitySold(products_paging_after_filter);
                            jQuery(products_paging_after_filter).each(function(index,value){
                                jQuery(".tdsgtion").append(render_products(value));
                            })
                        }
                    });
                }
            });
        })
    }
    function sortFollowPrice(products){
        jQuery(".hv-prcx").children().each(function(){
            jQuery(this).click(function(){
                if(jQuery(this).index()==0){
                    jQuery(".pRCX span").html(jQuery(this).text());
                    jQuery(".pRCX span").css("color", "white");
                    jQuery(".icon-arrow-down-small").css("fill", "white");
                    jQuery.ajax({
                        type: "get",
                        url: "../data/data.json",
                        data: "data",
                        dataType: "json",
                        success: function (data) {
                            products_paging_after_filter.length = 0;
                            jQuery(data.products_inshop).each(function(index, value){
                                if(index >= prevRange && index < currRange){
                                    return products_paging_after_filter.push(value);
                                }
                            })
                            sort_AscendingPriceSold(products_paging_after_filter)
                            jQuery(products_paging_after_filter).each(function(index, value){
                                jQuery(".tdsgtion").append(render_products(value));
                            })
                        }
                    });
                }
                if(jQuery(this).index()== 1){
                    jQuery(".pRCX span").html(jQuery(this).text());
                    jQuery(".pRCX span").css("color", "white");
                    jQuery(".icon-arrow-down-small").css("fill", "white");
                    jQuery.ajax({
                        type: "get",
                        url: "../data/data.json",
                        data: "data",
                        dataType: "json",
                        success: function (data) {
                            products_paging_after_filter.length = 0;
                            jQuery(data.products_inshop).each(function(index, value){
                                if(index >= prevRange && index < currRange){
                                    return products_paging_after_filter.push(value);
                                }
                            })
                            sort_DescendingPriceSold(products_paging_after_filter)
                            jQuery(products_paging_after_filter).each(function(index, value){
                                jQuery(".tdsgtion").append(render_products(value));
                            })
                        }
                    });
                }
            })
        })
    }
    // filter: 
    function filter_with_rangePrice(){
        jQuery(".range-price .round-btn").click(function(){
            let rpF_value = parseFloat(jQuery(".rpF").val());
            let rpT_value = parseFloat(jQuery(".rpT").val());
            products_paging_after_filter.length =0;
            jQuery.ajax({
                type: "get",
                url: "../data/data.json",
                data: "data",
                dataType: "json",
                success: function (data) {
                    jQuery(".tdsgtion").empty();
                    products_paging_after_filter.length =0;
                    jQuery(".number-page").empty();
                    jQuery(data.products_inshop).each(function(){
                        if(parseFloat(calculator_promotion_price(this).replaceAll(".", "")) >= 100000 && parseFloat(calculator_promotion_price(this).replaceAll(".", "")) <= 2800000){
                            products_paging_after_filter.push(this);
                        }
                    })

                    sortFollowBtn(products_paging_after_filter);
                    sortFollowPrice(products_paging_after_filter);
                    pagination(products_paging_after_filter);
                }
            });
        })
    }
    function relative_products(products){
        sortFollowBtn(products);
        sortFollowPrice(products);
        pagination(products);
    }