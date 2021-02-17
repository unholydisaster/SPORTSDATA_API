const mongoose=require('mongoose');

//league schema
const LeagueSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:40
    }
})
module.exports=new mongoose.model('League',LeagueSchema);