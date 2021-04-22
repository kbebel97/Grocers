let EmployeeModel = require("../model/employee.model.js");
const bcrypt = require("bcrypt");

let signup = (req, res, next) => {
    //we install npm install --save bcrypt so that we can hash our password so it is secure
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const Employee = new EmployeeModel({
          email: req.body.email,
          password: hash,
          userName: req.body.userName,
          firstName: req.body.firstName,
          lastName: req.body.lastName
        });
        Employee.save()
          .then(result => {
            res.status(201).json({
              message: 'Employee created!',
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
    let fetchedEmployee;
    // attempt to find employee
    EmployeeModel.findOne({ userName: req.body.userName })
      .then(employee => {
        // throws error if employee not found by userName
        if(!employee){
          throw new Error('Auth failed')
        }
        // if user is found, set user equal to fetched user
        fetchedEmployee = employee;
        // bcrypt is a node module used to encrypt password
        // here we use bcrypts compare method to check whether entered password is equal to hashed
        // password stored in DB
        return bcrypt.compare(req.body.password, employee.password)
      })
      .then(result => {
        // if result is false, wrong password was entered
        if(!result){
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        // if result is true, we use jason web token module to create a token so token is used to authenticate employee session
        const token = jwt.sign(
          {email: fetchedEmployee.email, employeeId: fetchedEmployee._id },
          'secret_this_should_be_longer',
          {expiresIn: "1h"});
        // npm install --save jsonwebtoken
        res.status(200).json({
          token: token, fetchedEmployee: fetchedEmployee, expiresIn: 3600
        })
      })
    // I believe the code below is redundant so I commented it out temporarily 

    //   .catch(err => {
    //     return res.status(401).json({
    //       message: "Auth failed"
    //     });
    //   })
  }

module.exports={login,signup};