const express = require('express');
const router = express.Router()
const jwtverify=require('../common/auth')

const todomodel=require('../models/todoModel')


router.post('/addtask',(req,res,next)=>{
    req.body.userid=req.headers.userid;
   
 console.log('2nd',req.body);
 
    todomodel.create(req.body).then(ressult=>{
        res.send('task added')
    }).catch(err=>{
        console.log(err);
        res.send('task add failed')
    })

})

router.post('/findtask',(req,res,next)=>{

    console.log(req.headers.userid);

    todomodel.find({userid:req.headers.userid}).populate('userid').then(result=>{
        res.send(result)
    }).catch(err=>{
        res.send('tsak not found')
    })

})


router.delete('/deletetask/:id',async(req,res,next)=>{
    const id=req.params.id
    try {
       await todomodel.deleteOne({'_id':id})
    
    } catch (error) {
        console.log(error);
        res.send(error)
    }
    res.send('deleted')

})


router.post('/updatetask',async(req,res,next)=>{
    const id=req.headers.taskid;
    console.log('payload',req.body)
    try {
        await todomodel.updateOne({_id:id},req.body)
    } catch (error) {

        console.log(error);

        res.send('eroor ocuured')
        
    }
    res.send('data updated')

}) 

module.exports=router