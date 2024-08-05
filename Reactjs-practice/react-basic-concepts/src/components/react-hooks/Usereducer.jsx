import React from 'react'
import { useReducer } from 'react'
const reducer = (state,action)=>{
    if(action.type == "INC"){
        return state=state+1;
    }else if(action.type == "DEC"){
        return state=state-1;
    }else if(action.type=="MUL"){
        return state=state*state
    }else{
        return state
    }
    return state;
}
const Usereducer = () => {
    const [state,dispatch] = useReducer(reducer,0)
  return (
    <div>
      <h1>{state}</h1>
      <span>
        <button onClick={()=>{dispatch({type:"INC"})}}>Increment</button>
        <button onClick={()=>{dispatch({type:"DEC"})}}>Decrement</button>
        <button onClick={()=>{dispatch({type:"MUL"})}}>Multiply</button>
      </span>
    </div>
  )
}

export default Usereducer
