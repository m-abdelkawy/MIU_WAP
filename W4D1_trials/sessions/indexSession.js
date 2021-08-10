/*Setting and retreiving a cookie*/

const express = require('express');
const parseUrl = require('parseurl');
const session = require('express-session');
const app = express();

//configurations
//set port
app.set('port', process.env.PORT || 3000);
//parses request cookies, populating req.cookies and req.signedCookies
app.use(session({secret: "salt for session"}));

//parse x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

//using the session middleware
app.use(function (req, res, next) {
    if (!req.session.views) {
        req.session.views = {};
    }
    let pathname = parseUrl(req).pathname;

    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;

    next();
});

app.get('/', function(req, res){
    res.send(`<a href='foo'>foo</a>    <a href='bar'>bar</a>`);
});

app.get('/foo', function(req, res){
    res.send(`You viewed this page ${req.session.views['/foo']} times, back <a href="/">Home</a>`);
});

app.get('/bar', function(req, res){
    console.log(req.session);
    res.send(`You viewed this page ${req.session.views['/bar']} times, back <a href="/">Home</a>`)
});

app.listen(app.get('port'), function () {
    console.log(`App is running on ${app.get('port')}`);
});

