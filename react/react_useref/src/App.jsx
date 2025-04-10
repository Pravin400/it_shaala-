import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './coponents/Component'
import Component2 from './coponents/Component2'
import Component3 from './coponents/Component3'
import MemoComponent from './coponents/MemoComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Component /> */}
    {/* <Component2 /> */}
    {/* <Component3 /> */}
    <MemoComponent />
    </>
  )
}

export default App
