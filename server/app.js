const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

require("./db/conn");
require("./models/user");
require("./models/Post");

// Configure CORS to allow requests from specific origin
app.use(cors({
    origin: 'https://new-insta-oq6x.vercel.app/', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

app.use(require("./routers/auth"));
app.use(require("./routers/signin"));
app.use(require("./routers/Post"));
app.use(require("./routers/user"));

const middleware = (req, res, next) => {
    console.log("Middleware active");
    next();
};

app.get('/', (req, res) => {
    res.send("Hello World");
    console.log("Home");
});

app.get('/about', middleware, (req, res) => {
    res.send("Hello About");
    console.log("Hello");
});

app.get('/message', (req, res) => {
    res.send("Successfull");
});

app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
});
