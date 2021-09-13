const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemDetails = new Schema({

    itemName: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true

    },

    date: {
        type: Date,
        required: true
    },

    unitPrice: {
        type: Number,
        required: true

    },

    description: {
        type: String
    }

});

const Item = mongoose.model("Item", ItemDetails);

module.exports = Item;