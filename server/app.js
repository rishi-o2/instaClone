const express = require('express')
const app = express()
const PORT = 5000;
require("./db/conn")
require("./models/user")
require("./models/Post")
app.use(express.json());
app.use(require("./routers/auth"))
app.use(require("./routers/signin"))
app.use(require("./routers/Post"))
app.use(require("./routers/user"))



const middleware= (req,res,next)=>{
    console.log("Middleware active")
    next()
}



app.get('/',(req,res)=>{
    res.send("hello World")
    console.log("Home")
})

app.get('/about',middleware, (req,res)=>{
    res.send("Hello About")
    console.log("Hello")
})

app.listen(PORT, ()=>{
    console.log("server is running on PORT", PORT);
})
