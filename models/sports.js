const mongoose =require('mongoose')



//sports schema
const SportSchema=new mongoose.Schema({
    hometeam:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
    awayteam:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
    league:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50

    },
    pick:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    }
});

module.exports=new mongoose.model('Sport',SportSchema);
