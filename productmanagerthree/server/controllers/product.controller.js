const Product = require('../models/product.model');

// CRUD Below -----------------------------------------

// Create
module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

// Get / Read All
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => {
            console.log(products);
            response.json(products)
        })
        .catch(err => response.json(err));
}

// Get / Read One
module.exports.getOneProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => {
            console.log(product);
            response.json(product)
        })
        .catch(err => response.json(err));
}

// Update
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true}) //we will have to enable validations here
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

// Delete
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}