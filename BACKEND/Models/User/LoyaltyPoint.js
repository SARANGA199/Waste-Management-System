const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const loyaltypointSchema = new Schema({

    uid: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },

    uname:{
        type: String,
        required: true
    },

    points: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    expdate: {
        type: Date,
        required: true
    }
},
{
    timestamps: true,
  }
);
const Loyalty = mongoose.model('loyalty', loyaltypointSchema);

module.exports = Loyalty;