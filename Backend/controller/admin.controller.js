let AdminModel = require("../model/admin.model.js");
let EmployeeModel = require("../model/employee.model.js");
let ProductModel = require("../model/product.model.js");
let EmployeeRequestsModel = require("../model/employeeRequests.model.js");

const bcrypt = require("bcrypt");

let signup = (req, res, next) => {
    //we install npm install --save bcrypt so that we can hash our password so it is secure
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const Admin = new AdminModel({
          email: req.body.email,
          password: hash,
          userName: req.body.userName,
          firstName: req.body.firstName,
          lastName: req.body.lastName
        });
        Admin.save()
          .then(result => {
            res.status(201).json({
              message: 'Admin created!',
              result: result
            });
          })
          .catch(err => {
            res.status(500).json({
              error: err
            })
          })
      });
  }

let login = (req, res, next) => {
    let fetchedAdmin;
    // attempt to find admin
    AdminModel.findOne({ userName: req.body.userName })
      .then(admin => {
        // throws error if admin not found by userName
        if(!admin){
          throw new Error('Auth failed')
        }
        // if user is found, set admin equal to fetchedAdmin
        fetchedAdmin = admin;
        // bcrypt is a node module used to encrypt password
        // here we use bcrypts compare method to check whether entered password is equal to hashed
        // password stored in DB
        return bcrypt.compare(req.body.password, admin.password)
      })
      .then(result => {
        // if result is false, wrong password was entered
        if(!result){
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        // if result is true, we use jason web token module to create a token so token is used to authenticate admin session
        const token = jwt.sign(
          {email: fetchedAdmin.email, adminId: fetchedAdmin._id },
          'secret_this_should_be_longer',
          {expiresIn: "1h"});
        // npm install --save jsonwebtoken
        res.status(200).json({
          token: token, fetchedAdmin: fetchedAdmin, expiresIn: 3600
        })
      })
    // I believe the code below is redundant so I commented it out temporarily 
    
    //   .catch(err => {
    //     return res.status(401).json({
    //       message: "Auth failed"
    //     });
    //   })
  }

//Retrieve all admin details 
let getAllAdminDetails = (req, res) => {

    AdminModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
        }
    })

}

//Add new employees
let addEmployeeDetails = (req, res) => {

    let employee = new EmployeeModel({
        email: req.body.email,
        userName: req.body.userName,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
        
            
    });

    employee.save((err, result) => {
        if (!err) {
            res.send("Record stored successfully ")
            //res.json({"msg":"Record stored successfully"})
        } else {
            res.send("Record didn't store ");
        }
    })
}

//Delete an employee
let deleteEmployeeByEmail = (req, res) => {
    let email = req.params.email;
    EmployeeModel.deleteOne({ email: email }, (err, result) => {
        if (!err) {
            if (result.deletedCount > 0) {
                res.send("Record deleted successfully")
            } else {
                res.send("Record not present");
            }
        } else {
            res.send("Error generated " + err);
        }
    })
}
	//Add new product
let addProductDetails = (req, res) => {

    let product = new ProductModel({
        
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
		description: req.body.description
        
        
            
    });

    product.save((err, result) => {
        if (!err) {
            res.send("Record stored successfully ")
            //res.json({"msg":"Record stored successfully"})
        } else {
            res.send(err);
        }
    })
}
	//Delete product
let deleteProductByName = (req, res) => {
    let name = req.params.name;
    ProductModel.deleteOne({ name: name }, (err, result) => {
        if (!err) {
            if (result.deletedCount > 0) {
                res.send("Record deleted successfully")
            } else {
                res.send("Record not present");
            }
        } else {
            res.send("Error generated " + err);
        }
    })
}
//Update product Details
let updateProductPrice= (req,res)=> {
    let name = req.body.name;
    let updatedPrice = req.body.price;
	
    ProductModel.updateMany({name:name},{$set:{price:updatedPrice}},(err,result)=> {
        if(!err){
            if(result.nModified>0){
                    res.send("Record updated succesfully")
            }else {
                    res.send("Record is not available");
            }
        }else {
            res.send("Error generated "+err);
        }
    })
}


let getAllEmployeeRequests = (req, res) => {

    EmployeeRequestsModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
        }
    })

}



module.exports = { login, signup, getAllAdminDetails, addEmployeeDetails, deleteEmployeeByEmail, addProductDetails, deleteProductByName, updateProductPrice, getAllEmployeeRequests};

