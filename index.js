const express=require("express");
mongoose=require("mongoose");
const app=express();
require('dotenv').config();

const PORT =process.env.PORT|| 3000
//connect to mongo db
mongoose.connect(process.env.MONGO_URL,
{useNewUrlParser:true}
)
.then(()=>{
    console.log("connected to mongodb atlas")
}).catch(error =>{
    console.log("errors",error)
})

//start server
app.listen(PORT,()=>{
    console.log("server started at PORT",PORT);
})