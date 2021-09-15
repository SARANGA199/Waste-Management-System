const router = require("express").Router();
let Driver = require("../../Models/Delivery/FreelanceDriver");

//Register Driver
router.route("/:dId/reg").post((req, res) => {

    const userId = req.params.dId;
    const licenseId = req.body.licenseId;
    const nearbyTown = req.body.nearbyTown;
    const vehicleNo = req.body.vehicleNo;
    const vehicleType = req.body.vehicleType;
    const licenseImg1 = req.body.licenseImg1;
    const licenseImg2 = req.body.licenseImg2;

    const regDriver = new Driver({

        userId,
        licenseId,
        nearbyTown,
        vehicleNo,
        vehicleType,
        licenseImg1,
        licenseImg2

    })


    regDriver.save().then(() => {

        res.json("Registration Successfull");

    }).catch((err) => {

        console.log(err);

    })

})

//Display Profile
router.get("/prof/:id", (req, res) => {

    let displayProfile = req.params.id;
    Driver.findById(displayProfile,(err,prof) => {
    if(err){
       return res.status(400).json({success:false,err});

    }
    return res.status(200).json({
        success:true,
        prof
    })
  }) 
})

//Display All
router.get("/allprof",(req,res)=>{

  Driver.find().exec((err,Driver)=>{
        if(err){
            return res.status(400).json({
               error:err
           });
       }
          return res.status(200).json({
            success:true,
            existingDRouter:Driver
        });
    });
})





//Update Profile
router.put("/updateProfile/:id",(req,res) => {

    
    Driver.findByIdAndUpdate(

        req.params.id,
        {
          $set : req.body
        },
   
        (err,Driver)=>{
          if(err){
   
            return res.status(400).json({error:err});
          }
   
          return res.status(200).json({
                
            success:"Update successfully"
   
          });
        }
     )
      
    })

//Delete Profile

router.route("/deleteProfile/:id").delete(async(req, res) => {


    let driverProfile = req.params.id;
    await Driver.findByIdAndDelete(driverProfile).then(() => {
        res.status(200).send({ status: "Driver Profile Successfully deleted" })
    }).catch((err) => {

        console.log(err.message);
        res.status(500).send({ status: "Can Not Delete Driver Profile", error: err.message })

    })
})

module.exports = router;