const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema(
  {
    uid: {
      type: Schema.Types.ObjectId,
      ref: "UserDetail",
    },

    itemId: {
      type: Schema.Types.ObjectId,
      ref: "item",
    },
    itemName: {
      type: String,
    },
    category: {
      type: String,
    },
    weight: {
      type: Number,
    },

    description: {
      type: String,
    },

    itemLocation: {
      type: String,
    },
    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const RequestPool = mongoose.model("RequestPool", requestSchema);
module.exports = RequestPool;
