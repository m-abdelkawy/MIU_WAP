const express = require('express');
const port = 3000;
const app = express();
const arr = ["orange", "Lemon", "banana"];
app.use(express.urlencoded({extended: false}));

app.get('/', function (req, res) {
    let result = `<ul>`;
    for (let item of arr) {
        result += `<li>${item}</li>`;
    }
    result += `</ul>`;
    res.send(result);
});

app.get('/add', function (req, res) {
    res.send(`<form method="POST" action="/add"><input type="text" name="text"/><input type="submit" value="Submit"/></form>`);
});

app.post('/add', function (req, res) {
    arr.push(req.body.text);
    res.redirect('/');
});

app.listen(port);