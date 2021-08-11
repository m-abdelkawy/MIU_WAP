const express = require('express');
const session = require('express-session');
const app = express();


app.use(session({
    secret: "some secret key",
    resave: false,
    saveUninitialized: true
}));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    let output = "<ul>";
    if (req.session.list) {

        for (i of req.session.list) {
            output += `<li>${i}</li>`;
        }
    }
    output += "</ul><a href='/add'>add</href>";
    res.send(output);
});

app.get('/add', (req, res) => {
    res.send(`<form method="post"><input name="item" /><input type="submit" /></form>`);
});

app.post('/add', (req, res) => {
    if (!req.session.list) {
        req.session.list = [];
    }
    req.session.list.push(req.body.item);
    res.redirect(303, "/");
});

app.listen(3000);