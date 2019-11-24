const mongoose = require('mongoose');
const rollSchema = mongoose.Schema({
    img: String,
    name:String,
    information:String,
    lot: String,
    price:String,
});
module.exports = mongoose.model('Roll', rollSchema);