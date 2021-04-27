let express = require("express");
let router = express.Router();  //router reference. 
let OrderController = require("../controller/order.controller.js");

//mapping sub path with http methods.
// router.post("/login",EmployeeController.login);
// router.post("/signup", EmployeeController.signup);
router.get("/retrieveOrders", OrderController.retrieveOrders);
router.put("/updateOrders", OrderController.updateOrders)

module.exports=router;