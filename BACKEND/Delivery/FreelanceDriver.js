const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FreelanceSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },

    licenseId: {
        type: String,
        required: true
    },

    nearbyTown: {
        type: String,
        required: true
    },

    vehicleNo: {
        type: String,
        required: true
    },

    vehicleType: {
        type: String,
        required: true
    },


    licenseImg1: {
      type: String,

    },

    licenseImg2: {
       type: String,

    }



})

const Driver = mongoose.model("FreelanceDriver", FreelanceSchema);

module.exports = Driver;