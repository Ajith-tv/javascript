import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import AXIOS from 'axios'

const initialState={
    value:0,
    adminLogin:false,
}


export const adminLogin=createAsyncThunk('admincounter/adminLogin',async(payload,{rejectWithValue})=>{
    try{
        const  response=await AXIOS.post("http://localhost:8000/admin/login",payload)
        return response.data
    }
    catch(err){
        rejectWithValue(err.response)
    }

})



export const adminreg=createAsyncThunk('admincounter/adminreg',
    async(payload,{rejectWithValue})=>{
    const respone=await AXIOS.post('http://localhost:8000/admin/register',payload)
    console.log(respone.data.msg);
     alert(respone.data.msg) 
     
    }
)

export const adminSlice=createSlice({
    name:'admincounter',
    initialState,
    reducers:{
        logout:(state)=>{
              alert("logout")
        }
    },
    extraReducers:(builder)=>{
       builder 
        .addCase(adminreg.fulfilled,(state,action)=>{
               
                alert(action.payload.msg)
        })
        .addCase(adminreg.rejected,(state,action)=>{
            
        })
        .addCase(adminLogin.fulfilled,(state,action)=>{
            let  status=action.payload.status;
            console.log(status);
            if(status==1){
                alert("Login Success")
                state.adminLogin=true;

            }
            else{
                alert("Login faild")
            }
        })
        .addCase(adminLogin.rejected,(state,action)=>{
            let res=action.payload.msg;
            alert(res)
        })
    }
})

export const {logout}= adminSlice.actions
export default adminSlice.reducer