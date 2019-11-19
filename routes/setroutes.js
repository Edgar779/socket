const Set = require('../models/Set');
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