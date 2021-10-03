const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OngoingDelivery = new Schema({

    _id: {
        type: Schema.Types.ObjectId,
        ref: "FreelanceDriver",
    },

    deliveryTown: {
        type: String,
        required: true
    }

})
const ongoingDelivery = mongoose.model("OngoingDelivery", OngoingDelivery);

module.exports = ongoingDelivery;