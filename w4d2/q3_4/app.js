const express = require('express');
const path = require('path');
const router = require('./router');
const session = require('express-session');
const app = express();

//const shoppingCartController = require('../q3_4/controllers/shoppingcartController');


//configurations
//session middleware (needs to be defined before the router middleware)
app.set('port', process.env.PORT || 3000);

app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

//middleware
app.use(express.urlencoded({extended: false})); //to parse ur encoded forms


//router middleware
app.use('/products', router)





//routing
/*
app.get('/', function(req, res, next){
    shoppingCartController.addProduct(req, res);
});

app.post('/addToCart', function(req, res){
    shoppingCartController.addToCart(req, res);
});

app.get('/content', function(req, res){
   shoppingCartController.getProducts(req, res);
});*/

app.listen(app.get('port'), function(){
    console.log(`App is running on port ${app.get('port')}`);
});