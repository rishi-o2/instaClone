const mongoose= require("mongoose");
mongoose
  .connect(
    "mongodb+srv://rishiind94:giPa4bW8aSJFhvQ2@cluster0.vzbfqig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("connection successfull....."))
  .catch((err) => console.log(err));
