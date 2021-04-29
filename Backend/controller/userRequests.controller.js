let UserRequestsModel = require("../model/userRequests.model ");
let UserModel = require('../model/user.model.js');
const userRequestsModel = require("../model/userRequests.model ");

let postRequest = (req, res, next) => {
    console.log('Hello');
	console.log(req.body);
    let userRequest = new UserRequestsModel({
        userId : req.body.userId,
        userName : req.body.userName,
        email : req.body.email,
        description: req.body.description,
        date: req.body.date
    });
    userRequest.save().then(userRequest => {
        
        res.status(201).json({
          message: 'Request Submitted!',
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

let unlockAccounts = (req, res, next) => {
    req.body.forEach(updatedRequest => {
        let fetchedUser_;
        UserModel.find({'_id': updatedRequest.userId}).then(fetchedUser => {
            fetchedUser_ = fetchedUser; 
            return updatedRequest.userId
        })
        .then((userId)=> {
            let updatedFetchedUser = new UserModel({
                email : fetchedUser_.email,
                userName : fetchedUser_.userName,
                shippingAddresses : fetchedUser_.shippingAddresses,
                password : fetchedUser_.password,
                numAttempts: 0,
                locked : false,
                firstName :fetchedUser_.firstName,
                lastName: fetchedUser_.lastName
            })
            UserModel.updateOne({_id : userId}, updatedFetchedUser).then(()=>{
                userRequestsModel.deleteOne({_id : updatedRequest._id }).then(()=>{
                })
            })
        })
    })
    userRequestsModel.find({}).then((updatedRequestsList)=> {
        res.status(200).json({
            message: 'Unlocked Accounts!', fetchedRequests: updatedRequestsList
          });
    })

}

let getLatestRequests = (req, res, next) => {
    userRequestsModel.find().sort({date: -1}).then((fetchedRequests)=> {
        res.status(200).json({
            message: 'fetched User Requests!',
            fetchedRequests: fetchedRequests
          });
    })
}

let getOldestRequests = (req, res, next) => {
    userRequestsModel.find().sort({created_at: -1}).then((fetchedRequests)=> {
        console.log(fetchedOrders);
        res.status(200).json({
            message: 'fetched User Requests!',
            fetchedRequests: fetchedRequests
          });
    })

}






module.exports={postRequest, getRequests, unlockAccounts, getLatestRequests, getOldestRequests};