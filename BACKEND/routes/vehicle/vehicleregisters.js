const router = require("express").Router();
let Vehicle = require ("../../Models/Vehicle/CompanyVehicle");

//Add Vehicle Details
router.route("/add").post((req,res)=>{

    const Vehicle_reg_no = Number(req.body.Vehicle_reg_no);
    const Type = req.body.Type;
    const Chassis_No = req.body.Chassis_No;
    const Model = req.body.Model;
    const Registration_Date = Date(req.body.Registration_Date);
    const Capacity = req.body.Capacity;
    const Price = Number(req.body.Price);
    const Photo = req.body.Photo;



  const newVehicle = new Vehicle({
        
    Vehicle_reg_no,
    Type,
    Chassis_No,
    Model,
    Registration_Date,
    Capacity,
    Price,
    Photo
  })


  newVehicle.save().then(()=>{

       res.json("Vehicle Added");

  }).catch((err) =>{
      
     console.log(err);

  })

})


//Display vehicle details
router.route("/").get((req,res) =>{

  Vehicle.find().then((vehicleregisters)=>{

        res.json(vehicleregisters)

  }).catch((err)=>{
      console.catch.log(err);
  })


})
//update vehicle details
router.route("/updateVehicle/:id").put(async (req,res) =>{

  let vehicleId = req.params.id;
  const {Vehicle_reg_no,Type,Chassis_No,Model,Registration_Date,Capacity,Price,Photo} = req.body;

  const updateVehicleInfo = {
    Vehicle_reg_no,
    Type,
    Chassis_No,
    Model,
    Registration_Date,
    Capacity,
    Price,
    Photo
  }

  const update = await Vehicle.findByIdAndUpdate(vehicleId,updateVehicleInfo)
  .then(() =>{

    res.status(200).send({status:"Vehicle details are Updated"})

  }).catch((err) =>{

   console.log(err);
   res.status(500).send({status:"Error with Updating vehicle details",error :err.message})
  })

})


//Delete student

router.route("/deleteVehicle/:id").delete(async(req,res)=>{


  let vehicleId= req.params.id;
  await Vehicle.findByIdAndDelete(vehicleId).then(()=>{
      res.status(200).send({status : "Vehicle info deleted"})
  }).catch((err)=>{

      console.log(err.message);
      res.status(500).send({status:"Error with Delete Vehicle info",error :err.message})

  })
})


module.exports = router;