import React from 'react';
import AXIOS from'axios'
import { useState } from 'react'
import {jwtDecode} from "jwt-decode"
import { useDispatch,useSelector } from 'react-redux'
import {addtask} from '../redux/taskslice'

const Addtask = () => {
    const dispatch=useDispatch( )
    const user=jwtDecode(localStorage.getItem('token'))
    // console.log("user999",user.data._id);
    const header={
        token:localStorage.getItem('token'),
        userid:user.data._id
    }
    // console.log(header);

const[task,setTask]=useState({})
const handlecahnge =(e)=>{
    setTask ({...task,[e.target.name]:e.target.value})

}
const handleSubmmit=(e)=>{
    e.preventDefault();
    dispatch(addtask(task))
    // console.log(task);
    // AXIOS.post('http://localhost:8000/createtask/addtask',task,{headers:header}).then(res=>{
    //     alert(res.data)
    // }).catch(err=>{
    //     console.log(err);
    // })
}
  return (
    <>
    <h1>Add Taskk</h1>
    <form onSubmit={handleSubmmit} method='post'>
        <input type="text" name='taskname' placeholder='Task Name' required onChange={handlecahnge}/>
         <input type="date" name="taskdate" required onChange={handlecahnge}/>
         <input type="time" name="tasktime"  required onChange={handlecahnge} />
         <button type="submit">Creat Task</button>
         
    </form>
    
    </>
    
  )
}

export default Addtask