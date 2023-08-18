const mongoose= require("mongoose");
const validator= require("validator");


const instaclone= new mongoose.Schema({
    name:{
        type:String,
         required:true,
        trim:true
    },
    // profession:{
    //     type:String,
    //      required:true,
    //     trim:true
    // },
   
    //  phone:{
    //      type:String,
    //       required:true,
    //      unique:true,
    //      min:10,
        
    //  },
    
   
    email:{
        type:String,
         required:true,
        unique:[true,"Email already used"],
        validate(value)
        {
          if(!validator.isEmail(value))
          {
              throw new Error("Invalid email");
          }

        }
      },
      password:{
        type:String,
         required:true
      },
    //  cpassword:{
    //     type:String,
    //      required:true
    //   },
      
       
})





mongoose.model("clone",instaclone);
