import React from "react";
import { Link }  from 'react-router-dom';
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
        <div className ="dotInformation">
            <Link to = "/dot" className = "dotLink">
        <p className = "dotName">{firstName} {lastName}</p>
        </Link>
        <p className = "lastDate">Number of Dates: {numOfDates}</p>
        </div>
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