const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SalarySchema = new Schema({

    EID:{
        type: String,
        required : true
    },

    pDate:{
        type: Date,
        required : true
    },

    OT_Payment:{
        type: Number,
        //required : true
    },

    TotalSalary:{
        type: Number,
        required : true
    },

})

const Salary = mongoose.model("SalaryDetails",SalarySchema);
module.exports = Salary;