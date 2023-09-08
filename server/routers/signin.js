const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model("clone");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require('../keys');
router.post('/signin',(req,res)=>{
    const{email,password} =  req.body
    if(!email||!password)
    {
        return res.status(422).json({error:"please fill all the fields"})
    }
    User.findOne({email:email})
    .then(saveduser=>{
        if(!saveduser)
        {
            return res.json({message:"Invalid email or password"})
        }
        bcrypt.compare(password,saveduser.password)
        .then(matched=>{
            if(matched)
            {
                // console.log(saveduser)
                //res.status(200).json({message:"Successfull signin"})
                const token = jwt.sign({_id:saveduser._id},JWT_SECRET)
                //console.log(token)
                const{_id,name,email}=saveduser
                res.json({token,user:{_id,name,email}});
                //localStorage.setItem(token,"token")
            }
            else{
                return res.status(422).json({error:"Invalid password"})
            }
        }).catch(e=>{
            console.log(e);
        })
    })
})



module.exports = router;
