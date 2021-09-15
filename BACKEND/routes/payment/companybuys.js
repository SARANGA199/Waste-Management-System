//const Card = require("../models/Salary");

const router = require("express").Router();
let Company = require("../../models/CompanyBuy");

router.route("/add").post((req,res)=>{
    const comID = req.body.comID;
    const date = Date(req.body.date);
    const size = req.body.size;
    const price = Number(req.body.price);

    const newCompany = new Company({
        comID,
        date,
        size,
        price
    })

    newCompany.save().then(()=>{
        res.json("Purchase Added")
    }).catch((err)=>{
        console.log(err);
    })

})



//Get data

router.route("/").get((req,res)=>{
    Company.find().then((salarys)=>{
        res.json(salarys)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req, res)=>{
    let companyid = req.params.id;
    const {EID,pDate,OT_Payment,TotalSalary} = req.body;

    const updatePurchase = {
        EID,
        pDate,
        OT_Payment,
        TotalSalary
    }

    const update = await Company.findByIdAndUpdate(company,updatePurchase)
    .then(()=>{
        res.status(200).send({status: "Updated"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error update"})
    })
})    
    

router.route("/delete/:id").delete(async (req,res)=>{
    let companyid = req.params.id;
    await Company.findByIdAndDelete(companyid)
    .then(()=>{
        res.status(200).send({status: "Deleted!"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error delete"})
    })
})

router.get("/allPurchase",(req,res)=>{

    Company.find().exec((err,Company)=>{
          if(err){
              return res.status(400).json({
                 error:err
             });
         }
            return res.status(200).json({
              success:true,
              existingComRouter:Company,
          });
      });
  })

  router.get("/getCompany/:id",(req,res)=>{

    Salary.find({EID:"ui2222"}).exec((err,Company)=>{
          if(err){
              return res.status(400).json({
                 error:err
             });
         }
            return res.status(200).json({
              success:true,
              existingSalRouter:Company,
          });
      });
  })



  router.delete('/deleteSalary/:id',(req,res)=>{
    Company.findByIdAndRemove(req.params.id).exec((err,deletedCompany)=>{
        if(err) return res.status(400).json({
         message : "Delete Unsuccesful",err
      });
      return res.json({
          message : "Delete Successfull",deletedCompany
      });
    });
  
   }); 

   router.delete('/deleteCom/:id',(req,res)=>{
    Company.findByIdAndRemove(req.params.id).exec((err,deletedCompany)=>{
        if(err) return res.status(400).json({
         message : "Delete Unsuccesful",err
      });
      return res.json({
          message : "Delete Successfull",deletedCompany
      });
    });
  
   }); 



module.exports = router;