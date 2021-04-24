let express = require("express");
let router = express.Router();  //router reference. 
let ProductController = require("../controller/product.controller.js");

//mapping sub path with http methods. 
router.post("/sampleRoute",ProductController.sample); 

router.get('/products', ProductController.getProducts);

module.exports=router;