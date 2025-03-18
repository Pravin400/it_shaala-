import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, updatecount] = useState(10);
  // const [count, updatecount] = arr;
  function handleClick(){
    // count = count +1;
    updatecount(count + 1);
  }
  return (
    <>
      <h1>count is {count}</h1>
      <button onClick={handleClick}>click me</button>
      </>
  )
}

export default App
