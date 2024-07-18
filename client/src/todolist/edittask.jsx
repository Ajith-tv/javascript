import React from 'react'
import { useParams } from "react-router-dom";
import {useState,useEffect,useRef} from'react';
import AXIOS  from 'axios'

const Edittask = () => {
    const params=useParams()
    const refelemnt=useRef()
    useEffect(()=>{
        const url="http://localhost:8000/createtask/findtask" 
        AXIOS.post(url,{'_id':params.id}).then(result=>{
            console.log(result.data);
            const element=refelemnt.current
            element['taskname'].value=result.data[0].taskname
            element['taskdate'].value=result.data[0].taskdate
            element['tasktime'].value=result.data[0].tasktime
 
        }).catch(err=>{
            console.log(err);
            alert('error ocured')
        })

    },[])

    const [task,settask]=useState({})
    const handlechange=(e)=>{
        settask({...task,[e.target.name]:e.target.value})
    }
    const handlesubmit =(e)=>{
        e.preventDefault();
        const url ="http://localhost:8000/createtask/updatetask"
        const headerid={taskid:params.id}
        console.log(task);
        AXIOS.post(url,task,{headers:headerid}).then(result=>{
            alert(result.data)
        }).catch(err=>{
            console.log(err);
        })

    }

    return(
        <>
         <h1> Edit Page</h1>
         <h2>{params.id}</h2>
         <h2></h2>
         <form ref={refelemnt}
         onSubmit={handlesubmit}>
           
                
              <input 
              type="text"
              name="taskname"
              onChange={handlechange}
              
          
             />
             <input 
               type="text"
               name="taskdate"
               onChange={handlechange}
               />
               <input 
                type="text"
                 name="tasktime"
                 onChange={handlechange}
                 />
                 <button type='submit'>
                    update
                 </button>
                    
           
         </form>
        
        </>
    )
}

export default Edittask