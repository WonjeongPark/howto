import React, { useState } from 'react'


    function Counter(){
    const [count, setCount] = useState(10);
    const [set, setSet] = useState(3);
    
    // function countPlus() {
    //   this.props.setCount(count)
    // }
    const increment = () => {
      setCount(count + 1)
    }
    const decrement = () => {
      setCount(count - 1)
    }



    return(
        <div>
        <div>{count}번 {set} set 반복</div>
        <input
        type="text"
        name="count"
        value={count}
        onChange={event => setCount(event.target.value)}
      />  
      회
        <button  type="button" onClick={increment} count={count}>+1</button>
        <button  type="button" onClick={decrement} count={count}>-1</button>
        <br />

 
         <input
         type="text"
         name="set"
         value={set}
         onChange={event => setSet(event.target.value)}
       /> set 반복
        <button type="button" onClick={() => setSet(set + 1)}>+1</button>
        <button type="button" onClick={() => setSet(set - 1)}>-1</button>
        </div>)
        }
 
 export default Counter
