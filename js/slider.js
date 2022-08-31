renderData()
    .then(res=>{
        
    })
    .catch(err =>{
        console.log("ERR")
    })
async function renderData(){
   const res = await fetch('http://localhost:3000/homebanner');
   const blob = await res.blob();
   $('.top-img').src = URL.createObjectURL(blob)
}

  