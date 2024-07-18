const express = require('express');
const router = express.Router()
const multer =require('multer')
const storage =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/")
    },
    filename:function(rerq,file,cb){
        cb(null,file.originalname)
    }
})
const uplod =multer({storage:storage})
const usermodel=require('../models/userModel')
const bcrypt=require('bcrypt')
const salt =1
const jwt = require('jsonwebtoken');

const createPassword=(password,salt)=>{
    let newpassword;
     bcrypt.hash(password,salt,function(err,hashpass){
        
        newpassword=hashpass;
    })
    return newpassword;
}

router.post('/register',async(req,res,next)=>{
    let{fullname,email,password,mobile}=req.body
    const  record =await usermodel.find({'email':email})
    if (record.length>0){
       return  res.json('email alreddy existing ')
    }else{
    bcrypt.hash(password,salt,function(err,hash){
        console.log(hash);
        const user=new usermodel({
            fullname,email,
            password:hash,
            mobile
        })
        user.save().then(result=>{
          return  res.send("register Successfully")
        }).catch(err=>{
            console.log(err);
           return res.send('registraion faild')
        })
        
    })
}
    })


router.post('/login',async(req,res,next)=>{
    const {email,password}=req.body
    const record =await  usermodel.find({'email':email})
    console.log(record);
    if(record.length>0){
    const hashpass = record[0].password
    bcrypt.compare(password,hashpass,function(err,resl){
        if(err){
            console.log(err);
            res.send('err')
        }else if(resl){
    
            const token = jwt.sign({data:record[0]._doc}, 'secretKey', { expiresIn: '1h' })
            console.log(token);
            res.json({status:1,msg:'login success',
                userid:record[0]._id,
                username:record[0].fullname,
                jwttoken:token
            })
            console.log('this');

        }else{
            res.json({status:0,msg:'password incoreect'})
            
        }
    })

   }else{
    
    res.json({status:0,msg:'incorect email'})
   }


})
    
   
router.post('/uplodimage',uplod.single('image'),(req,res,next)=>{
   res.json("upload successful")
})




module.exports=router