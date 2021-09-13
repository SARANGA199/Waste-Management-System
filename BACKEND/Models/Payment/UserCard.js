const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema({

    uid: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },

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

})

const Card = mongoose.model("usercard", cardSchema);
module.exports = Card;