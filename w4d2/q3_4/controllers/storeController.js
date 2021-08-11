const Store = require('../models/store');


exports.getStoreProducts = function(req, res){
    res.render('products', {products: Store.getAllProducts()})
}

exports.getStoreProductById = function(req, res){
    let item_count = 0;
    console.log("inside StoreController method - getStoreProductById();");
    console.log(req.session);
    if(req.session.cart){
        item_count = Object.values(req.session.cart).map(elm => elm.quantity).reduce((acc, current)=>acc + current, 0);
        console.log(req.session.cart);
    }

    console.log('item_count: ' + item_count);
    //catch obj props
    res.render('add-product', {...Store.getProductById(req.params['id']), item_count: item_count}); //or req.params.id
}