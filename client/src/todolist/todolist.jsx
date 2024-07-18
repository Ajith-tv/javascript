import React, { useState,useEffect} from 'react'
import AXIOS, { Axios } from 'axios'
import {jwtDecode} from "jwt-decode"


const Todolist = () => {
  

const [record,setRecord]=useState([]);
const [search,setSearch]=useState('');
const user =jwtDecode(localStorage.getItem('token'))
useEffect(()=>{
  const url="http://localhost:8000/createtask/findtask" 
  AXIOS.post(url,search,{headers:{token:localStorage.getItem('token'),
    userid:user.data._id
  }})
  .then((res)=>{
  
    setRecord(res.data)
  })
  .catch(err=>console.log(err))
},[])

function handleDelete(id){
  const url=`http://localhost:8000/createtask/deletetask/${id}`
  AXIOS.delete(url).then((res)=> 
    {
      alert(res.data)
    }).catch((err)=>
    {
      console.log("Couldn't delete",err)
    }) 
  
   
}



  return (
    <div>

        <h1>Todolist</h1>
        <a href="/userhome/addtask">Add</a>
        <div>
          <input type="text" name='seacrh' placeholder='seacrh by taskname' onChange={(e)=>setSearch(e.target.value )} />

        </div>
        <div>
          <table border='1'>
          <tr>
                    <th>
                        Taskname
                    </th>
                    <th>
                        Date
                    </th>
                    <th>
                        Time
                    </th>
                    <th colSpan={2}>Action</th>
                </tr>

                {
                    record.filter((item)=>{
                      return item.taskname.match(search)
                    }).map((items,index)=>{
                     
                      return(
                         <tr>
                             <td>
                                 {items.taskname}
                                 <p>{items.userid.email}</p>
                             </td>
                             <td>
                                 {items.taskdate}
                             </td>
                             <td>
                                 {items.tasktime}
                             </td>
                             <td><a href={`/userhome/edit/${items._id}`}><button >Edit</button></a></td>
                             <td><button onClick={()=>{handleDelete(items._id)}}>Delete</button></td>
                         </tr>
                      )
                 })
                }
          </table>
        </div>


    </div>
  )
}

export default Todolist