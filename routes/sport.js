const express=require('express');
const router=express.Router();
const {Sports}=require('../models/sports')

//post:create a new book
router.post('/',(req,res)=>{
       
    sport=new Sports({
        hometeam:req.body.homeTeam,
        awayteam:req.body.awayTeam,
        league:{
            name:req.body.leagueName
        },
        pick:req.body.pickTip
    });
    sport.save().then(sport=>{
        res.send(sport);
    }).catch(error=>{
        res.status(500).send("sport was not stored")
    })
})

module.exports=router;