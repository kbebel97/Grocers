let express = require("express");
let router = express.Router();  //router reference. 
let UserController = require("../controller/user.controller.js");

//mapping sub path with http methods.
router.post("/login",UserController.login);
router.post("/signup",UserController.signup); 
router.get("/", UserController.test); 

module.exports=router;