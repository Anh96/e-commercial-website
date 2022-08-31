$ = document.querySelector.bind(document)
const promotionCtn = $('.CDpmt-wrapper')
export function renderPromotionItem(){
    promotionCtn.innerHTML = 
    `
        <div class="PMTcode margin-tb16 flx">
            <div class="curve-PRM flex">
                <div class="cUVR">
                    <div class="cPRm"></div>
                </div>
            </div>
            <div class="main-Promotion-CODE pd-LR-4 flex-jtfspbt">
                <div class="lft-PRM">
                    <div class="txt-Capitalize color-primary-text mgTB-4 font600">giảm 8%</div>
                    <div class="color-primary-text minimum-order flxC">
                        <div class="txt-Capitalize">Đơn tối thiểu</div>
                        <span class="mgLR-4">đ188k </span>
                        <div class="">Giảm tối đa</div>
                        <span class="mgLR-4"> đ28k </span>
                    </div>
                    <div class="progress progress-bar-used mgTB-4">
                        <div class="progress-bar progress-change" role ="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%"></div>
                    </div>
                    <div class="txt-Capitalize color-gray font075 mgTB-4 flxC">
                        đã dùng
                        <span class="pce mgLR-4">52%</span>
                        , HSD: 
                        <span class="date-time">31.08.2022</span>
                    </div>
                </div>
                <div class="right-PRM mgl-8 flex">
                    <div class="flex txt-white-color font16"> Lưu</div>
                </div>
            </div>
        </div>
    `
}
renderPromotionItem()