const Set = require('../models/Set');
const path = require('path');
export const setFood = async (req, res, next) => {
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
    }
    catch (e) {
        throw e
    }
}

export const setRoll = async (req, res, next) => {
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
    }
    catch (e) {
        throw e
    }
}