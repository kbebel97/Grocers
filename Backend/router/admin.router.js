let express = require("express");
let router = express.Router();  //router reference. 
let AdminController = require("../controller/admin.controller.js");

//mapping sub path with http methods.
router.get("/allAdminDetails", AdminController.getAllAdminDetails);
router.post("/addEmployeeDetails", AdminController.addEmployeeDetails);
router.delete("/deleteEmployeeByEmail/:email", AdminController.deleteEmployeeByEmail);


module.exports=router;