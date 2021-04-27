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
var Order = require("./router/order.router.js")

//Database URL Details 
let url = "mongodb://localhost:27017/grocers";

//Cloud DB URL Details 
let cloudURL = 'mongodb+srv://Kacper:F3RnoSvralxtB4Ba@cluster0.of3ng.mongodb.net/grocers?retryWrites=true&w=majority';

//middleware enable data from post method.
app.use(bodyParser.urlencoded({extended:true}));    // enable body part data  
app.use(bodyParser.json());                         // json data. 
app.use(cors());                                    // enable cors policy 

//Database connection without warning 
const mongooseDbOption ={                           // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
//Connect to localDB
// mongoose.connect(url,mongooseDbOption);             //ready to connect 

//Connect to cloud DB
mongoose.connect(url).then(() => {//shamanthaka changed to local db connection
    console.log('Connected to DB');
})
.catch(()=> {
    console.log('Connection failed!');
})

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
app.use("/order", Order);




app.listen(9090,()=>console.log("Server running on port number 9090"));
