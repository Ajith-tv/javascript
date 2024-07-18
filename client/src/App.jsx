import Hompage from "./todolist/hompage"
import Navbar from "./todolist/navbar"

import{  Route,Routes} from 'react-router-dom'
import Todolist from "./todolist/todolist"
import Addtask from "./todolist/addtask"
import Edittask from "./todolist/edittask"
import Register from "./user/register"
import Login from "./user/login"
import UserHome from "./user/userHome"
import AdminRegister from "./admin/adminRegister"
import Adminlogin from "./admin/adminlogin"

function App() {
 

  return (
    <>
   
   
    
    <Routes>
      <Route path='/' element={<Hompage/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path ='/login' element={<Login/>}></Route>
      <Route path='/userhome/*' element={<UserHome/>}></Route>
      <Route path='/adminRegister' element={<AdminRegister/>}></Route>
      <Route path='/adminLogin' element={<Adminlogin/>}></Route>
    </Routes>
     
    </>
  )
} 

export default App
