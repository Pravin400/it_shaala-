import React, { useEffect, useRef, useState } from 'react'



const Component = () => {
    
    const [count,setcount] = useState(0);
    //first of all null value is assign in the ref so this cannot be visible in the UI 
     const countref =useRef(-1); 

     useEffect(()=> {
        countref.current = count;
     })


  return (
    <div>

        <h1>current Count is {count}</h1>
        <h1>previous Count is {countref.current}</h1>
        <button onClick={()=>setcount(count+1)}>Increment</button>      
        <button onClick={()=>setcount(count-1)}>Decrement</button>      
    </div>
  )
}

export default Component
