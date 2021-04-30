let express = require("express");
let router = express.Router();  //router reference. 
let userRequestsController = require("../controller/userRequests.controller.js");

//mapping sub path with http methods.

//router.post("/postRequest", userRequestsController.postRequest);
router.get("/getRequests", userRequestsController.getRequests);
router.post("/unlockAccounts", userRequestsController.unlockAccounts); 
router.get("/getLatestRequests", userRequestsController.getLatestRequests);
router.get("/getOldestRequests", userRequestsController.getOldestRequests);
router.post("/logUserRequest", userRequestsController.postRequest);
router.post("/postRequest", userRequestsController.postRequest);



module.exports=router;