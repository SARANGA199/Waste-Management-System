const router = require("express").Router();
let CompItem = require("../../Models/RecycleFacility/CompItem");

//Add Company item Details
router.route("/addcompanyitem").post((req,res)=>{

    const companyName = req.body.companyName;
    const itemName = req.body.itemName;
    const capacity = Number(req.body.capacity);
    //const itemCategory = req.body.itemCategory;
    const Date = req.body.Date;


  const newCompItem = new CompItem({
        
    companyName,
    itemName,
    capacity,
   // itemCategory,
    Date

  })


  newCompItem.save().then(()=>{

    return res.json({ 
        success:true
    });

  }).catch((err) =>{
      
     console.log(err);

  })

})

//Display Company details
router.route("/posts").get((req,res) =>{

    CompItem.find().then((companyItems)=>{

      return res.status(200).json({
        success:true,
        existingcompanyitems:companyItems
 })  

    }).catch((err)=>{
        console.catch.log(err);
    })


})

//update Company details
router.route("/updatecompany/:id").put(async (req,res) =>{

    let CompItemId = req.params.id;
    const {itemId,companyId,capacity} = req.body;
 
    const updatecompanyitemInfo = {
      companyName,
      itemName,
        capacity,
       // itemCategory,
        Date
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

router.route("/removecompanyitem/:id").delete(async(req,res)=>{


    let CompItemId= req.params.id;
    await Company.findByIdAndDelete(CompItemId).then(()=>{
        res.status(200).send({status : "Company item remove"})
    }).catch((err)=>{

        console.log(err.message);
        res.status(500).send({status:"Error with Delete Company item",error :err.message})

    })
})



module.exports = router;