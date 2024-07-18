const jwt =require('jsonwebtoken')

function jwtverify(req,res,next){
    console.log(req.headers.token);
    jwt.verify(req.headers.token,'secretKey',(err,dtoken)=>{
        if(err)
            {
                return (err)
            }else{
                return next()
            }
    })
}

module.exports= {jwtverify}