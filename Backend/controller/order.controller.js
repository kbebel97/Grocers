let OrderModel = require("../model/order.model.js");
const bcrypt = require("bcrypt");

let retrieveOrders = (req, res, next) => {
    OrderModel.find({}).then((fetchedOrders)=> {
        res.status(200).json({
            message: 'Orders fetched!',
            orders: fetchedOrders
          });
    })
}

let updateOrders = (req, res, next) => {
    console.log(req.body);
    let updatedOrders = [];
    req.body.forEach(order => {
        OrderModel.findByIdAndUpdate({_id: order._id}, order, {new: true}).then((updatedOrder)=> {
            updatedOrders.push(updatedOrder);
        });
    })
    console.log(updatedOrders);
    res.status(200).json({
        message: 'Orders Updated!',
        orders: updatedOrders
    });
}

let retrieveNewestOrders = (req, res, next) => {

}

module.exports = {retrieveOrders, updateOrders};