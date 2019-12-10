
var express = require('express');

var app = express();
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Menu = require('./models/Menu');
const Admin = require('./models/Admin');
const Set = require('./models/Set');
const Sushi = require('./models/Sushi');
const Gunkan = require('./models/Gunkan');
const Maki = require('./models/Maki');
const Roll = require('./models/Roll');
const Temaki = require('./models/Temaki');
const Sashimi = require('./models/Sashimi');
const Image = require('./models/Image');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // multer configuration
const sharp = require('sharp'); 
var cors = require('cors');
const Joi = require('joi');
const set = require('./routes/setroutes');
const validation = require('./validation/setvalidation');
const addMenu = require('./routes/setmenu');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const roleEnum = {
    user: 1,
    manager: 2,
    admin: 3

  }

// const Validations = require('./validation');
// let set = {
//     img: "page5_img2.jpg",
//     name: "Gunka",
//     information: "7500gram",
//     lot: "40kt",
//     price: 2500,
// }
// let setMenu = new Set(set); // this is modal object.
// setMenu.save()
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

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


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



app.post('/set', upload.single('category'), validation.addSet, set.addSet)
app.post('/addroll', upload.single('category'), validation.addSet, set.addRoll)
app.post('/addsashimi', upload.single('category'), validation.addSet, set.addSashimi)
app.post('/addgunkan', upload.single('category'), validation.addSet, set.addGunkan)
app.post('/addmaki', upload.single('category'), validation.addSet, set.addMaki)
app.post('/addtemaki', upload.single('category'), validation.addSet, set.addTemaki)
app.post('/addbackimage', upload.single('category'), validation.addImage, set.addImage)


app.post('/addsushi', upload.single('category'), validation.addSet, set.addSushi)

app.post('/deleteFood', async (req,res)=>{
    const deleteFood = await Set.findOneAndDelete({name: req.body.name});
    if(deleteFood === null){
        res.send({success: false, text: "Nman uteliq chka"});
    }
    else{

    
    res.send({success: true, text: "Hajoxutyamb jnjvel e"})
    }
    
    
// console.log(req.body);
});
app.post('/deleteFoodSushi', async (req,res)=>{
    const deleteFood = await Sushi.findOneAndDelete({name: req.body.name});
    if(deleteFood === null){
        res.send({success: false, text: "Nman uteliq chka"});
    }
    else{    
    res.send({success: true, text: "Hajoxutyamb jnjvel e"})
    }
});
app.post('/deleteImage', async (req,res)=>{
    const deleteFood = await Image.findOneAndDelete({name: req.body.name});
    if(deleteFood === null){
        res.send({success: false, text: "Nman nkar chka"});
    }
    else{    
    res.send({success: true, text: "Hajoxutyamb jnjvel e"})
    }
});
app.post('/deleteFoodSashimi', async (req,res)=>{
    const deleteFood = await Sashimi.findOneAndDelete({name: req.body.name});
    if(deleteFood === null){
        res.send({success: false, text: "Nman uteliq chka"});
    }
    else{    
    res.send({success: true, text: "Hajoxutyamb jnjvel e"})
    }
});
app.post('/deleteFoodGunkan', async (req,res)=>{
    const deleteFood = await Gunkan.findOneAndDelete({name: req.body.name});
    if(deleteFood === null){
        res.send({success: false, text: "Nman uteliq chka"});
    }
    else{    
    res.send({success: true, text: "Hajoxutyamb jnjvel e"})
    }
});
app.post('/deleteFoodRoll', async (req,res)=>{   
    const deleteFood = await Roll.findOneAndDelete({name: req.body.name});
    if(deleteFood === null){
        res.send({success: false, text: "Nman uteliq chka"});
    }
    else{   
    res.send({success: true, text: "Hajoxutyamb jnjvel e"})
    }
});
app.post('/deleteFoodMaki', async (req,res)=>{   
    const deleteFood = await Maki.findOneAndDelete({name: req.body.name});
    if(deleteFood === null){
        res.send({success: false, text: "Nman uteliq chka"});
    }
    else{   
    res.send({success: true, text: "Hajoxutyamb jnjvel e"})
    }
});

app.post('/deleteFoodTemaki', async (req,res)=>{   
    const deleteFood = await Temaki.findOneAndDelete({name: req.body.name});
    if(deleteFood === null){
        res.send({success: false, text: "Nman uteliq chka"});
    }
    else{   
    res.send({success: true, text: "Hajoxutyamb jnjvel e"})
    }
});
app.get('/set', set.getSet);  
app.get('/getsetmenu', set.getSetMenu);
app.get('/getsetroll', set.getSetRoll);
app.get('/getsetgunkan', set.getSetGunkan);
app.get('/getsetmaki', set.getSetMaki);
app.get('/getsettemaki', set.getSetTemaki);


app.get('/getushimenu', set.getSushiMenu);
app.get('/getsashimimenu', set.getSashimiMenu);
app.get('/getbackgrimage', set.getbackgrimage);
app.post('/getBasket', set.getBasket);
app.post('/getsushibasket', set.getSushiBasket);

app.post('/getRollbasket', set.getRollBasket);
app.post('/getSashimibasket', set.getSashimiBasket);
app.post('/getGunkanbasket', set.getGunkanBasket);
app.post('/getMakibasket', set.getMakiBasket);
app.post('/getTemakibasket', set.getTemakiBasket);

app.post('/addSet', addMenu.setFood);
// app.post('/addroll', addMenu.setRoll);
app.get('/logadmin', (req,res)=>{
res.sendFile(path.join(__dirname, './logadmin.html'))
});
app.post('/adminLogin', async (req,res)=>{


    const findAdmin = await Admin.findOne({ email: req.body.email });
    if (!findAdmin) {
        res.send("admin was not founded");
    //   return getResponse(false, "admin was not founded");
    }
    const comparePassword = await bcrypt.compare(req.body.password, findAdmin.password);
    if (!comparePassword) {
        res.send('Incorrect password');
    //   return getResponse(false, "Incorrect password");
    }
    let token = await jwt.sign({ _id: findAdmin._id, email: req.body.email, role: roleEnum.admin },
      's%4^3paraSA5Ddox8A$D!#',
      {
        expiresIn: '24h'
      }
    );
    res.sendFile(path.join(__dirname, './admin.html'));
// res.json({
//     success: true,
//     token: token
// });
    // return getResponse(true, "Admin successfuly logged in", token);






//     var ok = false;

//     Admin.find({email: req.body.email})
//     .then((data) => {
        
// await bcrypt.compare(req.body.password, data[0].password, function(err, ress) {
//         // res === true
//         console.log(ress);
//         if(res === true){
//             ok = true;
          
//         }
//     });
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     if(ok === true){
//         res.redirect('/adminpanel');
//     }

   
   
});

app.listen(process.env.PORT || 3003, () => {
    console.log(process.env.PORT);
});