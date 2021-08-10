const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();


//configurations
app.set('port', process.env.PORT || 3000);
app.use(cookieParser());

//parse url encoded forms
app.use(express.urlencoded({ extended: false }));

//view engine configurations
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//routes
app.get('/', function (req, res) {
    console.log(req.cookies); //object not iterable
    res.render('add-cookie', { cookies: req.cookies });
});

app.post('/add-cookie', function (req, res) {
    if ((req.body.cookie_key.length !== 0 || !req.body.cookie_key) || (req.body.cookie_value.length !== 0 || !req.body.cookie_value))
        res.cookie(req.body.cookie_key, req.body.cookie_value, { maxAge: 1000 * 60 }); //1 minute

    res.redirect('back');
});


app.listen(app.get('port'), function () {
    console.log(`App is running on port ${app.get('port')}`);
})