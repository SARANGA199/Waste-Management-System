const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companyItem = new Schema({

    companyName: {
        type: String,
        required:true
    },
    itemName: {
        type: String,
        required:true
    },
    Date: {
        type: String,
        required:true
    },
    capacity: {
        type: Number,
        required: true
    },

});

const CompItem = mongoose.model("CompanyItem", companyItem);

module.exports = CompItem;