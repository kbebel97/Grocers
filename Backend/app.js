//Load all required modules 
let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

//router modules
var Product = require("./router/product.router.js");
var Employee = require("./router/employee.router.js");
var User = require("./router/user.router.js");
var Admin = require("./router/admin.router.js");

//Database URL Details 
let url = "mongodb://localhost:27017/grocers";

//middleware enable data from post method.
app.use(bodyParser.urlencoded({extended:true}));    // enable body part data  
app.use(bodyParser.json());                         // json data. 
app.use(cors());                                    // enable cors policy 

//Database connection without warning 
const mongooseDbOption ={                           // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,mongooseDbOption);             //ready to connect 

//Connect the data 
mongoose.connection

app.use('', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS, PUT"
    );
    next();
});


// router redirects
app.use("/product",Product);
app.use("/user",User);
app.use("/employee",Employee);
app.use("/admin", Admin);




app.listen(9090,()=>console.log("Server running on port number 9090"));
