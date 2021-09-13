const router = require("express").Router();
let Routereq = require("../../Models/Pickup/Routerequest");

// Add route
router.route("/addRoute").post((req,res)=>{

    const rid = req.body.rId;
    const PackSize = req.body.PackSize;
    const vehicleType = req.body.vehicleType;
    const destination = req.body.destination;
    const distance = req.body.distance;
    const deliveryTown = req.body.deliveryTown;
    const arrivalTime = req.body.arrivalTime;
    const date = req.body.date;


  const newRoute = new Routereq({
     
    rid,
    PackSize,
    vehicleType,
    destination,
    distance,
    deliveryTown,
    arrivalTime,
    date

  })

  newRoute.save().then(()=>{

       res.json("Route Added");

  }).catch((err) =>{
      
     console.log(err);

  })

})


//add routeReq 
router.post('/addReqRoute',(req,res)=>{

  let newroute = new Routereq(req.body);

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



//Display all routes

router.get("/allRouteReq",(req,res)=>{

  Routereq.find().exec((err,Routereq)=>{
        if(err){
            return res.status(400).json({
               error:err
           });
       }
          return res.status(200).json({
            success:true,
            existingReqRouter:Routereq
        });
    });
})


//Display all routes(function)
router.route("/allRoute").get((req, res) => {
  Routereq.find()
    .then((requests) => {
      res.json(requests);
    })
    .catch((err) => {
      console.catch.log(err);
    });
});



//Display Specific Route

router.get("/Routereq/:id",(req,res) =>{

  let postId = req.params.id;

  Routereq.findById(postId,(err,Routereq)=>{
      if(err){
          return res.status(400).json({success:false,err});
      }

      return res.status(200).json({
          success:true,
          Routereq
      })
  })
})


 //update ReqRouter
 router.put('/updateReqRoute/:id',(req,res)=>{
  
  Routereq.findByIdAndUpdate(

    req.params.id,
     {
       $set : req.body
     },

     (err,Routereq)=>{
       if(err){

         return res.status(400).json({error:err});
       }

       return res.status(200).json({
             
         success:"Update successfully"

       });
     }
  )
   
 })

 //update Router (function)
 router.route("/updateRou/:id").put(async (req, res) => {
  let Id = req.params.id;
  const { rid, PackSize, vehicleType, destination, distance, deliveryTown,arrivalTime,} = req.body;

  const updateRequest = {
    rid,
    PackSize,
    vehicleType,
    destination,
    distance,
    deliveryTown,
    arrivalTime,
    date
  };

  const update = await Routereq.findByIdAndUpdate(Id, updateRequest)
    .then(() => {
      res.status(200).send({ status: "Route is  Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with Updating request", error: err.message });
    });
});


//Delete route

 router.delete('/deleteReqRoute/:id',(req,res)=>{
  Routereq.findByIdAndRemove(req.params.id).exec((err,deletedRoute)=>{

    if(err) return res.status(400).json({
       message : "Delete Unsuccesful",err
    });

    return res.json({

        message : "Delete Successfull",deletedRoute
    });
  });

 });


module.exports = router; 