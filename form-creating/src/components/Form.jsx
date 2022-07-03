import React from 'react';
import { useState } from 'react';

const Form = () => {

    const [formData,setFormData]=useState(initData);

    const handleChange=(e)=>{
        const {value,name,type, checked} =e.target;

        const valueToUpdate = type ==="checkbox"?
                checked : value;
                
        console.log(`update ${name} with ${valueToUpdate}`)
        setFormData({
            ...formData,
            [name]: valueToUpdate
        });

        const handleSubmit=(e)=>{
            e.preventDefault();
            console.log(formData);
        }
    }
  return (
    <form onSubmit={handleSubmit}>
            <div>
                
            </div>
    </form>
  )
}

export default Form