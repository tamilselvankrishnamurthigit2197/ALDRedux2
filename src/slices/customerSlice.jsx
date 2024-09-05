import {createSlice} from '@reduxjs/toolkit'

/* initial state Needed */

const initialState = [];

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers:{
        addNCustomer (state, action){
            state.push(action.payload);
        },
        deleteNCustomer(state, action){
            const deleteIndex = action.payload;
            return state.filter((val, index)=> index !== deleteIndex);
        }
    }
})

export const {addNCustomer, deleteNCustomer} = customerSlice.actions;

export default customerSlice.reducer;