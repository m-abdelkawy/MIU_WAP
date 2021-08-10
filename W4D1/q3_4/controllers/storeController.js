const Store = require('../models/store');


exports.getStoreProducts = function(req, res){
    res.render('products', {products: Store.getAllProducts()})
}

exports.getStoreProductById = function(req, res){
    //catch obj props
    res.render('add-product', Store.getProductById(req.params['id'])); //or req.params.id
}