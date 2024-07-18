import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AXIOS from 'axios'

const initialState={
    value:{}
}


export const addtask =createAsyncThunk(
    'task/addtasks',
    async(payload,{rejectWithValue})=>{
        const respone=await AXIOS.post('http://localhost:8000/createtask/addtask',payload)
        console.log(respone);
        return respone.data
    }
)

export const taskslice=createSlice({
    name:'task',
    initialState,
    reducers:{
        addtasks:(state,action)=>{
            state.value=action.payload
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(addtask.fulfilled,(state,action)=>{
               console.log(action.payload);
            alert(action.payload)
    })
    }
})

export const {addtasks}= taskslice.actions
export default taskslice.reducer