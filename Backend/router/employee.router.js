let express = require("express");
let router = express.Router();  //router reference. 
let EmployeeController = require("../controller/employee.controller.js");

//mapping sub path with http methods.
router.post("/login",EmployeeController.login);
router.post("/signup", EmployeeController.signup);
router.get("/allEmployeeDetails", EmployeeController.getAllEmploeeDetails);

module.exports=router;