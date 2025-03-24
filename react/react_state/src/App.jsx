import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Toggle from './Components/Toggle'
import FormExample from './Components/FormExample'
import TodoList from './Components/TodoList'
import ProfileUpdater from './Components/ProfileUpdater'
import ThemeSwitcher from './Components/ThemeSwitcher'

function App() {



 
  return (
    <>
      <ThemeSwitcher />
      <Counter />
      <Toggle />
      <br />
      <br />
      <hr />
      <hr />
      <br />
      <FormExample />
      <br />
      <hr />
      <hr />
      <TodoList />
      <br />
      <hr />
      <hr />
      <ProfileUpdater />

      
      </>
  )
}

export default App
