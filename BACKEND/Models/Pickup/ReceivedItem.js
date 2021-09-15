const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const receivedItemSchema = new Schema({

   
       itemcategory: {
        type: String,
        required: true,
       },

      quantity: {
        type: Number,
        required: true,

      },

  
    date: {

        type: String,
        required: true

    },

    
});


const Route = mongoose.model("ReceivedItem", receivedItemSchema);

module.exports = Route;