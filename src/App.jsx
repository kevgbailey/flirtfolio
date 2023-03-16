import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DotView from './DotView.jsx'
import testUser from './testUser.json';

function App() {
  function findNumOfDots(color, array){
    let numOfDots = 0;
    for(let i = 0; i < array.length; i++){
      if(array[i].color === color){
        numOfDots++;
      }
    }
    return numOfDots;
  }
  
  testUser.numOfGreenDots = findNumOfDots("green", testUser.dots);
  testUser.numOfGreyDots = findNumOfDots("#AAAAAA", testUser.dots);
  testUser.numOfYellowDots = findNumOfDots("#FFF171", testUser.dots);
  testUser.hasBlueDot = true;
  console.log(testUser);

  return (
    <div className="App">
      <div className = "header">
      <h1>{testUser.firstName} {testUser.lastName}'s FlirtFolio</h1>
      </div>
      <p className = "welcomeBanner" >Welcome, {testUser.firstName} {testUser.lastName}!</p>
        <hr></hr>
       <DotView user = {testUser}/>
    </div>
  )
}

export default App
