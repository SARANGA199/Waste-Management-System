const router = require("express").Router();
let deliveryDetail = require("../../Models/Delivery/DeliveryDetail");

//Add Details
router.route("/addDelivery").post((req, res) => {

    const driverId = req.body.driverId;
    const deliveryLocation = req.body.deliveryLocation;
   
    const tripDetail = new deliveryDetail({

        driverId,
        deliveryLocation,
    
    })


    tripDetail.save().then(() => {

        res.json("Details Added");

    }).catch((err) => {

        console.log(err);

    })

})

//Display All

router.route("/display/:_id").get((req, res) => {
    const _id = req.params._id;
    
    deliveryDetail.find({driverId:_id}).then((profileStats) => {

        res.json(profileStats)

    }).catch((err) => {
        console.catch.log(err);
    })


})

module.exports = router;