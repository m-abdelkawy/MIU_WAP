let express = require('express');

/**/
/*let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended: false});*/
/**/

let app = express();
let port = process.env.PORT || 3000;
app.use(express.urlencoded({extended: false}));

/*app.use('/ddd', function(req, res, next){
    res.send(`<form method="POST" action="/result">Name<input type="text" name="name">Age<input type="text" name="age"><input type="submit" value="Submit Query"></form>`);
});*/

app.use('/', function(req, res, next){
    res.send(`<form method="POST" action="/result">Name<input type="text" name="name">Age<input type="text" name="age"><input type="submit" value="Submit Query"></form>`);
});

app.use('/result'/*, urlencodedParser*/, function(req, res){
    res.send(req.body);
    console.log(req.body);
});

app.listen(port);