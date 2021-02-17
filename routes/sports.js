const express=require('express');
const router=express.Router();
const {Sport,validateSport}=require('../models/sports')

//post:create a new book
router.post('/', async(req,res)=>{   
    const error=await validateSport(req.body);
    if(error.message)res.status(400).send(error.message)

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