const mongoose = require('mongoose');
const attendSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    staffId:{
        type:String,
        required:true

    },
    date:{
        type:String,
        required:true

    },
    time:{
        type:String,
        required:true

    },
    attendanceType:{
        type:String,
        required:true

    }
    
});

module.exports= mongoose.model('Attends',attendSchema);