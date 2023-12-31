const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const mongoose = require('mongoose')
const User = mongoose.model("clone")
module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    //authorization === Bearer ewefwegwrherhe
    if(!authorization){
       return res.status(401).json({error:"you must be logged in"})
    }
     const token = authorization.replace("Bearer ","")
     //console.log(token);
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err){
         return   res.status(401).json({error:"you must be logged in hehe"})
        }

        const {_id} = payload
        User.findById(_id).then(userdata=>{
            req.user = userdata
            //console.log(userdata)
            next()
        })
        
        
    })
}
