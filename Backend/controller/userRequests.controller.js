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
    // // console.log(req.body);
    // UserModel.find().where('_id').in(req.body.userIds).then((fetchedUsers)=> {
    //         console.log(fetchedUsers);
    //         fetchedUsers.forEach((fetchedUser)=> {
    //             let updatedFetchedUser = new UserModel({
    //                 _id: fetchedUser._id,
    //                 email : fetchedUser.email,
    //                 userName : fetchedUser.userName,
    //                 shippingAddresses : fetchedUser.shippingAddresses,
    //                 password : fetchedUser.password,
    //                 numAttempts: 0,
    //                 paymentMethods: fetchedUser.paymentMethods,
    //                 dateOfBirth: fetchedUser.dateOfBirth,
    //                 firstName :fetchedUser.firstName,
    //                 lastName: fetchedUser.lastName,
    //                 cart: fetchedUser.cart
    //             })
    //             UserModel.updateOne({_id: fetchedUser._id}, updatedFetchedUser).then(()=>{
    //             })
    //         }
    //     )
    // })
    // .then(()=> {
    //     userRequestsModel.deleteMany().where('_id').in(req.body.updatedRequests).then(()=> {
    //         userRequestsModel.find({}).then((updatedRequestsList)=> {
    //             res.status(200).json({
    //                 message: 'Unlocked Accounts!', fetchedRequests: updatedRequestsList
    //             });
    //         })
    //     })
    // })
    console.log(req.body.updatedIds);
    UserModel.find().where('_id').in(req.body.updatedIds).then((users)=> {
        users.forEach((fetchedUser)=> {
            let updatedUser = new UserModel({
                cart:  fetchedUser.cart,
                shippingAddresses: fetchedUser.shippingAddresses,
                _id: fetchedUser._id,
                email: fetchedUser.email,
                userName: fetchedUser.userName,
                firstName: fetchedUser.firstName,
                lastName: fetchedUser.lastName,
                paymentMethods: fetchedUser.paymentMethods,
                dateOfBirth: fetchedUser.dateOfBirth,
                numAttempts: 0
            })
            UserModel.updateOne({_id: fetchedUser._id}, updatedUser).then(()=> {

            })
        })
    }).then(userRequestsModel.find().where('_id').in(req.body.userRequests).deleteOne().then(()=> {
            userRequestsModel.find({}).then((updatedRequestsList)=> {
                res.status(200).json({
                message: 'Unlocked Accounts!', fetchedRequests: updatedRequestsList
          });
    })
    }))
}

let getLatestRequests = (req, res, next) => {
    userRequestsModel.find().sort({date: -1}).then((fetchedRequests)=> {
        res.status(200).json({
            message: 'fetched User Requests!',
            userRequests: fetchedRequests
          });
    })
}

let getOldestRequests = (req, res, next) => {
    userRequestsModel.find().sort({created_at: -1}).then((fetchedRequests)=> {
        res.status(200).json({
            message: 'fetched User Requests!',
            userRequests: fetchedRequests
          });
    })

}

let searchRequests = (req, res, next) => {
    console.log(req.params.email);
    userRequestsModel.find({"email": req.params.email}).then((fetchedRequests)=> {
        console.log(fetchedRequests);
        res.status(200).json({
            message: 'fetched User Requests!',
            userRequests: fetchedRequests
          });
    })
}



module.exports={postRequest, getRequests, unlockAccounts, getLatestRequests, getOldestRequests, searchRequests};
