const router = require("express").Router();
let CompItem = require("../../Models/RecycleFacility/CompItem");

//Add Company item Details
router.route("/:itemId/:companyId/addcompanyitem").post((req,res)=>{

    const itemId = req.params.itemId;
    const companyId = req.params.companyId;
    const capacity = Number(req.body.capacity);


  const newCompItem = new CompItem({
        
    itemId,
    companyId,
    capacity,

  })


  newCompItem.save().then(()=>{

       res.json("Company item Added");

  }).catch((err) =>{
      
     console.log(err);

  })

})

//Display Company details
router.route("/").get((req,res) =>{

    CompItem.find().then((companyItems)=>{

          res.json(companyItems)

    }).catch((err)=>{
        console.catch.log(err);
    })


})

//update Company details
router.route("/updatecompany/:id").put(async (req,res) =>{

    let CompItemId = req.params.id;
    const {itemId,companyId,capacity} = req.body;
 
    const updatecompanyitemInfo = {
        itemId,
        companyId,
        capacity,
    }
 
    const update = await CompItem.findByIdAndUpdate(CompItemId,updatecompanyitemInfo)
    .then(() =>{
 
      res.status(200).send({status:"Company item details is  Updated"})
 
    }).catch((err) =>{
 
     console.log(err);
     res.status(500).send({status:"Error with Updating Company item",error :err.message})
    })
 
 })

 //Remove company item

router.route("/removecompany/:id").delete(async(req,res)=>{


    let CompItemId= req.params.id;
    await Company.findByIdAndDelete(CompItemId).then(()=>{
        res.status(200).send({status : "Company item remove"})
    }).catch((err)=>{

        console.log(err.message);
        res.status(500).send({status:"Error with Delete Company item",error :err.message})

    })
})



module.exports = router;