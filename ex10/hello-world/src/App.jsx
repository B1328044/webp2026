import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const stylearg = {fontsize:'100px',color:"red"};
  const changeText=(event)=>{
    console.log(event.target);
    event.target.innerText = event.target.innerText+"被點了";
  } 
  return (
    <div className='App'>
      <h1 style={stylearg} onClick={changeText}>Hello CGU!</h1>
    </div>
  )
}

export default App
