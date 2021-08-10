/*Setting and removing a persistent cookie*/

/*Setting and retreiving a cookie*/

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

//configurations
//set port
app.set('port', process.env.PORT || 3000);
//parses request cookies, populating req.cookies and req.signedCookies
app.use(cookieParser("salt for a cookie signing"));

//parse x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));


app.get('/', function (req, res) {
    if (req.signedCookies.remember) {
        res.send(`Remembered - clock to <a href="/forget">Forget</a>`);
    } else {
        res.send(`
    <form method="POST" action="/">
        <label>
            <input type="checkbox" name="remember"/>
            Remember me
        </label>
        <input type="submit" value="Submit"/>
    </form>
    `);
    }
});

app.post('/', function (req, res) {
    if (req.body.remember)
        // res.cookie('remember', 1, { maxAge: 1000 * 60*60*24*7 }); //1 week
        res.cookie('remember', 1, { expires: new Date().getTime() + 1000 * 60 * 60 * 24, signed: true }); //1 minute

    res.redirect('back');
});

app.get('/forget', function (req, res) {
    res.clearCookie('remember');
    res.redirect('back');
});

app.listen(app.get('port'));