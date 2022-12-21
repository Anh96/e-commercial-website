//$(".mobile-rating-followers").style.left = $(".rgt").getBoundingClientRect().left + "px";
 //alert($(".arrow-gotoshop").offsetTop);
 getData()
    .then(res=>{
        
    })
    .catch(err=>{
        alert("Have sometthing ERROR")
    })
 async function getData(){
    const x = await fetch("../data/data.json");
 }