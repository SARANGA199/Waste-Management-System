const router = require("express").Router();
const { request } = require("express");
let Request = require("../../Models/Marketplace/RequestPool");

router.route("/:userId/:itemId/addRequest").post((req, res) => {
  const uid = req.params.userId; //get userid from the URL
  const itemId = req.params.itemId; //get itemid from the URL
  const itemName = req.body.itemName;
  const category = req.body.category;
  const weight = Number(req.body.weight);
  const description = req.body.description;
  const itemLocation = req.body.itemLocation;
  const photo = req.body.photo;

  const newRequest = new Request({
    uid,
    itemId,
    itemName,
    category,
    weight,
    description,
    itemLocation,
    photo,
  });

  newRequest
    .save()
    .then(() => {
      res.json("Request Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Display details
router.route("/").get((req, res) => {
  Request.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.catch.log(err);
    });
});

// //Display details
// router.get("/", (req, res) => {
//   Request.find()
//     .then((data) => {
//       console.log("Data", data);
//       res.json(data);
//     })
//     .catch((error) => {
//       console.log("error", error);
//     });
// });

//update request
router.route("/updateRequest/:id").put(async (req, res) => {
  let requestId = req.params.id;
  const {
    itemId,
    itemName,
    category,
    weight,
    description,
    itemLocation,
    photo,
  } = req.body;

  const updateRequest = {
    itemId,
    itemName,
    category,
    weight,
    description,
    itemLocation,
    photo,
  };

  const update = await Request.findByIdAndUpdate(requestId, updateRequest)
    .then(() => {
      res.status(200).send({ status: "Request is  Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with Updating request", error: err.message });
    });
});

//Delete request

router.route("/deleteRequest/:id").delete(async (req, res) => {
  let requestId = req.params.id;
  await Request.findByIdAndDelete(requestId)
    .then(() => {
      res.status(200).send({ status: "Request  deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with Delete request", error: err.message });
    });
});

module.exports = router;
