//const Card = require("../models/Salary");

const router = require("express").Router();
let Salary = require("../../Models/Payment/Salary");

router.route("/add").post((req,res)=>{
    const EID = req.body.uid;
    const pDate = Date(req.body.date);
    const OT_Payment = req.body.OTHours;
    const TotalSalary = Number(req.body.amount);

    const newSalary = new Salary({
        EID,
        pDate,
        OT_Payment,
        TotalSalary
    })

    newSalary.save().then(()=>{
        res.json("Salary Added")
    }).catch((err)=>{
        console.log(err);
    })

})



//Get data

router.route("/").get((req,res)=>{
    Salary.find().then((salarys)=>{
        res.json(salarys)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req, res)=>{
    let salaryid = req.params.id;
    const {EID,pDate,OT_Payment,TotalSalary} = req.body;

    const updateSalary = {
        EID,
        pDate,
        OT_Payment,
        TotalSalary
    }

    const update = await Salary.findByIdAndUpdate(salaryid,updateSalary)
    .then(()=>{
        res.status(200).send({status: "Updated"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error update"})
    })
})    
    

router.route("/delete/:id").delete(async (req,res)=>{
    let salaryid = req.params.id;
    await Salary.findByIdAndDelete(salaryid)
    .then(()=>{
        res.status(200).send({status: "Deleted!"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error delete"})
    })
})

router.get("/allSalarys",(req,res)=>{

    Salary.find().exec((err,Salary)=>{
          if(err){
              return res.status(400).json({
                 error:err
             });
         }
            return res.status(200).json({
              success:true,
              existingSalRouter:Salary,
          });
      });
  })

  router.get("/getSalary/:id",(req,res)=>{
    let salaryid = req.params.id;
    Salary.find({EID:salaryid}).exec((err,Salary)=>{
          if(err){
              return res.status(400).json({
                 error:err
             });
         }
            return res.status(200).json({
              success:true,
              existingSalRouter:Salary,
          });
      });
  })



  router.delete('/deleteSalary/:id',(req,res)=>{
    Salary.findByIdAndRemove(req.params.id).exec((err,deletedSalary)=>{
        if(err) return res.status(400).json({
         message : "Delete Unsuccesful",err
      });
      return res.json({
          message : "Delete Successfull",deletedSalary
      });
    });
  
   }); 

   router.delete('/deleteSal/:id',(req,res)=>{
    Salary.findByIdAndRemove(req.params.id).exec((err,deletedSalary)=>{
        if(err) return res.status(400).json({
         message : "Delete Unsuccesful",err
      });
      return res.json({
          message : "Delete Successfull",deletedSalary
      });
    });
  
   }); 



module.exports = router;