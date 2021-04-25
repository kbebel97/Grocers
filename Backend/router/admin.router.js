let express = require("express");
let router = express.Router();  //router reference. 
let AdminController = require("../controller/admin.controller.js");

//mapping sub path with http methods.
router.get("/allAdminDetails", AdminController.getAllAdminDetails);



module.exports=router;