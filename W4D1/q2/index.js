const express = require('express');
const url = require('url');
const session = require('express-session');
const app = express();


//configurations
app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//middleware
app.use(express.urlencoded({ extended: false }));
app.use('/css', express.static(__dirname + "/css"));

app.use(session({
    secret: "some secret key",
    resave: false,
    saveUninitialized: true
}));


app.get('/', function (req, res, next) {
    let stylesheetlink = "";
    const date = new Date();
    const hr = date.getHours();
    if (hr >= 6 && hr < 18)
        stylesheetlink = 'css/day.css';
    else
        stylesheetlink = 'css/night.css';

    res.render('view1', { stylesheetlink: stylesheetlink });
});

app.post('/result', function (req, res) {
    if (!req.session.info) {
        req.session.info = {};
    }
    
    req.session.info[req.body.name] = req.body.age;
    console.log(req.session.info);
    res.redirect('back');
});


app.listen(app.get('port'), function () {
    console.log(`app is running on port ${app.get('port')}`);
});