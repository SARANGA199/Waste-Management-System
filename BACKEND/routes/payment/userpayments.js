const uPay = require("../../Models/Payment/UserPayment");

const router = require("express").Router();
//let uPay = require("../models/UserPayment");

router.route("/add").post((req,res)=>{
    const uid = req.body.uid;
    const amount = Number(req.body.amount);
    const TripCount = Number(req.body.TripCount);


    const newPayment = new uPay({
        uid,
        TripCount,
        amount
    })

    newPayment.save().then(()=>{
        res.json("Payment Added")
    }).catch((err)=>{
        console.log(err);
    })

})



//Get data

router.route("/").get((req,res)=>{
    uPay.find().then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err)
    })
})

router.get("/allPayments",(req,res)=>{

    uPay.find().exec((err,uPay)=>{
          if(err){
              return res.status(400).json({
                 error:err
             });
         }
            return res.status(200).json({
              success:true,
              existingPayRouter:uPay,
          });
      });
  })

router.route("/update/:id").put(async (req, res)=>{
    let uPayid = req.params.id;
    const {uid,TripCount,amount} = req.body;

    const updatPayment = {
        uid,
        TripCount,
        amount
    }

    const update = await uPay.findByIdAndUpdate(uPayid,updatPayment)
    .then(()=>{
        res.status(200).send({status: "Updated"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error update"})
    })
})    
    

router.route("/delete/:id").delete(async (req,res)=>{
    let uPayid = req.params.id;
    await uPay.findByIdAndDelete(uPayid)
    .then(()=>{
        res.status(200).send({status: "Deleted!"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error delete"})
    })
})

router.delete('/deletePayment/:id',(req,res)=>{
    uPay.findByIdAndRemove(req.params.id).exec((err,deletedPayment)=>{
        if(err) return res.status(400).json({
         message : "Delete Unsuccesful",err
      });
      return res.json({
          message : "Delete Successfull",deletedPayment
      });
    });
  
   });

   router.delete('/deletePay/:id',(req,res)=>{
    uPay.findByIdAndRemove(req.params.id).exec((err,deletedPayment)=>{
        if(err) return res.status(400).json({
         message : "Delete Unsuccesful",err
      });
      return res.json({
          message : "Delete Successfull",deletedPayment
      });
    });
  
   });   


module.exports = router;