import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
{/* <Counter/> */}
function App() {

  const [count, updateshow] = useState(false);
  // const [count, updatecount] = arr;
  function handleClick(){
    updateshow (!count)
  }


  // const [count, updatecount] = useState(0);
  // // const [count, updatecount] = arr;
  // function increment(){

  //   updatecount(count + 1);
 
  // }
  // function decrement(){
 
  //   updatecount(count - 1);
 
  // }
  // function reset(){
  
  //   updatecount( 0);
 
  // }


  // const [count, updatecount] = useState("srushti");
  // // const [count, updatecount] = arr;
  // function handleClick(){

  //   // updatecount("srushti is smart");
  //   updatecount(count + 7);
  //   updatecount(count + 1);
  //   updatecount(count + 3);
    
  // }
  return (
    <>
      <h1>count is {count}</h1>
      <button onClick={handleClick}>hide/show</button>
      {count && <h1>Hello</h1>}
      {/* <button onClick={handleClick}>increase me</button> */}
      {/* <button onClick={decrement}>decrese me</button>
      <button onClick={reset}>reset me</button> */}
      
      </>
  )
}

export default App
