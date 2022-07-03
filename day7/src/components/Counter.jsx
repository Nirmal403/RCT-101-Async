import React from 'react'
import Child from './Child';
import { useState } from 'react';
const Counter = () => {

        const[count,setcount] =useState(0); 
        function handInc(count){
            setcount(count+1);
        }
        function handDec(count){
            setcount(count-1);
        }
  return (
    <div>
        <Child value={count}/>
        {/* <h2>Count:{count}</h2> */}
        <button onClick={handDec}>-</button>
        <button onClick={handInc}>+</button>
    </div>
  )
}

export default Counter;