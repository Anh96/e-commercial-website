$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document)
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
const noneDataHistory = $('#none-flexible-data')
const sortSearchable = searchable.sort()
// let hasDataHistory = $('#has-data')
console.log()
// popup variables
const popup_item = $$('.popup-item')
const cancelBtn = $$('.cancel-popup')
const nextCircleSupport = $$('.list-next-circle-animation');
let current =0;
//handle history search variables
console.log()
/*inputField.onkeyup = ()=>{
    var results=[];
    var textInputValue = inputField.value;
    let i;
    for(i of searchable){
        if(!textInputValue.length){
            historySearchCtn.style.display ='none'
        }
        if(textInputValue){
            if(i.toLowerCase().startsWith(textInputValue.toLowerCase())){
                historySearchCtn.style.display = 'block'
                noneDataHistory.style.display ='none'
                results.push(i);
                renderHistorySearch(results);
            }
            else{
                historySearchCtn.style.display = 'block'
                noneDataHistory.style.display ='block'
            }
        }
    }
}
function renderHistorySearch(results){
    
    if(results.length==0){
        noneDataHistory.style.display = 'block'
        historySearchCtn.innerHTML = " "
        //console.log(results.length)
    }
    else{
        const htmls = results.map(item=>{   
            return `
                    <a href="#" class="list-history-search-link">
                        <div class="shopee-searchbar-hints__history-entry__text">
                            <span>${item}</span>
                        </div> 
                    </a>
            `
        }).join('');
        historySearchCtn.innerHTML = `<div class="history-search has-data"> ${htmls}</div>`
        
    }
}*/
inputField.onkeyup = function(){
    let i;
    removeElement();
    for(i of searchable.sort()){
        /*if(i.toLocaleLowerCase().startsWith(inputField.value.toLowerCase()) && inputField.value.length != 0){
            let listItem  = document.createElement('a');
            listItem.classList.add('list-history-search-link')
            listItem.setAttribute("onclick","displayText('" + i + "')")
            let word = i.substr(0, inputField.value.length);
            word+= i.substr(inputField.value.length);
            listItem.innerHTML = word;
            historySearchCtn.appendChild(listItem)
            historySearchCtn.style.display ='block'
        }
        if(i.toLocaleLowerCase().includes(inputField.value.toLowerCase())==false && inputField.value.length !=0){
                noneDataHistory.style.display ='block';
                historySearchCtn.style.display ='block';
        }
        */
        if(inputField.value.length!=0){
            noneDataHistory.style.display ='none';
            if(i.toLocaleLowerCase().startsWith(inputField.value.toLowerCase())){
                let listItem  = document.createElement('a');
                listItem.classList.add('list-history-search-link')
                listItem.setAttribute("onclick","displayText('" + i + "')")
                let word = i.substr(0, inputField.value.length);
                word+= i.substr(inputField.value.length);
                listItem.innerHTML = word;
                historySearchCtn.appendChild(listItem)
                historySearchCtn.style.display ='block'
                noneDataHistory.style.display ='none';
                

            }
            if(i.toLocaleLowerCase().includes(inputField.value.toLowerCase())==false){
                    noneDataHistory.style.display ='block';
                    historySearchCtn.style.display ='block';
            }
        }
        if(!inputField.value){
            historySearchCtn.style.display ='none'
        }
        
    }
}
function displayText(text){
    inputField.value = text;
}
function removeElement(){
    let elements = document.querySelectorAll('.list-history-search-link')
    elements.forEach(e=>{
        e.remove()
    })
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
