import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function AutoUpdate() {
    const[title,updateTitle]=useState("");
    useEffect()
    
  return (
    <div>
        <input onChange={(e)=>updateTitle(document.title = e.target.value)} type="text" placeholder='enter text' />
     
    </div>
  )
}

export default AutoUpdate
