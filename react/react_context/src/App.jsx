import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component2 from '../../react_useref/src/coponents/Component2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Component2 />
    <p>Hello</p>
    </>
  )
}

export default App
