const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardDataSchema = new Schema({

    hName: {
        type: String,
        required: true
    },

    crdNo: {
        type: Number,
        required: true
    },

    expDate1: {
        type: Number,
        required: true
    },

    expDate2: {
        type: Number,
        required: true
    },

    cvv: {
        type: Number,
        required: true
    },

    balance: {
        type: Number,
    },

})

const Card = mongoose.model("carddinfo", cardDataSchema);
module.exports = Card;