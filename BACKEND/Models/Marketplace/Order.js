const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    uid: {
      type: String,
    },
    receivedItemId: {
      type: String,
    },

    deliveryAddress: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    orderStatus: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
