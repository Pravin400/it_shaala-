import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponent
 from './Mycomponent'
// ✅ React component names must start with a capital letter.
function App() {
  const [count, setCount] = useState(0)
  const age = 19;
  const name = "pravin"

  return (
    <>
    <h1>Hello {name}</h1>
    {/* Class name can be written in camelCase  */}
    {/* Not directly write class, instead use className  */}
    <h1>you are {age} yeares old</h1>
    <h1 className="camelCase">Wel-come To My World!!!</h1>
    <MyComponent></MyComponent>
    <Mycomponent></Mycomponent>
    <Mycomponent></Mycomponent>
    <Mycomponent></Mycomponent>
    <Mycomponent></Mycomponent>
    </>
    
    // in react we can write make page in small small component 
    // for an each co mponet have saperate file
// component is  the part of ui 
// web page choty choty parts/component madhe divide karun create kartat ani tyche saperate file create kartat create 

  )
}
// always component start with my component 
function MyComponent(){
  return <h1>New Component ffrom same class</h1>
}

export default App
