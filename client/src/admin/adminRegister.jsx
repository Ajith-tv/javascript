import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { adminreg } from '../redux/adminslice'

const AdminRegister = () => {
  const [admin,setAdmin]=useState({})
  const dispatch=useDispatch( )
  const handlechnage=(e)=>{
    setAdmin({...admin,[e.target.name]:e.target.value})

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(adminreg(admin))
  }
  return (
    <div>

      <h1>admin register</h1>
      <p>
        <input type="text" placeholder='username' name='username' onChange={handlechnage} required />
      </p>
      <p>
        <input type="password" placeholder='password' name='password' onChange={handlechnage} required />
      </p>
      <button type='button' onClick={handleSubmit}> register</button>
    </div>
  )
}

export default AdminRegister