import React from "react";
import Dot from './Dot.jsx'


const DotView = (props) => {
    const user = props.user;
    return ( 
      <>
      <p className = "welcomeBanner" >Welcome, {user.firstName} {user.lastName}!</p>
      <div className = 'dotView'>
        
  
        {user.dots.map((dot) => (
            <Dot
            // name={{ firstName: dot.firstName, lastName: dot.lastName }}
            key = {dot.id}
            name = {dot.name}
            color={dot.color}
            numOfDates={dot.numOfDates}
          />
        
        ))}
      </div>
      </>
     );
}
 
export default DotView;