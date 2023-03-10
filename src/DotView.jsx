import React from "react";
import Dot from './Dot.jsx'

const DotView = (props) => {
    const user = props.user;
    return ( 
      <div className = 'dotView'>
        {user.dots.map((dot) => (
            <Dot
            // name={{ firstName: dot.firstName, lastName: dot.lastName }}
            key = {dot.firstName}
            name = {dot.name}
            color={dot.color}
            numOfDates={dot.numOfDates}
          />
        
        ))}
      </div>
     );
}
 
export default DotView;