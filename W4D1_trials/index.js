/*Setting and retreiving a cookie*/

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

//configurations
//set port
app.set('port', process.env.PORT || 3000);
//parses request cookies, populating req.cookies and req.signedCookies
app.use(cookieParser());

//parse x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

//routing
app.get('/', function (req, res) {
    if (req.cookies.remember) {
        res.send(`remembered - click to <a href='/forget'>Forget</a>`);
    } else {
        res.send(`
        <form method="POST" action="/">
            <label>
                <input type='checkbox' name='remember'>
                Remember me
            </label>
            <input type='submit' value='Submit'>
        </form>
        `);
    }
});

app.post('/', function (req, res) {
    if (req.body.remember)
        res.cookie('remember', 1);

    res.redirect('/');
});

app.get('/forget',function(req, res){
    res.clearCookie('remember');
    res.redirect('back');
});

app.listen(app.get('port'));