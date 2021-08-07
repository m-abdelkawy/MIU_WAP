let express = require("express");
let bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

app.use("/add-product", function(req, res, next){
    console.log("in the middleware");
    res.send(`<form method="post" action="/product"><input name="title"><button type="submit">Submit</button></form>`);
});

app.use('/product', function(req, res, next){
    console.log(req.body);
    res.redirect('/');
});
app.listen(3000);