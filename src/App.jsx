import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dot from './Dot.jsx'

function App() {
let testProps = {firstName: "Kevin", lastName: "Bailey"};
  return (
    <div className="App">
      <h1>FlirtFolio</h1>
      <div className = "dotView">
      <Dot/>
      <Dot name = {{firstName: "john", lastName: "Doe"}} color = "green"/>
      <Dot name = {{firstName: "Yellow", lastName: "Dot"}} color = "rgb(235,237,88)"/>
    </div>
    </div>
  )
}

export default App
