const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companyItem = new Schema({

    itemId: {
        type: Schema.Types.ObjectId,
        ref: 'Item'
    },
    companyId: {
        type: Schema.Types.ObjectId,
        ref: 'RecycleCompany'
    },
    capacity: {
        type: Number,
        required: true
    },

});

const CompItem = mongoose.model("CompanyItem", companyItem);

module.exports = CompItem;