const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
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