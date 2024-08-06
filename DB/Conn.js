const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sultanhuzaifa0:12345@huzaifasultan.3wryeup.mongodb.net/aine-test").then(()=>{
    console.log("Connected to DB");
}).catch((e)=>{
    console.log(e);
})