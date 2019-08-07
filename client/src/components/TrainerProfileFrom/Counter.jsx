import React, { useState } from 'react'


export const Counter=({onChangeCounter, countvalue, countname, setname, setvalue})=>{
      
    const [count, setCount] = useState(10);
    const [Num, setNum] = useState(3);
    
    function increCount(){
      setCount(count + 1)
      countvalue = count
      onChangeCounter(countname, countvalue +1)
    };
    function decreCount(){
      setCount(count - 1)
      countvalue = count
      onChangeCounter(countname, countvalue -1)
    }

    function increSet(){
      setNum(Num + 1)
      setvalue = Num
      onChangeCounter(setname, setvalue +1)
    };
    function decreSet(){
      setNum(Num - 1)
      setvalue = Num
      onChangeCounter(setname, setvalue -1)
    }

    function inputCount(event){
      setCount(event.target.value)
      onChangeCounter(countname, event.target.value)
    };
    function inputSet(event){
      setNum(event.target.value)
      onChangeCounter(setname, event.target.value)
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
         type="text" name="set" value={Num}
         onChange={event => inputSet(event)}
       /> set 반복
        <button type="button" setname="set" value={Num} onClick={() => increSet()}>+1</button>
        <button type="button" setname="set" value={Num} onClick={() => decreSet()}>-1</button>
        </div>)
        }
 
 export default Counter