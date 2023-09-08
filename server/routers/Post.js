const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin  = require('../middleware/requireLogin')
const Post =  mongoose.model("Post")
const User = mongoose.model("clone")

router.get("/allpost",requireLogin,(req,res)=>{
    Post.find()
     //.populate("postedBy")
     .populate("PostedBy","_id name")
    //  .populate("comments.postedBy","_id name")
    //  .sort('-createdAt')
     .then((posts)=>{
         res.json({posts})
     }).catch(err=>{
         console.log(err)
     })
})
router.get("/mypost",requireLogin,(req,res)=>{
    Post.find({PostedBy:req.user._id})
    .populate("PostedBy","_id name")
    .then(mypost=>{
        res.json({mypost})
         console.log("mypost")
         console.log(mypost)
    })
    .catch(err=>{
        console.log(err)
    })
})




router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body, pic} = req.body 
    if(!title || !body|| !pic){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    //req.user.password = undefined
    
    const post = new Post({
        title,
        body,
        photo:pic,
        PostedBy:req.user
    })
    console.log(post.PostedBy)
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.put('/like', requireLogin, (req, res) => {
    console.log(req.body.postId)
    Post.findByIdAndUpdate(
        req.body.postId,
        {
            $push: { likes: req.user._id }
        },
        {
            new: true
        }
    )
    .then(result => {
        res.json(result);
        console.log(result);
    })
    .catch(err => {
        res.status(422).json({ error: err });
    });
});


router.put('/unlike', requireLogin, (req, res) => {
    console.log(req.body.postId)
    Post.findByIdAndUpdate(
        req.body.postId,
        {
            $pull: { likes: req.user._id }
        },
        {
            new: true
        }
    )
    .then(result => {
        res.json(result);
        console.log(result);
    })
    .catch(err => {
        res.status(422).json({ error: err });
    });
});

router.put('/comment', requireLogin, (req, res) => {
    //console.log(req.body.postId)
    const comment = {
        text : req.body.text,
        PostedBy:req.user._id
    }
    Post.findByIdAndUpdate(
        req.body.postId,
        {
            $push: { comments : comment }
        },
        {
            new: true
        }
    ).populate("comments.PostedBy","_id name")
    .populate("PostedBy", "_id name")
    .then(result => {
        res.json(result);
        //console.log(result);
    })
    .catch(err => {
        res.status(422).json({ error: err });
    });
});
router.delete("/deletepost/:postid",requireLogin,(req,res)=>{
    console.log("delet is being called")
    console.log(req.params.postid)
    Post.findOne({_id:req.params.postid})
    .populate("PostedBy","_id")
    .then(post=>{
        console.log(post)
        if(post.PostedBy._id.toString() === req.user._id.toString() )
        {
            post.remove()
            .then(result=>{
                res.json({result})
            }).catch(e=>{
                console.log(e)
            })
        }
    })
})



module.exports = router