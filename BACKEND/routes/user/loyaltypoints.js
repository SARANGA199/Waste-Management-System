const express = require('express');
const router = require("express").Router();
let lpoint = require("../../Models/User/LoyaltyPoint");

//Add points
router.route("/:userId/addPoints").post((req,res)=>{

    const uid = req.params.userId;
    const points = Number(req.body.points);
    const expdate = Date(req.body.expdate);

    const newPoints = new lpoint({
     
        uid,
        points,
        expdate
        
    });

    newPoints.save().then(()=>{

        res.json("Points Added");
 
   }).catch((err) =>{
       
      console.log(err);
 
   });

});

module.exports = router;
