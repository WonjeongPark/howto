import React, { useState } from 'react'


    function Counter(){
    const [count, setCount] = useState(10);
    const [set, setSet] = useState(3);
    // console.log(set1)
    
    return(
        <div>
        {/* <div>{count}번 {set} set 반복</div> */}
        <input
        type="text"
        name="count"
        value={count}
        onChange={event => setCount(event.target.value)}
      /> 
      회 
        <button  type="button" onClick={() => setCount(count + 1)}>+1</button>
        <button  type="button" onClick={() => setCount(count - 1)}>-1</button><br />
        <input
        type="text"
        name="set
        "
        value={set}
        onChange={event => setSet(event.target.value)}
      /> set 반복
        <button type="button" onClick={() => setSet(set + 1)}>+1</button>
        <button type="button" onClick={() => setSet(set - 1)}>-1</button>
        </div>)}
 
 export default Counter