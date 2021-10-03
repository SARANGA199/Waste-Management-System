const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeliverySchema = new Schema({

    driverId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        
    },

    deliveryLocation: {
        type: String,
        required: true

    }
    
}, {
    timestamps: true,
}
)
const Delivery = mongoose.model("Delivery", DeliverySchema);

module.exports = Delivery;