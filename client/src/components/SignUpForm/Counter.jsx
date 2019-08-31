import React, { useState } from 'react'
import { Button, Form} from 'semantic-ui-react'

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
        <div className="countAll">
        <div className="count">
        <Form.Input
        type="text" name="count" className="countInput" value={count}
        onChange={event => inputCount(event)}
        
      />  
      
        <Button type="button" countname="count" className="countBtn" value={count} onClick={() => increCount()} >+1</Button>
        <Button type="button" countname="count" className="countBtn" value={count} onClick={() => decreCount()} >-1</Button>
        <br />
        </div>

        <div>
         <Form.Input
         type="text" name="set" className="countInput" value={Num}
         onChange={event => inputSet(event)}
       />
        <Button type="button" setname="set" className="countBtn" value={Num} onClick={() => increSet()}>+1</Button>
        <Button type="button" setname="set" className="countBtn" value={Num} onClick={() => decreSet()}>-1</Button>
        </div>
        </div>)
        }
 
 export default Counter