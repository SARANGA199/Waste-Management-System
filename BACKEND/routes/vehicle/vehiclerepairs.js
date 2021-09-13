const router = require("express").Router();
let VehicleRepair = require ("../../Models/Vehicle/VehicleRepair");

//Add Repair Details
router.route("/addrepair").post((req,res)=>{

    const Vehicle_reg_no = String(req.body.Vehicle_reg_no);
    const RepairItem = req.body.RepairItme;
    const Action = String(req.body.Action);
    const Remarks = req.body.Remarks;
    const Registration_Date = Date(req.body.Registration_Date);



    
  const newVehicleRepair = new VehicleRepair({
        
    Vehicle_reg_no,
    RepairItem,
    Action,
    Remarks,
    Registration_Date
    
  })

  newVehicleRepair.save().then(()=>{

    res.json("Repair Vehicle Details Added");

}).catch((err) =>{
   
  console.log(err);

})

//Display Repair vehicle details
router.route("/").get((req,res) =>{

  VehicleRepair.find().then((vehiclerepairs)=>{

        res.json(vehiclerepairs)

  }).catch((err)=>{
      console.catch.log(err);
  })

})


//update repair vehicle details
router.route("/updateRepair/:id").put(async (req,res) =>{

  let vehicleId = req.params.id;
  const {Vehicle_reg_no,RepairItem,Action,Remarks,Registration_Date} = req.body;

  const updateRepairInfo = {
        
    Vehicle_reg_no,
    RepairItem,
    Action,
    Remarks,
    Registration_Date
  }

  const update = await VehicleRepair.findByIdAndUpdate(vehicleId,updateRepairInfo)
  .then(() =>{

    res.status(200).send({status:"Repair Vehicle details are Updated"})

  }).catch((err) =>{

   console.log(err);
   res.status(500).send({status:"Error with Updating repair vehicle details",error :err.message})
  })

})


//Delete vehicle detaills 

router.route("/deleteRepairVehicle/:id").delete(async(req,res)=>{


  let vehicleId= req.params.id;
  await VehicleRepair.findByIdAndDelete(vehicleId).then(()=>{
      res.status(200).send({status : "Repair Vehicle info deleted"})
  }).catch((err)=>{

      console.log(err.message);
      res.status(500).send({status:"Error with Delete Repair Vehicle info",error :err.message})

  })
})








})
module.exports = router;