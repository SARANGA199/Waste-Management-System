//const Card = require("../models/card");

const router = require("express").Router();
let Card = require("../../Models/Payment/formCard");

router.route("/add").post((req,res)=>{
    const cardName = req.body.cardName;
    const cardNumber = req.body.cardNumber;
    const cardType = req.body.cardType;
    const cardExpiration = req.body.cardExpiration;
    const cardPostalCode = req.body.cardPostalCode;
    const cardSecurityCode = req.body.cardSecurityCode;

    const newCard = new Card({
        cardName,
        cardNumber,
        cardType,
        cardExpiration,
        cardSecurityCode,
        cardPostalCode
    })

    newCard.save().then(()=>{
        res.json("Card Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.put('/editCard/:id',(req,res)=>{
  
    Card.findByIdAndUpdate(
  
      req.params.id,
       {
         $set : req.body
       },
  
       (err,Card)=>{
         if(err){
           return res.status(400).json({error:err});
         }
         return res.status(200).json({    
           success:"Update successfully"
  
         });
       }
    )
     
   })
  


//Get data

router.route("/").get((req,res)=>{
    Card.find().then((cards)=>{
        res.json(cards)
        existingReqRouter: Card
    }).catch((err)=>{
        console.log(err)
    })
})

router.get("/allCards",(req,res)=>{

    Card.find().exec((err,Card)=>{
          if(err){
              return res.status(400).json({
                 error:err
             });
         }
            return res.status(200).json({
              success:true,
              existingReqRouter:Card
          });
      });
  })
  

router.route("/update/:id").put(async (req, res)=>{
    let crdid = req.params.id;
    const {hName,crdNo,expDate1,expDate2,cvv} = req.body;

    const updateCard = {
        cardName,
        cardNumber,
        cardType,
        cardExpiration,
        cardSecurityCode,
        cardPostalCode
    }

    const update = await Card.findByIdAndUpdate(crdid,updateCard)
    .then(()=>{
        res.status(200).send({status: "Updated"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error update"})
    })
})    
    

router.route("/delete/:id").delete(async (req,res)=>{
    let cardid = req.params.id;
    alert(cardid)
    await Card.findByIdAndDelete(cardid)
    .then(()=>{
        res.status(200).send({status: "Deleted!"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error delete"})
    })
})



router.delete('/deleteCard/:id',(req,res)=>{
    Card.findByIdAndRemove(req.params.id).exec((err,deletedCard)=>{
        if(err) return res.status(400).json({
         message : "Delete Unsuccesful",err
      });
      return res.json({
          message : "Delete Successfull",deletedCard
      });
    });
  
   });


module.exports = router;