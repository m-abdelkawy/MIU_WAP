let express = require('express');
let bodyParser = require('body-parser');

let app = express();

let port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json()

//like a middleware between request and response
app.use('/assets', express.static(__dirname + '/public'));

app.set("view engine", "ejs");

app.use('/', function (req, res, next) {
    console.log(`Request URL: ${req.url}`);
    next();
});

/*app.get("/", function(req, res){
    res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet"/></head><body><h1>Hello World</h1></body></html>')
});*/

app.get("/", function (req, res) {
    res.render("index");
});

/*app.get("/api", function (req, res) {
    res.json({ firstname: "John", lastname: "Doe" });
});*/

/*app.get("/person/:id", function (req, res) {
    res.send(`<html><head></head><body><h1>Person: ${req.params.id}</h1></body></html>`)
});*/
/*app.get("/person/:id", function (req, res) {
    console.log(req.query);
    res.render("person", { ID: req.params['id'], QSTR: req.query.qstr });
});*/

app.post('/person',urlencodedParser, function(req, res){
    res.send('Thank you!');
    console.log(req.body);
});
app.post('/personjson', jsonParser, function(req, res){
    res.send("Thank you for the JSON Data!");
    console.log(req.body);

});

app.listen(port);