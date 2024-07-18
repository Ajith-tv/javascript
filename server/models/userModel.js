const mongoos = require('mongoose')
const userSchema =new mongoos.Schema({
    fullname:String,
    email:String,
    password:String,
    mobile:String
},{timestamps:true})

const usermodel = mongoos.model("user_tb",userSchema)
module.exports=usermodel