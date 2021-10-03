const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema({


    uid: {
        type: String,
        required : true
    },

    cardName: {
        type: String,
        required : true
    },
    
    cardNumber: {
        type: String,
        required : true
    },

    cardType: {
        type: String,
        required : true
    },

    cardExpiration: {
        type: String,
        required : true
    },

    cardSecurityCode: {
        type: String,
        required : true
    },

    cardNickname: {
        type: String,
        required : true
    },

})

const Card = mongoose.model("formCard",cardSchema);
module.exports = Card;