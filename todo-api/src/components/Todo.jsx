import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Todo = () => {
    const [data,setdata] =useState([]);
    
    const getTodos= async()=>{
        try{
            let data = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10`)
            data =  await data.json();
            console.log(data)
            setdata(data);
        }  
        catch(err){
                console.log("err:",err)
        }

 }
 useEffect(()=>{
        getTodos()
    },[])

  return (
    <div>
        <h1>Todos</h1>
        <button onClick={getTodos}>Fetch</button>
        <div>
            {
                data.map(todo=>
                    <div style={{display:"flex", gap:"1rem",margin:"0.5rem"}}key={todo.id}>
                        <div>{todo.id}</div>
                        <div>{todo.title}</div>
                        <div>{todo.status?"Done":"Not Done"}</div>
                        {todo.title}
                    </div>
                )      
            }
        </div>
    </div>
  )
}

export default Todo;