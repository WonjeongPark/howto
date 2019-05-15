import React, { useState } from 'react'


export const Counter=({onChangeCount, countvalue, countname, setname, setvalue})=>{
      
    const [count, setCount] = useState(10);
    const [set, setSet] = useState(3);
    
    function increCount(){
      setCount(count + 1)
      countvalue = count
      onChangeCount(countname, countvalue +1)
    };
    function decreCount(){
      setCount(count - 1)
      countvalue = count
      onChangeCount(countname, countvalue -1)
    }

    function increSet(){
      setSet(set + 1)
      setvalue = set
      onChangeCount(setname, setvalue +1)
    };
    function decreSet(){
      setSet(set - 1)
      setvalue = set
      onChangeCount(setname, setvalue -1)
    }

    function inputCount(event){
      setCount(event.target.value)
      onChangeCount(countname, event.target.value)
    };
    function inputSet(event){
      setSet(event.target.value)
      onChangeCount(setname, event.target.value)
    };
    // console.log(set)
    return(
      
        <div>
        <input
        type="text" name="count" value={count}
        onChange={event => inputCount(event)}
      />  
      회
        <button type="button" countname="count" value={count} onClick={() => increCount()} >+1</button>
        <button type="button" countname="count" value={count} onClick={() => decreCount()} >-1</button>
        <br />

 
         <input
         type="text" name="set" value={set}
         onChange={event => inputSet(event)}
       /> set 반복
        <button type="button" setname="set" value={set} onClick={() => increSet()}>+1</button>
        <button type="button" setname="set" value={set} onClick={() => decreSet()}>-1</button>
        </div>)
        }
 
 export default Counter
