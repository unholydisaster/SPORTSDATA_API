const express=require('express');
const router=express.Router();
const Sport=require('../models/sports')

//post:create a new book
router.post('/',(req,res)=>{   
    sport = new Sport({
        hometeam:req.body.homeName,
        awayteam:req.body.awayName,
        league:req.body.leagueName,
        pick:req.body.pickTip
    });
    sport.save().then((sport)=>{
        res.send(sport);
    }).catch((error) =>{
        res.status(500).send("Sport was not stored");
    });
});

module.exports=router;