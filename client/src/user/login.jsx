import React, { useState } from 'react'
import AXIOS  from 'axios'
import { useNavigate } from 'react-router-dom'

const salt =10

const Login = () => {
  const nav =useNavigate()
  const[user,setuser]=useState({})
  const handlechange=(e)=>{
    setuser({...user,[e.target.name]:e.target.value})

  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    const url='http://localhost:8000/user/login'
    AXIOS.post(url,user).then(result=>{
      if(result.data.status==1){
        alert(result.data.msg)
       
        localStorage.setItem('token',result.data.jwttoken)
        console.log('herree');
        nav("/userhome")
      }else{
        alert(result.data.msg)
      }
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
   <>
   <h1>Login</h1>
   <form method='post' onSubmit={handlesubmit}>
    <input type="email" name="email" placeholder='enter your email' onChange={handlechange}/>
    <input type="password" name="password" placeholder='enter paswword' onChange={handlechange}/>
    <button type='submit'>submit</button>
   </form>
   </>
  )
}

export default Login