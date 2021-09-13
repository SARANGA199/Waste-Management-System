const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({

    companyName: {
        type: String,
        required: true
    },
    companyLocation: {
        type: String,
        required: true
    },
    regNumber: {
        type: String,
        required: true
    },
    itemId:{
        type: String,
        required: true
    }
});

const Company = mongoose.model("RecycleCompany", companySchema);

module.exports = Company;