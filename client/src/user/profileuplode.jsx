import { useState } from "react"
import React from 'react'
import AXIOS  from 'axios'
import { jwtDecode } from 'jwt-decode';
const Profileuplode = () => {

    const [profile,setProfile]=useState({})
    const token =localStorage.getItem('token')
    const user=jwtDecode(token)
    console.log(user);
    console.log(user.data._id);
    const handlechange =(name,value)=>{
        setProfile({...profile,[name]:value})
    }
    const formdata= new FormData()
    const handleSubmit=(e)=>{
        e.preventDefault()
        formdata.append('image',profile.image)
        formdata.append('imagename',profile.imagename)
        AXIOS.post('http://localhost:8000/user/uplodimage',formdata,
            {
                headers:{
                    'Content-Type':'multipart/form-data',
                    'userid': user.data._id
                } }).then(result=>{
                    alert(result.data)
                }).catch(err=>{
                    console.log(err);
                })

    }
  return (
  <>
    <form method='post' encType='multipart/form-data' onSubmit={handleSubmit} >
        <p>
            <input  type="file" name="image" 
            onChange={(e)=>{
                handlechange(e.target.name,e.target.files[0])
            }}/> 
        </p>
        <p>
            <input  type="text" 
            name="imagename"
            onChange={(e)=>{
                handlechange(e.target.name,e.target.value)
            }}
          
            />
        </p>
        <p>
            <button type="submit">
                Upload
            </button>
        </p>
      </form>
  
  </>)
}

export default Profileuplode