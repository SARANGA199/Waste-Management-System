const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({


    orderId: {
        type:String,
        required:true
    },

    orderType: {
        type:String,
        required:true
    },


    routeDescription: {
        type:String,
        required:true
    },


    quantity: {
        type: Number,
        required: true

    },

    vehicleType: {

        type: String,
        required: true

    },

    destination: {

        type: String,
        required: true

    },

    distance: {

        type: String,
        required: true

    },


    arrivalTime: {

        type: String,
        required: true

    },

    date: {

        type: String,
        required: true

    }

});

const Route = mongoose.model("RouteOrder", routeSchema);

module.exports = Route;