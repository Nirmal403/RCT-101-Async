import React from 'react';

function Total({total}){
  return (
    <div style={{
      border: "1px solid tomato",
      width: "120px",
      margin: "auto",
      backgroundColor: "tomato",
      color: "white",
      padding: "0.5rem",
      fontSize: "20px"
    }}>Total: ₹ {total}</div>
  )
}

export default Total;