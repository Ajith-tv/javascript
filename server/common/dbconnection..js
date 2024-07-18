const mongoos=require('mongoose')
mongoos.connect('mongodb://localhost:27017/firstclass').then(res=>{console.log('db connected ');}).catch(err=>{console.log(err,'error occured');})