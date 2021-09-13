const router = require("express").Router();
let Received = require("../../Models/Pickup/ReceivedItem");

//Add Received Items
router.post('/addReceived',(req,res)=>{

    let newroute = new Received(req.body);
  
    newroute.save((err)=>{
       if(err){
           
         return res.status(400).json({
           error:err
         });
       }
  
       return res.status(200).json({
          success : "Posted Save Successfully"
       });
    });
  });
  

  //Display details
router.route("/displayReceived").get((req, res) => {
    Received.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.catch.log(err);
      });
  });


  
//delete orderRoute

router.delete('/deleteRitems/:id',(req,res)=>{
    Received.findByIdAndRemove(req.params.id).exec((err,deletedRoute)=>{
  
      if(err) return res.status(400).json({
         message : "Delete Unsuccesfull",err
      });
  
      return res.json({
  
          message : "Delete Successfull",deletedRoute
      });
    });
  
   });
  
   module.exports = router;