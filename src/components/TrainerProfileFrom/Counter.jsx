import React, { useState } from 'react'


    function Counter(){
    const [count, setcount] = useState(10);
    // const [set2, set2Time] = useState(3);
    // console.log(set1)
    
    return(
        <div><div>{count}번 반복</div>
        <button onClick={() => setcount(count + 1)}>+1</button>
        <button onClick={() => setcount(count - 1)}>-1</button>
        {/* <button onClick={() => set2Time(set2 + 1)}>+1</button>
        <button onClick={() => set2Time(set2 - 1)}>-1</button>     */}
        
        </div>)}
 
 export default Counter