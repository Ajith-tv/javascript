const express = require('express')
const router=express.Router()
const adminModel=require('../models/adminModel')


router.post('/register',(req,res,next)=>{
console.log(req.body);
    adminModel.create({...req.body,"status":"1"}).then(result=>{
        return res.json({msg:"admin registraion sucess"})
    }).catch(err=>{
        return res.json({masg:"admin registraion failed"})
        console.log(err);
    })
})
router.post('/login',async(req,res,next)=>{
console.log(req.body);
const {username,password}=req.body
    const record=await adminModel.find({username,password})
    console.log(record);
    if(record.length>0){
        res.json({status:1})
    }else{
        res.json({status:0})
    }
})

module.exports=router