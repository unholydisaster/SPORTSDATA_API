const express=require("express");
const mongoose=require("mongoose");
const app=express();
require('dotenv').config();
const sportsRoute=require('./routes/sports.js')

const PORT =process.env.PORT|| 3000

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/sports',sportsRoute);

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