 
var express = require('express');
var app = express();
const path = require('path');
bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));



app.get('/sendMessage', (req, res) => {
    res.send('OK');
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.listen(process.env.PORT || 3003, () => {
    console.log(process.env.PORT);
});