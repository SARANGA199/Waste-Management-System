const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleRepair = new Schema({

    Vehicle_reg_no: {
        type: String,
        required: true
    },
    RepairItem: {
        type: String,
        
    },
    Action: {
        type: String,
        required: true
    },
    Remarks: {
        type: String,
        required: true
    },

    Registration_Date: {
        type: Date,

    },

})

const VehicleRepair = mongoose.model("VehicleRepair", vehicleRepair);
module.exports = VehicleRepair;