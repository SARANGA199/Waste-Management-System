const router = require("express").Router();
let Item = require("../../Models/RecycleFacility/Item");

//Add item Details
router.route("/additem").post((req,res)=>{

    const itemName = req.body.itemName;
    const category = req.body.category;
    const date = req.body.date;
    const unitPrice = Number(req.body.unitPrice);
    const description = req.body.description;


  const newItem = new Item({
        
    itemName,
    category,
    date,
    unitPrice,
    description,

  })


  newItem.save().then(()=>{

      return res.json({ 
            success:true
        });
       

  }).catch((err) =>{
      
     console.log(err);

  })

})

//Display Items details
router.route("/posts").get((req,res) =>{

    Item.find().then((items)=>{

         return res.status(200).json({
                success:true,
                existingitems:items
         })     

    }).catch((err)=>{
        console.catch.log(err);
    })


})

//Display one Items details
router.route("/posts/:Id").get((req,res) =>{

    let itemId = req.params.Id
    Item.findById(itemId).then((items)=>{

         return res.status(200).json({
                success:true,
                items
         })     

    }).catch((err)=>{
        console.catch.log(err);
    })


})

//update items details
router.route("/updateitem/:id").put(async (req,res) =>{

    let itemId = req.params.id;
    const {itemName,category,date,unitPrice,description} = req.body;
 
    const updateitemInfo = {
        itemName,
        category,
        date,
        unitPrice,
        description
    }
 
    const update = await Item.findByIdAndUpdate(itemId,updateitemInfo)
    .then(() =>{
 
      res.status(200).send({status:"Item details is  Updated"})
 
    }).catch((err) =>{
 
     console.log(err);
     res.status(500).send({status:"Error with Updating Item",error :err.message})
    })
 
 })

 //Delete item

router.route("/deleteitem/:id").delete(async(req,res)=>{


    let itemId= req.params.id;
    await Item.findByIdAndDelete(itemId).then(()=>{
        res.status(200).send({status : "Item  deleted"})
    }).catch((err)=>{

        console.log(err.message);
        res.status(500).send({status:"Error with Delete Item",error :err.message})

    })
})



module.exports = router;