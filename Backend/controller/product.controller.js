let ProductModel = require("../model/product.model.js");

let sample = (req, res, next) => {

    const product = new ProductModel({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    });
    console.log(product);
    product.save();
    res.status(201).json({
        message: 'Product added successfully' + product
    });
}

let getProducts = (req, res, next) =>{
    ProductModel.find()
        .then(results =>{
            return res.json({products: results});
        });
}

module.exports={
    sample,
    getProducts
};