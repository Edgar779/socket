const Set = require('../models/Set');
const Sushi = require('../models/Sushi');
const Roll = require('../models/Roll');
const Sashimi = require('../models/Sashimi');
const Gunkan = require('../models/Gunkan');
const Maki = require('../models/Maki');
const Temaki = require('../models/Temaki');

const path = require('path');
export const addSet = async (req, res, next) => {
    // console.log(req.file);
    try {
        let set = {
            img: req.file.filename,
            name: req.body.name,
            information: req.body.information,
            lot: req.body.lot,
            price: req.body.price,
        }
        let setMenu = new Set(set); // this is modal object.
        setMenu.save()
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
            res.json("uteliq@ hajoxutyamb avelacvel e")
    }
    catch (e) {
        throw e
    }
}

export const addRoll = async (req, res, next) => {
    // console.log(req.file);
    try {
        let set = {
            img: req.file.filename,
            name: req.body.name,
            information: req.body.information,
            lot: req.body.lot,
            price: req.body.price,
        }
        let setMenu = new Roll(set); // this is modal object.
        setMenu.save()
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
            res.json("uteliq@ hajoxutyamb avelacvel e")
    }
    catch (e) {
        throw e
    }
}

export const addSashimi = async (req, res, next) => {
    // console.log(req.file);
    try {
        let set = {
            img: req.file.filename,
            name: req.body.name,
            information: req.body.information,
            lot: req.body.lot,
            price: req.body.price,
        }
        let setMenu = new Sashimi(set); // this is modal object.
        setMenu.save()
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
            res.json("uteliq@ hajoxutyamb avelacvel e")
    }
    catch (e) {
        throw e
    }
}

export const addGunkan = async (req, res, next) => {
    // console.log(req.file);
    try {
        let set = {
            img: req.file.filename,
            name: req.body.name,
            information: req.body.information,
            lot: req.body.lot,
            price: req.body.price,
        }
        let setMenu = new Gunkan(set); // this is modal object.
        setMenu.save()
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
            res.json("uteliq@ hajoxutyamb avelacvel e")
    }
    catch (e) {
        throw e
    }
}

export const addMaki = async (req, res, next) => {
    // console.log(req.file);
    try {
        let set = {
            img: req.file.filename,
            name: req.body.name,
            information: req.body.information,
            lot: req.body.lot,
            price: req.body.price,
        }
        let setMenu = new Maki(set); // this is modal object.
        setMenu.save()
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
            res.json("uteliq@ hajoxutyamb avelacvel e")
    }
    catch (e) {
        throw e
    }
}

export const addTemaki = async (req, res, next) => {
    // console.log(req.file);
    try {
        let set = {
            img: req.file.filename,
            name: req.body.name,
            information: req.body.information,
            lot: req.body.lot,
            price: req.body.price,
        }
        let setMenu = new Temaki(set); // this is modal object.
        setMenu.save()
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
            res.json("uteliq@ hajoxutyamb avelacvel e")
    }
    catch (e) {
        throw e
    }
}

export const addSushi = async (req, res, next) => {
    // console.log(req.file);
    try {
        let set = {
            img: req.file.filename,
            name: req.body.name,
            information: req.body.information,
            lot: req.body.lot,
            price: req.body.price,
        }
        let setMenu = new Sushi(set); // this is modal object.
        setMenu.save()
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
            res.json("uteliq@ hajoxutyamb avelacvel e")
    }
    catch (e) {
        throw e
    }
}

export const getSet = async (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, '../menu.html'))
        // Set.find({})
        //     .then((data) => {
        //         res.send(data);
        //         res.end();
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
    }
    catch (e) {
        throw e
    }
}

export const getSetMenu = async (req, res, next) => {
    try {
        Set.find({})
            .then((data) => {
                res.send(data);
                res.end();
            })
            .catch((err) => {
                console.log(err);
            })
    }
    catch (e) {
        throw e
    }
}

export const getSetRoll = async (req, res, next) => {
    try {
        Roll.find({})
            .then((data) => {
                res.send(data);
                res.end();
            })
            .catch((err) => {
                console.log(err);
            })
    }
    catch (e) {
        throw e
    }
}


export const getSetGunkan = async (req, res, next) => {
    try {
        Gunkan.find({})
            .then((data) => {
                res.send(data);
                res.end();
            })
            .catch((err) => {
                console.log(err);
            })
    }
    catch (e) {
        throw e
    }
}
export const getSetMaki = async (req, res, next) => {
    try {
        Maki.find({})
            .then((data) => {
                res.send(data);
                res.end();
            })
            .catch((err) => {
                console.log(err);
            })
    }
    catch (e) {
        throw e
    }
}

export const getSetTemaki = async (req, res, next) => {
    try {
        Temaki.find({})
            .then((data) => {
                res.send(data);
                res.end();
            })
            .catch((err) => {
                console.log(err);
            })
    }
    catch (e) {
        throw e
    }
}

