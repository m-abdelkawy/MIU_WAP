const express = require('express');
const path = require('path');
const app = express();

const lstProduct = [
    {
        id: 5,
        name: "banana",
        description: "Yellow Fruit",
        price: "15 L.E"
    },
    {
        id: 4,
        name: "Orange",
        description: "speric fruit",
        price: "4 L.E"
    },
    {
        id: 12,
        name: "Apple",
        description: "Red, white or green fruit",
        price: "25 L.E"
    }
];

//configurations
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware

//routing
app.get('/', function(req, res, next){
    res.render('product',{
        id: 5,
        name: "banana",
        description: "type of fruit",
        price: "15 L.E"
    });
});

app.get('/content', function(req, res){
    let lstProduct = [
        {
            id: 5,
            name: "banana",
            description: "Yellow Fruit",
            price: "15 L.E"
        },
        {
            id: 4,
            name: "Orange",
            description: "speric fruit",
            price: "4 L.E"
        },
        {
            id: 12,
            name: "Apple",
            description: "Red, white or green fruit",
            price: "25 L.E"
        }
    ];
    
    res.render('shopping_cart', {lstProduct: lstProduct});
});

app.listen(app.get('port'));