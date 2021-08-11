const express = require('express');
const path = require('path');

const app = express();

//app configurations
app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//express json parser
app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

let answers = ["It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
    "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
    "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]


app.get('/', function (req, res) {
    res.render('form');
});

app.get('/8ball', function (req, res) {
    console.log("get");
    let index = Math.floor(Math.random() * answers.length);
    res.send(answers[index]);
    res.end();
});


app.listen(app.get('port'), function () {
    console.log(`App is running on port ${app.get('port')}`);
})