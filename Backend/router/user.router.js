let express = require("express");
let router = express.Router();  //router reference. 
let UserController = require("../controller/user.controller.js");

//mapping sub path with http methods.  
router.post("/login",UserController.login);
router.post("/:userId/addToCart", UserController.addToCart);
router.get("/:userId/getCartItems", UserController.getCartItems);
router.post("/:userId/cartDeleteProduct", UserController.cartDeleteProduct);
router.post("/signup",UserController.signup); 
router.get("/", UserController.test);
router.get("/allUserDetails", UserController.getAllUserDetails);

//look for userId and execute the userById method
//any route containing :userId, our app will first execute userById() method
router.param("userId", UserController.userById);

module.exports=router;