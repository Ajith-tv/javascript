const mongoose = require('mongoose')

const adminSchema= new mongoose.Schema({
    username :String,
    password :String,
    status:{type:String,default:'0'}
})

const adminModel = mongoose.model('admin',adminSchema)

module.exports=adminModel