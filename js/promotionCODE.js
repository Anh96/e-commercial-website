const paginationController = document.querySelector(".number-page");
let currentPage =1, beforePage, afterPage;
//paginationController = create_pagination_controller(currentPage,totalpages)
export function create_pagination_controller(currentPage,totalpages){
   let ui = "";
   var active;
   beforePage = currentPage -1;
   afterPage = currentPage + 1;
   for(let i = beforePage; i<=afterPage;i++){
    if(i>totalpages){
        continue;
    }
    if(i==0){
        i= i+1;
    }
    if(currentPage == i){
        active = "active";
    }
    else{
        active = "";
    }
    ui += `<button class = "nbP flex ${active}" onclick = "create_pagination_controller(${i},totalpages)">${i}</button>`
    }
    paginationController.innerHTML = ui;
    return ui;
}