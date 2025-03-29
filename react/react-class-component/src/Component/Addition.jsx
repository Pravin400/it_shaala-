import React from 'react'
import "./Addition.css"
import { useState } from 'react'

function Addition() {
    const[num1,updatenum1] = useState(0);
    const[num2,updatenum2] = useState(0);
    const[number,sum] = useState(0)
    function addition(){
        // sum(+num1 + +num2)
        sum(parseInt(num1) + parseInt(num2));
        // sum(Number(num1) + Number(num2));
    }
  return (
    <div>
      <input onChange={(e) => updatenum1(e.target.value)} className="no1" type="number"  placeholder= "enter number" />
      <br />
      <br />
      <input onChange={(e) =>updatenum2(e.target.value) } className="no2" type="number" placeholder= "enter number" />
      <br />
      <br />
      <hr />
      <br />
      <button onClick={addition} >add</button>
      
      <h1 className='Sum'>Sum : {number} </h1>
    </div>
  )
}

export default Addition
