import React, { useState } from 'react'


    const Counter = () => {
    const [set1, set1Time] = useState(10);
    const [set2, set2Time] = useState(3);
    console.log(this.state)
    
    return(
        <div><div>{set1}번 {set2}세트 반복</div>
        <button onClick={() => set1Time(set1 + 1)}>+1</button>
        <button onClick={() => set1Time(set1 - 1)}>-1</button>
        <button onClick={() => set2Time(set2 + 1)}>+1</button>
        <button onClick={() => set2Time(set2 - 1)}>-1</button>    
        </div>)}
 
 export default Counter