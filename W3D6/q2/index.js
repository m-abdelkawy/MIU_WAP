const express = require('express');
const path = require('path');

const app = express();

//configurations
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(express.urlencoded({ extended: false }));

//routes
app.get('/', function (req, res, next) {
    res.render('index');
});

app.post('/result', function (req, res) {
    res.render('result', { name: req.body.name, age: req.body.age });
});

app.listen(app.get('port'));