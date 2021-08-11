const Product = require('../models/product');
const ShoppingCart = require('../models/shopping_cart');
const Store = require('../models/store');

let shoppingCart = new ShoppingCart(5);

exports.addProduct = function (req, res) {
    res.render('add-product');
};

exports.addToCart = function (req, res) {
    let productFromStore = Store.getProductById(req.body.id);
    shoppingCart.addProduct(productFromStore);


    if (!req.session.cart) {
        req.session.cart = {};
    }

    if (!req.session.cart[productFromStore.id]) {
        req.session.cart[productFromStore.id] = {
            price: productFromStore.price,
            quantity: 1
        };
    } else {
        req.session.cart[productFromStore.id].price += productFromStore.price;
        req.session.cart[productFromStore.id].quantity += 1;
    }

    req.session.cart[productFromStore.id].description = productFromStore.description;
    req.session.cart[productFromStore.id].id = productFromStore.id;
    req.session.cart[productFromStore.id].name = productFromStore.name;

    //console.log(req.session);
    // res.render('shopping_cart', { products: shoppingCart.getAllProducts() });


    //res.render('shopping_cart', { products: Object.values(req.session.cart) });
    res.end(JSON.stringify(Object.values(req.session.cart).map(elm => elm.quantity).reduce((acc, elm) => acc + elm, 0)));
}

/*exports.getAddedProducts = function (req, res) {

    //console.log(req.session);
    if (req.session.cart)
        res.render('shopping_cart', { products: Object.values(req.session.cart) });

    else
        res.redirect(404, '/');
}*/