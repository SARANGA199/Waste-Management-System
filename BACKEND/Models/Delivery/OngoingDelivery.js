const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OngoingDelivery = new Schema({

    driverId: {
        type: Schema.Types.ObjectId,
        ref: "FreelanceDriver",
    },

    vehicleNo: {
        type: String,
        required: true
    }

})
const ongoingDelivery = mongoose.model("OngoingDelivery", OngoingDelivery);

module.exports = ongoingDelivery;