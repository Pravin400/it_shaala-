import React from 'react'
import { useReducer } from 'react'

function reducerFn (state , payload){
    if(payload === "increment"){
        return state + 1;
    }
    else if(payload === "decrement"){
        return state - 1;
    }
}

const UseReducer = () => {
const [count ,action] = useReducer(reducerFn, 0);

  return (
    <div>
      <h1>Count is  {count}</h1>
      <button onClick={() => action("increment")}>increment</button>
      <button onClick={() => action("decrement")}>decrement</button>
    </div>
  )
}

export default UseReducer
