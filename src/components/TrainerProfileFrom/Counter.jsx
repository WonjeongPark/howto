import React, { useState } from 'react'


export const Counter=({onChangeCount, countvalue, countname})=>{
      
    const [count, setCount] = useState(10);
    const [set, setSet] = useState(3);
    function increment(){
      setCount(count + 1)
      countvalue = count
      onChangeCount(countname, countvalue)
    };
    // const changeFromCount = () => {
    //   [ ]
    //   this.props.onChangeCount(countname, countvalue);
    // }
    console.log(count)
    return(
      
        <div>
        <input
        type="text" name="count" value={count}
        onChange={onChangeCount}
      />  
      회
        <button type="button" countname="count" value={count} onClick={() => increment()} >+1</button>
        <button type="button" countname="count" value={count} onClick={() => onChangeCount(countname, setCount(count - 1))} >-1</button>
        <br />

 
         <input
         type="text" name="set"
         value={set}
         onChange={event => setSet(event.target.value)}
       /> set 반복
        <button type="button" onClick={() => setSet(set + 1)}>+1</button>
        <button type="button" onClick={() => setSet(set - 1)}>-1</button>
        </div>)
        }
 
 export default Counter
