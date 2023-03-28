import { useReducer, useState } from 'react'
import DotView from './DotView.jsx'
import testUser from './testUser.json';
import { Route, Routes, Link } from "react-router-dom"
import AboutPage from './AboutPage.jsx';
import DotPage from './DotPage.jsx';

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
      <h1><Link to = "/" className = "title">{testUser.firstName} {testUser.lastName}'s FlirtFolio</Link></h1>
      <Link to = "/about" className = "title">About</Link>
      </div>
       {/* <DotView user = {testUser}/> */}
    </div>

    <Routes>
      <Route path="/" element={<DotView user={testUser} />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path = "/dot/:dotId" render={({ match }) => <DotPage dotId={match.params.dotId}/>}/>
   </Routes>

   <footer className = "footer">
   <p>Created by <span><a href="https://github.com/kevgbailey" className="footerGitLinks">Kevin Bailey</a></span> & <span><a href="https://github.com/kevinisyoung" className="footerGitLinks">Kevin Young</a></span>, 2023</p>
   </footer>
    </>
  )
}

export default App
