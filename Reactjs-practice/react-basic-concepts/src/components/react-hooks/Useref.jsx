import React from 'react'
import { useState , useEffect , useRef } from 'react'
const Useref = () => {
    const [data,setData] = useState("")
    const counter = useRef(1)
    const prevState = useRef("");
    function changeHandle(e){
        return setData(e.target.value)
    }
    useEffect(()=>{
        prevState.current = data;
    },[data])
    useEffect(()=>{
        counter.current = counter.current + 1;
    })
  return (
    <div>
      <input type="text" onChange={changeHandle}/>
      <h3> Previouse alphabet in input field is {prevState.current}</h3>
      <h3>Page is rendered {counter.current} times</h3>
    </div>
  )
}

export default Useref
