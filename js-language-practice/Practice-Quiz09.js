let Url = "https://dummyjson.com/products/1"
async function getData(){
    let res = await fetch(Url)
    let data = await res.json()
    console.log(data.title);
}
