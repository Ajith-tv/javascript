import React from 'react';
import {jwtDecode} from "jwt-decode"
import UserNavbar from './usernav'
import { Route,Routes } from 'react-router-dom'
import Todolist from '../todolist/todolist'
import Addtask from '../todolist/addtask'
import Edittask from '../todolist/edittask'
import Profileuplode from './profileuplode';

const UserHome = () => {
   const user=jwtDecode(localStorage.getItem('token'))
   console.log(user.data);
  return (
   <>
    <UserNavbar/>
    <div><h1>userHome</h1></div>
    <h2> welcome {user.data.fullname}</h2>
    <Routes>
        <Route path="/todolist" element={<Todolist/>}></Route>
        <Route path='/addtask' element={<Addtask/>}></Route>
        <Route path='/edit/:id' element={<Edittask/>}></Route>
        <Route path='/upload' element={<Profileuplode/>}></Route>

    </Routes>
  </>
  )
}

export default UserHome