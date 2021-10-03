const router = require("express").Router();
let Company = require("../../Models/RecycleFacility/RecycleComp");

//Add Company Details
router.route("/addcompany").post((req,res)=>{

    const companyName = req.body.companyName;
    const companyLocation = req.body.companyLocation;
    const regNumber = req.body.regNumber;
    const itemId = req.body.itemId;


  const newCompany = new Company({
        
    companyName,
    companyLocation,
    regNumber,
    itemId,

  })


  newCompany.save().then(()=>{

    return res.json({ 
        success:true
    });

  }).catch((err) =>{
      
     console.log(err);

  })

})

//Display Company details
router.route("/posts").get((req,res) =>{

    Company.find().then((recycleCompanies)=>{

      return res.status(200).json({
        success:true,
        existingcompnies:recycleCompanies
 })  

    }).catch((err)=>{
        console.catch.log(err);
    })


})

//Display one company details
router.route("/posts/:Id").get((req,res) =>{

  let companyId = req.params.Id
  Company.findById(companyId).then((recycleCompanies)=>{

       return res.status(200).json({
              success:true,
              recycleCompanies
       })     

  }).catch((err)=>{
      console.catch.log(err);
  })


})

//update Company details
router.route("/updatecompany/:id").put(async (req,res) =>{

    let CompanyId = req.params.id;
    const {companyName,companyLocation,regNumber,itemId} = req.body;
 
    const updatecompanyInfo = {
        companyName,
        companyLocation,
        regNumber,
        itemId,
    }
 
    const update = await Company.findByIdAndUpdate(CompanyId,updatecompanyInfo)
    .then(() =>{
 
      return res.json({ 
        success:true
    });
 
    }).catch((err) =>{
 
     console.log(err);
     res.status(500).send({status:"Error with Updating Company",error :err.message})
    })
 
 })

 //Remove company

router.route("/removecompany/:id").delete(async(req,res)=>{


    let companyId= req.params.id;
    await Company.findByIdAndDelete(companyId).then(()=>{
        res.status(200).send({status : "Company remove"})
    }).catch((err)=>{

        console.log(err.message);
        res.status(500).send({status:"Error with Delete Company",error :err.message})

    })
})



module.exports = router;