import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Home from './Components/Home'

import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Home/>
     <Contact/>
     <About/> */}
     <Link to="./Contact">Contact</Link>
     <Link to="./About">About</Link>
     <Link to="./Home">Home</Link>
     <BrowserRouter>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
