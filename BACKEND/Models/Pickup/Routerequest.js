const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({


    rid: {
        type: String,
        require:true
        
    },


    PackSize: {
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

        type: Number,
        required: true

    },

    deliveryTown: {

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

const Route = mongoose.model("RouteInfo", routeSchema);

module.exports = Route;