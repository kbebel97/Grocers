let express = require("express");
let router = express.Router();  //router reference. 
let userRequestsController = require("../controller/userRequests.controller.js");

//mapping sub path with http methods.

router.post("/postRequest", userRequestsController.postRequest);
router.get("/getRequests", userRequestsController.getRequests);


module.exports=router;