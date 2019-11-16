
var express = require('express');
var app = express();
const path = require('path');
bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Menu = require('./models/Menu');
// let user = {
//     img: "page5_img2.jpg",
//     name: "Gunka",
//     price: 2500,
//     information: "7500gram"
// }
// let Newmenu = new Menu(user); // this is modal object.
// Newmenu.save()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
mongoose.connect("mongodb://Edgar778:lenta123456789@ds121299.mlab.com:21299/lot2", { useNewUrlParser: true }, async () => {
    console.log('Mongodb connected on port 27017');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));



app.get('/sendMessage', (req, res) => {
    res.send('OK');
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/getmenuSushi', (req, res) => {
        Menu.find({})
        .then((data) => {
            res.send(data);
            res.end();
        })
        .catch((err) => {
            console.log(err);
        })
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.listen(process.env.PORT || 3003, () => {
    console.log(process.env.PORT);
});