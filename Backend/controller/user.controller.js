let UserModel = require("../model/user.model.js");
const bcrypt = require("bcrypt");

let signup = (req, res, next) => {
    //we install npm install --save bcrypt so that we can hash our password so it is secure
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const User = new UserModel({
          email: req.body.email,
          password: hash,
          //userName: req.body.userName,
          firstName: req.body.firstName,
          lastName: req.body.lastName
        });
        User.save()
          .then(result => {
            res.status(201).json({
              message: 'User created!',
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
    let fetchedUser;
    // attempt to find user
    UserModel.findOne({ email: req.body.email })
      .then(user => {
        // throws error if user not found by userName
        if(!user){
          throw new Error('Auth failed')
        }
        // if user is found, set user equal to fetched user
        fetchedUser = user;
        // bcrypt is a node module used to encrypt password
        // here we use bcrypts compare method to check whether entered password is equal to hashed
        // password stored in DB
        return bcrypt.compare(req.body.password, user.password)
      })
      .then(result => {
        // if result is false, wrong password was entered
        if(!result){
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        // if result is true, we use jason web token module to create a token so token is used to authenticate user session
        // 
        const token = jwt.sign(
          {email: fetchedUser.email, userId: fetchedUser._id },
          'secret_this_should_be_longer',
          {expiresIn: "1h"});
        // npm install --save jsonwebtoken
        res.status(200).json({
          token: token, fetchedUser: fetchedUser, expiresIn: 3600
        })
      })
      // I believe the code below is redundant so I commented it out temporarily 

      // .catch(err => {
      //   return res.status(401).json({
      //     message: "Auth failed"
      //   });
      // })
}

let getAllUserDetails = (req, res) => {

    UserModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
        }
    })

}

let test = (req, res, next) => {
  res.status(200).json({hello: "hello"});
}

let userById = (req, res, next, id) => {
  User.findById(id)
      .exec((err, user) => {
          if(err || !user){
              return res.status(400).json({
                  error: "user not found"
              });
          }
          req.profile = user //adds profile object in req object with user info
          next();
      });
}

module.exports = { login, signup, test, getAllUserDetails, userById};
