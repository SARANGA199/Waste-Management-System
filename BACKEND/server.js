const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

require("dotenv").config();

//available port number assign
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

//connection
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

//Open the connection
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connection Succesfull");
});

//import routes file(add user)
const userRouter = require("./Routes/user/userdetails.js");
app.use("/user", userRouter);

const router = require("./Routes/user/loyaltypoints");
app.use("/points", router);

const marketplaceRouter = require("./Routes/marketplace/requestpools");
app.use("/marketplace", marketplaceRouter);

const orderRouter = require("./Routes/marketplace/orders");
app.use("/order", orderRouter);

const routereqRouter = require("./Routes/pickup/routerequests");
app.use("/routeReq", routereqRouter);

const routeOrderRouter = require("./routes/pickup/routeorders");
app.use("/routeOrder", routeOrderRouter);

const received = require("./routes/pickup/receiveditems");
app.use("/receivedItem", received);

//Import Routes (Freelance Driver)
const driverRouter = require("./Routes/delivery/freelancedrivers");
app.use("/driver", driverRouter);

//(TripDetails)
const tripDetailsRouter = require("./Routes/delivery/ongoingdeliverys");
app.use("/trip", tripDetailsRouter);

//(DeliveryDetails)
const deliveryDetailsRouter = require("./Routes/delivery/deliverydetails");
app.use("/delivery", deliveryDetailsRouter);

//Import Routes(Item)
const item = require("./Routes/recyclefacility/items");
app.use("/item",item);

//Import Routes(company)
const Company = require("./Routes/recyclefacility/recyclecompanies");
app.use("/Company",Company);

//Import Routes(company item)
const CompanyItem = require("./Routes/recyclefacility/companyitems");
app.use("/CompanyItem",CompanyItem);

//import routes
const postRoutes = require('./routes/staff/posts');
//route middleware
app.use(postRoutes);

//import routes
const recordRoutes = require('./routes/staff/records');
//route middleware
app.use(recordRoutes);

//import routes
const attendRoutes = require('./routes/staff/attends');
//route middleware
app.use(attendRoutes);

const vehicleRouter = require("./routes/vehicle/vehicleregisters");
app.use("/vehicle",vehicleRouter);

const repairRouter = require("./routes/vehicle/vehiclerepairs")
app.use("/repair",repairRouter);

//import routes file(add Second Test).
const frmRouter = require("./routes/payment/formcards");
app.use("/formcards",frmRouter);

const upRouter = require("./routes/payment/userpayments.js");
app.use("/userpayments",upRouter);

const salRouter = require("./routes/payment/salarys.js");
app.use("/salarys",salRouter);

const comRouter = require("./routes/payment/companybuys.js");
app.use("/companybuys",comRouter);

//const marketplaceRouter = require("./Routes/marketplace/requestpools");
//app.use("/marketplace", marketplaceRouter);

//const routereqRouter = require("./Routes/pickup/routerequests");
//app.use("/route", routereqRouter);

//const loyaltyRouter = require("./Routes/loyaltypoints.js");

//app.use("/points", loyaltyRouter);

//Models
//require("./model/Post");
//require("./model/Comment");

//app.use("/posts", require("./routes/posts"));

//run in port
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
