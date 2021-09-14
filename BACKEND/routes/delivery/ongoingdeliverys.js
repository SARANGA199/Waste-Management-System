const router = require("express").Router();
const ongoingDelivery = require("../../Models/Delivery/OngoingDelivery");
let OngoingDelivery = require("../../Models/Delivery/OngoingDelivery");

//Add Tempary Details
router.route("/addTrip").post((req, res) => {


        const dId = req.body.dId;
        const destination = req.body.destination;


        const ongoingDetail = new OngoingDelivery({

            dId,
            destination
        })

        ongoingDetail.save().then(() => {

            res.json("Details Added");

        }).catch((err) => {

            console.log(err);

        })

    })
    //Delete Profile

router.route("/deleteTrip/:tripid").delete(async(req, res) => {


    let deleterecord = req.params.tripid;
    await ongoingDelivery.findOneAndDelete(deleterecord).then(() => {
        res.status(200).send({ status: "Trip Details Deleted" })
    }).catch((err) => {

        console.log(err.message);
        res.status(500).send({ status: "Can Not Delete Details", error: err.message })

    })



})
module.exports = router;