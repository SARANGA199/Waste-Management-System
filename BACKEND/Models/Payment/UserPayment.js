const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paySchema = new Schema({

    uid:{
        type: String,
        required : true
    },

    TripCount:{
        type: Number,
        required : true
    },

    amount:{
        type: Number,
        required : true
    },

})

const Card = mongoose.model("usercard",paySchema);
module.exports = Card;