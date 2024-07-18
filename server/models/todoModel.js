const mongoos =require('mongoose')
const userrModel=require('./userModel')

let todoSchema = new  mongoos.Schema({
    userid:{type:mongoos.Schema.Types.ObjectId,ref:userrModel},
    taskname:String,
    taskdate:String,
    tasktime:String
})

const todomodel =mongoos.model('/todo',todoSchema)
module.exports=todomodel