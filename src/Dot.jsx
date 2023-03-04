import React from "react";

//The dot class manages all the properties of an individuals people on record
//It has properties such as name, color, numOfDates, progress, and so on
//The dot class renders similar to area book, with a color circle appropriate to the progress of the individual next to their name and any other information

class Dot extends React.Component{
    render(){
        const { firstName, lastName } = this.props.name;
        const { color, numOfDates } = this.props;
        return(
            <div className = "dotObject">
        <span className = "actualDot" style = {{backgroundColor: color}}></span>
        <p className = "dotName">{firstName} {lastName}</p>
          </div>
        );

    }
 
}

Dot.defaultProps = {
color: "grey",
name: {
    firstName: "Kevin",
    lastName: "Young"
},
numOfDates: 0,
}

export default Dot