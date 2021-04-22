let express = require("express");
let router = express.Router();  //router reference. 
let AdminController = require("../controller/admin.controller.js");

//mapping sub path with http methods.
router.post("/login",AdminController.login);
router.post("/signup",AdminController.signup); 



module.exports=router;