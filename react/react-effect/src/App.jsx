import { useEffect, useState } from 'react'
import './App.css'

function App() {
  //use stats is hook use to 
  const [count, setCount] = useState(0)
  const [isvisible, setVisible] = useState(false)
//it is hook
//use to handel side effecct
//this will be runs on every render
  useEffect(() => {
    console.log("Effect runs on every render");
  });
//this runs on only first render only because of no dependency
  useEffect(()=>{console.log("api call to get videos");},[])
  
  function App1(){
    setCount(count +1);
  }

  function api2(){
    setVisible(!isvisible);
  }
 
  return (
    <>
    <h1>Count {count}</h1>
      <button onClick={App1}>click to increment1
      </button>
      <br />
      <br />

      <button onClick={api2}>Change</button>
      {isvisible && <TestCount />}
  
      </>
  )
      function TestCount() {
        useEffect(() => {
          console.log("Connct to backend");
          return () => {
            console.log("Disconnent to BACKEND");
          };
        }, [])
        
      }
    }
  

export default App
