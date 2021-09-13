const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema({


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

    cardPostalCode: {
        type: String,
        required : true
    },

})

const Card = mongoose.model("formCard",cardSchema);
module.exports = Card;