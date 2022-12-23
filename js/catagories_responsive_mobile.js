render_shop_info_mobile()
    .then(res=>{
        return res.json();
    })
    .catch(err=>{
        alert("ERORR FETCHING DATA")
    })
async function render_shop_info_mobile(){
    const dataAPIs = await fetch("../data/data.json")
    // const data = await dataAPIs;
}