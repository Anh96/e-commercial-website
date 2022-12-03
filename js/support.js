$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);
let htmls = "";
// history search API
let searchable = [
    'mua hàng',
    'mua hàng mùa hè',
    'hỗ trợ kênh bán hàng',
    'chạy quảng cáo shop hiệu quả',
    'chi phí quảng cáo shop',
    'làm thế nào để tiếp cận khách hàng tiềm năng',
    'chuyên đề tối ưu hoá công cụ tìm kiếm',
    'sản phẩm nào sẽ là hot trend mùa này?',
    'cách đóng gói hàng hoá trước khi gửi đến kho vận chuyển Shopee',
    'hỗ trợ trả phí trước hạn'
]
// box search variables
const inputField = $('.nav-search-input')
const historySearchCtn = $('.history-search-container')

// popup variables
const popup_item = $$('.popup-item')
const cancelBtn = $$('.cancel-popup')
const nextCircleSupport = $$('.list-next-circle-animation');
let current =0;
//handle history search variables
// none flexible data results search
function noneDataHistory(){
    htmls = `
                <div id="none-flexible-data" class="history-search" style="height: 200px;padding: 42px;">
                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" class="bi bi-emoji-frown-fill mgTB-8" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
                        </svg>
                    </div>
                    <div class="has_data_text" style="height:50%;">
                        <h3 style=" text-align: center;">Không tìm được kết quả phù hợp</h3>
                        <p style=" text-align: center;">
                            Vui lòng tìm kiếm bằng từ khóa khác
                            To learn more about selling on Shopee, visit the 
                            <a style="color: blue; text-decoration:underline">Seller Education Hub.</a>
                        </p>
                    </div>
                </div>
            `
        return htmls;
}
let render_filter_results = function(listData){
    let li = "";
    for(i of listData){
        li += `<a class="list-history-search-link">${i}</a>`;
    }
    historySearchCtn.innerHTML = li;
}
let filter_keyword = function(e){
    keyword = inputField.value.toLowerCase();
    filter_data = searchable.filter(data=>{
        return data.toLowerCase().indexOf(keyword) > -1;
    })
    if(filter_data.length == 0){
        htmls = noneDataHistory();
        historySearchCtn.innerHTML = htmls
    }
    else 
        render_filter_results(filter_data);
}
function displayText(item){
    inputField.value = item;
    historySearchCtn.style.display = "none";
}
inputField.onkeyup = ()=>{
    if(inputField.value.length > 0){
        historySearchCtn.style.display = "block";
        filter_keyword();
        $$(".list-history-search-link").forEach(item=>{
            item.onclick = ()=>{
                displayText(item.innerHTML);
            }
        })
    }
    else{
        historySearchCtn.style.display = "none";
    }
}
// auto show popup
autoShowPopUp()
function autoShowPopUp(){
    let i;
    current++;
    if(current>popup_item.length){
        current = 1;
    }
    for(i=0;i<popup_item.length;++i){
        popup_item[i].style.display = 'none'
    }
    for(i=0;i<nextCircleSupport.length;++i){
        nextCircleSupport[i].classList.remove('active')
    }
    popup_item[current-1].style.display = 'block'
    nextCircleSupport[current-1].classList.add('active')
    setTimeout(autoShowPopUp,4000)

}
// press on circle
showPopUP(current);
function currentSlide(n){
    showPopUP(current =n)
}
function showPopUP(n){
    let i;
    for(i =0;i<popup_item.length;++i){
        popup_item[i].style.display = 'none'
    }
    for(i =0;i<nextCircleSupport.length;++i){
       nextCircleSupport[i].classList.remove('active')
    }
    if(n>popup_item.length){
        current =1
    }
    if(n<0){
        current = popup_item.length;
    }
    popup_item[current-1].style.display = 'block'
    nextCircleSupport[current-1].classList.add('active')

}
nextCircleSupport.forEach((dot,index) => {
    dot.onclick = ()=>{
        currentSlide(index+1)
    }
});
cancelBtn.forEach((cancelBtn,index)=>{
    let i;
    cancelBtn.onclick = ()=>{
        $('.popup-ctn').style.display ='none'
    }
})
