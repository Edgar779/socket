const mongoose = require('mongoose');
const setSchema = mongoose.Schema({
    img: String,
    name:String,
    information:String,
    lot: String,
    price:String,
});
module.exports = mongoose.model('Set',setSchema);