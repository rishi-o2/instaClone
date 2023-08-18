const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model("clone");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../keys");
const requirelogin = require("../middleware/requireLogin")


router.get("/",(req,res)=>{
    res.send("Hello");
})
router.get("/protected",requirelogin,(req,res)=>{
    res.send("Hello USer");
})
router.post("/signup",(req,res)=>{
       const {name,email,password} =  req.body;
       if(!name || !email || !password)
       {
        return res.status(422).json({error:"please add all the fields"})
       }
       User.findOne({email:email})
       .then((saveduser)=>{
        if(saveduser)
        {
            return res.status(422).json({error:"user already exists"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                email,
                password:hashedpassword,
                name
            })
            user.save()
            .then(user=>{
                return res.json({message:"saved successfully"})
            }).catch(err=>{
                console.log(err)
            })
           }).catch(e=>{
            console.log(e)
           })

        })
        
      
    })
       
        

module.exports = router;
