import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
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
   <Box>
    <Grid justifyContent={'center'}>
    <form method='post' onSubmit={handlesubmit}>

   <Stack spacing={2} direction="column" width={'300px'}>
  
   <TextField id="outlined-basic"  variant="outlined" type="text" name="fullname" label='enter your fullnmae' onChange={handlechange}/>
   <TextField id="outlined-basic"  variant="outlined" type="email" name="email" label='enter your email' onChange={handlechange}/>
   <TextField id="outlined-basic"  variant="outlined" type="password" name="password" label='enter paswword' onChange={handlechange}/>
   <TextField id="outlined-basic"  variant="outlined" type="tel" name="mobile" label='enter your phonemunber' onChange={handlechange}/>
    <Button variant="contained" type='submit'>submit</Button>
 
   </Stack>
     </form>
     </Grid>
     </Box>
   </>
  )
}

export default Register