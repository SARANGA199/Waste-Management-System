const express = require('express');
const router = require("express").Router();
let lpoint = require("../../Models/User/LoyaltyPoint");

//Add points
router.route("/:userId/addPoints").post((req,res)=>{

    const uid = req.params.userId;
    const uname = req.body.uname;
    const points = Number(req.body.points);
    const description = req.body.description;
    const expdate = Date(req.body.expdate);

    const newPoints = new lpoint({
     
        uid,
        uname,
        points,
        description,
        expdate
        
    });

    newPoints.save().then(()=>{

        res.json("Points Added");
 
   }).catch((err) =>{
       
      console.log(err);
 
   });

});

//Display loylaty ponits
router.get("/allpoints",(req, res) => {
  lpoint.find().exec((err,points) =>{
      if(err){
        return res.status(400).json({
          error:err
        });
      }
      return res.status(200).json({
        success:true,
        existingPoints:points
      });
    });
  });

//update request
router.route(`/updatePoints/:id`).put(async (req, res) => {
  let requestId = req.params.id;
  const {uid,points,description,expdate} = req.body;

  const updateRequest = {uid,points,description,expdate};

  const update = await lpoint.findByIdAndUpdate(requestId, updateRequest)
    .then(() => {
      res.status(200).send({ status: "Request is  Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with Updating request", error: err.message });
    });
});

//Delete loyalty points

router.route("/deletePoints/:id").delete(async (req, res) => {
  let requestId = req.params.id;
  await lpoint.findByIdAndDelete(requestId)
    .then(() => {
      res.status(200).send({ status: "Request  deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with Delete request", error: err.message });
    });
});

module.exports = router;
