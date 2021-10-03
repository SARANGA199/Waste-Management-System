const mongoose = require('mongoose');
const recordSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true

    },
    
    OTHours:{
        type:String,
        required:true

    },
    attendance:{
        type:String,
        required:true

    }
    
});

module.exports= mongoose.model('Records',recordSchema);