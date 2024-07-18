import React,{useState} from 'react'
import { adminLogin } from '../redux/adminslice'
import { useDispatch,useSelector } from 'react-redux'
export default function Adminlogin() {
    const dispatch=useDispatch()
    const adminstatus=useSelector(state=>state.admincounter.adminLogin)
    const [admin,setAdmin]=useState({})
    const handleChange=(e)=>{
        setAdmin({...admin,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
         dispatch(adminLogin(admin))
    }
  return (
    <div>
       <h1> Admin Login</h1>
       <p>
        <input 
         type="text"
         placeholder='username'
         name="username"
         onChange={handleChange}
         value={admin.username}
         required/>
       </p>
       <p>
        <input 
         type="password"
         placeholder='password'
         name="password"
         onChange={handleChange}
         value={admin.password}
         required/>
       </p>
       <p>
        <button 
         type="button"
         onClick={handleSubmit}
         >
          Login
         </button>
       </p>

       {adminstatus?"Login success" :" not  Login"}
    </div>
  )
}