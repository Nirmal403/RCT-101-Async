import React from "react";
import {useState } from "react";
import {useEffect} from "react";


const Counter = () => {


  const [count, setcount] = useState(0);
  
  useEffect(function calback() {
    console.log(`title has changed`);
    document.title = `Clciked ${count} times`;
  }, []);
  const handleClick = () => {
    setcount(count + 1);
  };

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;
