const router = require("express").Router();
let RouteOrder = require("../../Models/Pickup/Routeorder");



//Add route

router.route("/add/routeOrder").post((req, res) => {
 
  const orderId = req.body.orderId;
  const orderType = req.body.orderType;
  const routeDescription = req.body.routeDescription;
  const quantity = Number(req.body.quantity);
  const vehicleType = req.body.vehicleType;
  const destination = req.body.destination;
  const distance = req.body.distance;
  const arrivalTime = req.body.arrivalTime;
  const date = req.body.date;

  const newOrderRoute = new RouteOrder({
    orderId,
    orderType,
    routeDescription,
    quantity,
    vehicleType,
    destination,
    distance,
    arrivalTime,
    date
  });

  newOrderRoute
    .save()
    .then(() => {
      res.json("Route for Order Added");
    })
    .catch((err) => {
      console.log(err);
    });
});


//add Details(class)
 
router.post('/addOrderRoute',(req,res)=>{

  let newroute = new RouteOrder(req.body);

  newroute.save((err)=>{
     if(err){
         
       return res.status(400).json({
         error:err
       });
     }

     return res.status(200).json({
        success : "Posted Save Successfully"
     });
  });
});


//Display details
router.route("/routeOrders").get((req, res) => {
  RouteOrder.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.catch.log(err);
    });
});


//update
 //update Router (function)
 router.route("/updateOrderRoute/:id").put(async (req, res) => {
  let Id = req.params.id;
  const { orderId, orderType, routeDescription, quantity, vehicleType, destination,distance,arrivalTime,date} = req.body;

  const updateRequest = {
    orderId,
    orderType,
    routeDescription,
    quantity,
    vehicleType,
    destination,
    distance,
    arrivalTime,
    date
  };

  const update = await RouteOrder.findByIdAndUpdate(Id, updateRequest)
    .then(() => {
      res.status(200).send({ status: "Route is  Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with Updating request", error: err.message });
    });
});


//delete orderRoute

router.delete('/deleteOrderRoute/:id',(req,res)=>{
  RouteOrder.findByIdAndRemove(req.params.id).exec((err,deletedRoute)=>{

    if(err) return res.status(400).json({
       message : "Delete Unsuccesful",err
    });

    return res.json({

        message : "Delete Successfull",deletedRoute
    });
  });

 });



module.exports = router;
