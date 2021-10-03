const router = require("express").Router();
const ongoingDelivery = require("../../Models/Delivery/OngoingDelivery");
let OngoingDelivery = require("../../Models/Delivery/OngoingDelivery");

//Add Tempary Details
router.route("/addTrip").post((req, res) => {


        const _id = req.body._id;
        const destination = req.body.destination;


        const ongoingDetail = new OngoingDelivery({

            _id,
            destination
        })

        ongoingDetail.save().then(() => {

            res.json("Details Added");

        }).catch((err) => {

            console.log(err);

        })

    })

//Display order
router.get("/check/:id", (req, res) => {

    let displayJob = req.params.id;
    OngoingDelivery.findById(displayJob,(err,check) => {
    if(err){
       return res.status(400).json({success:false,err});

    }
    return res.status(200).json({
        success:true,
        check
    })
  }) 
})




    //Delete Profile

router.route("/deleteTrip/:id").delete(async(req, res) => {


    let deleterecord = req.params.id;
    await ongoingDelivery.findOneAndDelete(deleterecord).then(() => {
        res.status(200).send({ status: "Trip Details Deleted" })
    }).catch((err) => {

        console.log(err.message);
        res.status(500).send({ status: "Can Not Delete Details", error: err.message })

    })



})
module.exports = router;