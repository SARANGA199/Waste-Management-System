const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({

    Vehicle_reg_no: {
        type: Number,
        required: true
    },

    Type: {
        type: String,

    },

    Chassis_No: {
        type: String,
        required: true

    },

    Model: {
        type: String

    },

    Registration_Date: {
        type: Date,


    },

    Capacity: {
        type: String,
        required: true

    },

    Price: {
        type: Number,
        required: true

    },

    Photo: {
        type : String,
    }

})
const VehicleRegister = mongoose.model("VehicleRegister", vehicleSchema);
module.exports = VehicleRegister;