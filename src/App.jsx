import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DotView from './DotView.jsx'

function App() {
let testProps = {firstName: "Kevin", lastName: "Bailey"};
const testUser = {
  firstName: 'Kevin',
  lastName: 'Bailey',
  id: 1234,
  dots: [{
    color: "#AAAAAA",
    name: {
        firstName: "Kevin",
        lastName: "Young"
    },
    numOfDates: 1,
    },
    {
      color: "#FFF171",
      name: {
          firstName: "Jamie",
          lastName: "Bailey"
      },
      numOfDates: 109,
      },
      {
        color: "#005358",
        name: {
            firstName: "Savannah",
            lastName: "Bjorkman"
        },
        numOfDates: 15,
        },
        {
          color: "green",
          name: {
              firstName: "Jane",
              lastName: "Doe"
          },
          numOfDates: 420,
        }
  ]
}
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
