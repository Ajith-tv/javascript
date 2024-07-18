import React from 'react'
import { useNavigate } from 'react-router-dom'



function UserNavbar() {
    const nav =useNavigate()
  return (
    <>

    <a href="/userhome">Home</a>
    <a href="/userhome/todolist">Todolist</a>
    <a onClick={()=>{
      localStorage.clear()
        nav("/")
    }}>logout</a>

    
    </>
  )
}

export default UserNavbar