import React, { useState } from 'react'
import AXIOS  from 'axios'
import { useNavigate } from 'react-router-dom'

const salt =10

const Register = () => {
  const nav=useNavigate()
  const[user,setuser]=useState({})
  const handlechange=(e)=>{
    setuser({...user,[e.target.name]:e.target.value})

  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    const url='http://localhost:8000/user/register'
    AXIOS.post(url,user).then(result=>{
      alert(result.data)
      nav('/login')
    
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
   <>
   <h1>Register</h1>
   <form method='post' onSubmit={handlesubmit}>
    <input type="text" name="fullname" placeholder='enter your fullnmae' onChange={handlechange}/>
    <input type="email" name="email" placeholder='enter your email' onChange={handlechange}/>
    <input type="password" name="password" placeholder='enter paswword' onChange={handlechange}/>
    <input type="tel" name="mobile" placeholder='enter your phonemunber' onChange={handlechange}/>
    <button type='submit'>submit</button>
   </form>
   </>
  )
}

export default Register