const express =require('express')
const app=express()
const cors=require('cors')
app.use(cors())
const db =require('./common/dbconnection.')
const todoRoute= require('./routes/addtask')
const userRoute =require('./routes/userr')
const adminRoute=require('./routes/admin')
app.listen(8000)
app.use(express.urlencoded({extended:true}))
app.use(express.json())
 



app.use('/user',userRoute);
app.use('/admin',adminRoute);
// const jwtverify=require('./common/auth')
// app.use(jwtverify())
app.use('/createtask',todoRoute)