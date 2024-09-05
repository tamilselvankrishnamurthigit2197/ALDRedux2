import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { deleteNCustomer } from "../src/slices/customerSlice";

export default function ViewCustomer(){
    const customersList = useSelector((state)=>state.customers);
    const dispatch = useDispatch()

    function deleteHandler(index){
        dispatch(deleteNCustomer(index));
    }
    return(
        <div>
            <h3>Customers List</h3>
            <ul style={{listStyle:'none'}}>
                {
                    customersList.map((customer, index)=>(
                        <li key={index}>
                            {customer}&nbsp;
                            <button onClick={()=>deleteHandler(index)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}