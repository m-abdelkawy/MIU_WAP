const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res)=>{
    let name = req.query.name;
    let age = req.query.age;
    if(!name){
        name ="person";
    }
    if(!age){
        age = 25;
    }
    res.send(`Welcome ${name}, age: ${age}`);
});

app.listen(port);