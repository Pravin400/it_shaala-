import { useState } from 'react'
import './App.css'
import { Component } from 'react';
import Addition from './Component/Addition';
import Update from './Component/Update';
import AutoUpdate from './Component/AutoUpdate';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1>Hello</h1>
    <Addition />
    <Update />
    <AutoUpdate />
    </>
  )
}

class Myclass extends Component{
  componentDidMount(){
    console.log("MYClass mounted")
  }
  componentDidUpdate(){
    console.log("Myclass updated")
  }
  componentWillUnmount(){
    console.log("Myclass Unmout")
  }
  render(){
    return(
      <>
        <h1>Hello there </h1>
      </>
    );
  }
}

export default App
