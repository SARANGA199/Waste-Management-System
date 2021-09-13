const router = require("express").Router();
let Order = require("../../Models/Marketplace/Order");

router.route("/checkout").post((req, res) => {
  const uid = req.body.userId;
  const receivedItemId = req.body.receivedItemId;
  const deliveryAddress = req.body.deliveryAddress;
  const quantity = Number(req.body.quantity);
  const orderStatus = req.body.orderStatus;

  const newOrder = new Order({
    uid,
    receivedItemId,
    deliveryAddress,
    quantity,
    orderStatus,
  });

  newOrder
    .save()
    .then(() => {
      res.json("Order Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Display details
router.route("/").get((req, res) => {
  Order.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.catch.log(err);
    });
});

module.exports = router;
