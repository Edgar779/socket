const Joi = require('joi');

var cors = require('cors')


export const addSet = async (req, res, next) => {
    try {
        if (req.file !== undefined) {
        req.body.filename = req.file.filename;
    }
    else {
        req.body.filename = '';
    }
        const data = req.body;
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            information: Joi.string().required(),
            lot: Joi.string().required(),
            price: Joi.string().required(),
            filename: Joi.string().required()
        });

        const result = Joi.validate(data, schema);
        if (result.error) {
            return res.send(result.error.details[0].message);
        }
        return next();
    }
    catch (e) {
        throw e;
    }

};

export const addImage = async (req, res, next) => {
    try {
        if (req.file !== undefined) {
        req.body.filename = req.file.filename;
    }
    else {
        req.body.filename = '';
    }
        const data = req.body;
        const schema = Joi.object().keys({
           
            filename: Joi.string().required()
        });

        const result = Joi.validate(data, schema);
        if (result.error) {
            return res.send(result.error.details[0].message);
        }
        return next();
    }
    catch (e) {
        throw e;
    }

};