export const getSushiMenu = async (req, res, next) => {
    try {
        Sushi.find({})
            .then((data) => {
                res.send(data);
                res.end();
            })
            .catch((err) => {
                console.log(err);
            })
    }
    catch (e) {
        throw e
    }
}

export const getSashimiMenu = async (req, res, next) => {
    try {
        Sashimi.find({})
            .then((data) => {
                res.send(data);
                res.end();
            })
            .catch((err) => {
                console.log(err);
            })
    }
    catch (e) {
        throw e
    }
}









export const getBasket = async (req, res, next) => {
    try {
        // console.log(req.body[1].lot);
        const arr = [];
     for(let i = 0; i < req.body.length; i++){
await Set.find({name: req.body[i].name}).then((data)=>{
    var enteredlot = req.body[i].lot;
    for(let i = 0; i < data.length; i++){
var obj = {
    img: data[i].img,
    name: data[i].name,
    information: data[i].information,
    lot: data[i].lot,
    enteredlot: enteredlot, 
    price: data[i].price
}
arr.push(obj);
    }
})
     }   
res.json(arr);
      
    }
    catch (e) {
        throw e
    }
}

export const getSushiBasket = async (req, res, next) => {
    try {
        // console.log(req.body[1].lot);
        const arr = [];
     for(let i = 0; i < req.body.length; i++){
await Sushi.find({name: req.body[i].name}).then((data)=>{
    var enteredlot = req.body[i].lot;
    for(let i = 0; i < data.length; i++){
var obj = {
    img: data[i].img,
    name: data[i].name,
    information: data[i].information,
    lot: data[i].lot,
    enteredlot: enteredlot, 
    price: data[i].price
}
arr.push(obj);
    }
})
     }   
res.json(arr);
      
    }
    catch (e) {
        throw e
    }
}



export const getRollBasket = async (req, res, next) => {
    try {
        // console.log(req.body[1].lot);
        const arr = [];
     for(let i = 0; i < req.body.length; i++){
await Roll.find({name: req.body[i].name}).then((data)=>{
    var enteredlot = req.body[i].lot;
    for(let i = 0; i < data.length; i++){
var obj = {
    img: data[i].img,
    name: data[i].name,
    information: data[i].information,
    lot: data[i].lot,
    enteredlot: enteredlot, 
    price: data[i].price
}
arr.push(obj);
    }
})
     }   
res.json(arr);
      
    }
    catch (e) {
        throw e
    }
}

export const getSashimiBasket = async (req, res, next) => {
    try {
        // console.log(req.body[1].lot);
        const arr = [];
     for(let i = 0; i < req.body.length; i++){
await Sashimi.find({name: req.body[i].name}).then((data)=>{
    var enteredlot = req.body[i].lot;
    for(let i = 0; i < data.length; i++){
var obj = {
    img: data[i].img,
    name: data[i].name,
    information: data[i].information,
    lot: data[i].lot,
    enteredlot: enteredlot, 
    price: data[i].price
}
arr.push(obj);
    }
})
     }   
res.json(arr);
      
    }
    catch (e) {
        throw e
    }
}

export const getGunkanBasket = async (req, res, next) => {
    try {
        // console.log(req.body[1].lot);
        const arr = [];
     for(let i = 0; i < req.body.length; i++){
await Gunkan.find({name: req.body[i].name}).then((data)=>{
    var enteredlot = req.body[i].lot;
    for(let i = 0; i < data.length; i++){
var obj = {
    img: data[i].img,
    name: data[i].name,
    information: data[i].information,
    lot: data[i].lot,
    enteredlot: enteredlot, 
    price: data[i].price
}
arr.push(obj);
    }
})
     }   
res.json(arr);
      
    }
    catch (e) {
        throw e
    }
}


export const getMakiBasket = async (req, res, next) => {
    try {
        // console.log(req.body[1].lot);
        const arr = [];
     for(let i = 0; i < req.body.length; i++){
await Maki.find({name: req.body[i].name}).then((data)=>{
    var enteredlot = req.body[i].lot;
    for(let i = 0; i < data.length; i++){
var obj = {
    img: data[i].img,
    name: data[i].name,
    information: data[i].information,
    lot: data[i].lot,
    enteredlot: enteredlot, 
    price: data[i].price
}
arr.push(obj);
    }
})
     }   
res.json(arr);
      
    }
    catch (e) {
        throw e
    }
}

export const getTemakiBasket = async (req, res, next) => {
    try {
        // console.log(req.body[1].lot);
        const arr = [];
     for(let i = 0; i < req.body.length; i++){
await Temaki.find({name: req.body[i].name}).then((data)=>{
    var enteredlot = req.body[i].lot;
    for(let i = 0; i < data.length; i++){
var obj = {
    img: data[i].img,
    name: data[i].name,
    information: data[i].information,
    lot: data[i].lot,
    enteredlot: enteredlot, 
    price: data[i].price
}
arr.push(obj);
    }
})
     }   
res.json(arr);
      
    }
    catch (e) {
        throw e
    }
}