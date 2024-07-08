import { useState, useEffect } from "react";

function FetchData() {
    const [state,setState] = useState(0);
    const [data, setdata] = useState([]);

    useEffect(() => {
        async function getdata (){
            let url = 'https://fakestoreapi.com/products/1';
            const data = await fetch(url);
            const res = await data.json();
            console.log(res);
            setdata(res);
        }
        getdata();
    },[state]);

    return (
        <>
        <button onClick={()=> setState(state+5)}>Get Data</button>
        </>
    );
}
export default FetchData;

