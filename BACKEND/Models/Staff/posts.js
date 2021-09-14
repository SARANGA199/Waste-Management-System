const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true

    },
    
    roleName:{
        type:String,
        required:true

    },
    OTRate:{
        type:String,
        required:true

    },
    basicSalary:{
        type:String,
        required:true

    }
    
});

module.exports= mongoose.model('Posts',postSchema);