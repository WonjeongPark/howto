import React, { Component } from 'react'
import ReactDOM from 'ReactDOM'

let days = [ 
 
    {name:"Monday"}, 
 
    {name:"Tuesday"}, 
 
    {name:"Wednesday"}, 
 
    {name:"Thursday"}, 
 
    {name:"Friday"}, 
 
    {name:"Saturday"}, 

    {name:"Sunday"}, 
 
]; 
 

 
class Schedule extends Component { 
 
    constructor(){ 
 
     super(); 
 
     this.state={ 
 
      "Monday": {"start": 0, "end": 0, "available": true}, 
 
      "Tuesday": {"start": 0, "end": 0, "available": true}, 
 
      "Wednesday": {"start": 0, "end": 0, "available": true}, 
 
      "Thursday": {"start": 0, "end": 0, "available": true}, 
 
      "Friday": {"start": 0, "end": 0, "available": true}, 
 
      "Saturday": {"start": 0, "end": 0, "available": true}, 

      "Sunday": {"start": 0, "end": 0, "available": true}
 
     } 
 
    } 
 
    
 
    handleDayChange(value, dayName){ 
 
     let obj = {...this.state[dayName]}; 
 
     obj.available = value; 
 
     this.setState({[dayName]: obj}); 
 
    } 
 

 
    render() { 
 
     const dayComponents = this.props.days.map(day => 
 
      <Day 
 
       key={day.name} 
 
       startTime={this.state[day.name].start} 
 
       endTime={this.state[day.name].end} 
 
       available={this.state[day.name].available} 
 
       name={day.name} 
 
       handleDayChange={(value, dayName) => this.handleDayChange(value, dayName) } 
 
      /> 
 
     ) 
 
     return (
 
      <div> 
 
       {dayComponents} 
 
      </div> 
 
     ); 
 
    } 
 
} 
 

 
class Day extends React.Component { 
 
    constructor(props){ 
 
     super(props) 
 
     this.state = { 
 
     } 
 
     this.handleAvailableChange = this.handleAvailableChange.bind(this); 
 
    } 
 

 
    handleAvailableChange(e){ 
 
     this.props.handleDayChange(e.target.checked, this.props.name); 
 
    } 
 

 
    render(){ 
 
     let values = this.props; 
 
     return (
 
      <div className='day'> 
 
       <label className='name'> 
 
        {values.name} 
 
        <input 
 
         type='checkbox' 
 
         checked={values.available} 
 
         onChange={this.handleAvailableChange} 
 
        /> 
 
       </label> 
 
       {values.available + ""} 
 
      </div> 
 
     ); 
 
    } 
 
} 



 
ReactDOM.render(<Schedule days={days}/>, document.getElementById('app'))