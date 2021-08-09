const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/css', express.static(path.join(__dirname, '/css')))

app.get('/', function (req, res) {
    const date = new Date();
    const hours = date.getHours();
    let stylesheetlink = "";

    if (hours >= 6 && hours < 18)
        stylesheetlink = "css/day.css";
    else
        stylesheetlink = "css/night.css";
    res.render('index', { time: date.toTimeString(), stylesheetlink: stylesheetlink });
});

app.listen(3000);