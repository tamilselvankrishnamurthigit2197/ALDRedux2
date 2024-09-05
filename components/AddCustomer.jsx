import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addNCustomer } from '../src/slices/customerSlice';

const AddCustomer = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch();

    function addCustomer(){
        if(input){
            dispatch(addNCustomer(input));
            setInput("")
        }
    }
  return (
    <div>
        <h1>Add New Customer</h1>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={addCustomer}>Add</button>
    </div>
  )
}

export default AddCustomer