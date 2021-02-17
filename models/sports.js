const mongoose =require('mongoose')
const League=require('./leagues')


//sports schema
const SportSchema=new mongoose.Schema({
    hometeam:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
    awayteam:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
    league:League.schema,
    pick:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    }
});

module.exports=new mongoose.model('Sports',SportSchema);
