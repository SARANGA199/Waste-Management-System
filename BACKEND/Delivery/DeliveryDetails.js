const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeliverySchema = new Schema({

    driverId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        default: "null"
    },

    tripId: {
        type: Schema.Types.ObjectId,
        ref: "RouteInfo",
    },

    vehicleNo: {
        type: String,
        required: true
    },

    deliveryStatus: {
        type: String,
        required: true,
        default: "Incomplete"
    },
    date: {

        type: Date,
        required: true

    }
})
const Delivery = mongoose.model("Delivery", DeliverySchema);

module.exports = Delivery;