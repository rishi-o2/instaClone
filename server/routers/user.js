const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin  = require('../middleware/requireLogin')
const Post =  mongoose.model("Post")
const User = mongoose.model("clone")

router.get("/user/:id", requireLogin, (req, res) => {
    console.log("I am being called");
    User.findOne({ _id: req.params.id })
      .select("-password")
      .then(user => {
        Post.find({ PostedBy: req.params.id })
          .populate("PostedBy", "_id name")
          .then(posts => {
            res.json({ user, posts }); // Send a single JSON response object
          })
          .catch(e => {
            console.log(e);
            res.status(500).json({ error: "Internal Server Error" }); // Handle errors
          });
      })
      .catch(e => {
        console.log(e);
        res.status(500).json({ error: "Internal Server Error" }); // Handle errors
      });
  });
  
module.exports = router

