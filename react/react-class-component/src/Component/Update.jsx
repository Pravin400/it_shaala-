import React from 'react'
import { useState } from 'react'

function Update() {
    const[title,updateTitle]=useState("");
    function updated(){
    
        document.title =title;
    }
    
  return (
    <div>
        <input onChange={(e)=>updateTitle(e.target.value)} type="text" placeholder='enter text' />
      <button onClick={updated}>Click to Change Title</button>
    </div>
  )
}

export default Update
