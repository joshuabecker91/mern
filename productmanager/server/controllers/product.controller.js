const Product = require('../models/product.model');

module.exports.showProduct = (request, response) => {
    Product.find()
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err));
}
