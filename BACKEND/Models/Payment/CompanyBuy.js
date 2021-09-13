const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({

    comID:{
        type: String,
        required : true
    },

    date:{
        type: Date,
        required : true
    },

    size:{
        type: Number,
        required : true
    },

    price:{
        type: Number,
        required : true
    },

})

const Com = mongoose.model("companybuy",companySchema);
module.exports = Com;