let UserRequestsModel = require("../model/userRequests.model ");

let postRequest = (req, res, next) => {
    let userRequest = new UserRequestsModel({
        userId : req.body.userId,
        userName : req.body.userName,
        email : req.body.email,
        description: req.body.description,
        status: req.body.status,
        date: req.body.date
    });
    userRequest.save().then(userRequest => {
        res.status(201).json({
          message: 'User Request created!',
          userRequest: userRequest
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        })
      })
}

let getRequests = (req, res, next) => {
    UserRequestsModel.find({}).then((userRequests)=> {
        res.status(201).json({
            message: 'UserRequests Fetched!',
            userRequests: userRequests
          });
    })
    .catch(err => {
        res.status(500).json({
          error: err
        })
      })
}


module.exports={postRequest, getRequests};