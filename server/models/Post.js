const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    likes:[{type:ObjectId, ref:"clone"}],
    comments:[{
        text:String,
        PostedBy:{type:ObjectId, ref:"clone"}
    }],
    PostedBy:{
       type:ObjectId,
       ref:"clone"
    }
})

mongoose.model("Post",postSchema)