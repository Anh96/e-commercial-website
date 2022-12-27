// handle header catagories responsive
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
export function handle_header_catagories_mobile(){
   $$(".ctPRD").forEach(ctprd=>{
      ctprd.addEventListener("click", function(){
         this.classList.add("item-CtPRD-active");
      })
   })
}