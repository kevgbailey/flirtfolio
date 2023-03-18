import { useReducer, useState } from 'react'
import DotView from './DotView.jsx'
import testUser from './testUser.json';
import { Route, Routes, Link } from "react-router-dom"
import AboutPage from './AboutPage.jsx';

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
    <>
    <div className="App">
      <div className = "header">
      <h1>{testUser.firstName} {testUser.lastName}'s FlirtFolio</h1>
      <Link to = "/about" className = "aboutClick">About</Link>
      </div>
      <p className = "welcomeBanner" >Welcome, {testUser.firstName} {testUser.lastName}!</p>
        <hr></hr>
       <DotView user = {testUser}/>
    </div>

    <Routes>
    <Route path = '/about' element = {<AboutPage/>}/>
    </Routes>
    </>
  )
}

export default App
