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


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/computers/:id', function (req, res) {
    let response = {
        "cpu": "8 core 4Ghz",
        "ram": "16GB",
        "storage": "4TB NVME",
        "price": "$1500"
    };
    res.end(JSON.stringify(response));
});


app.listen(app.get('port'), function () {
    console.log(`App is running on port ${app.get('port')}`);
})