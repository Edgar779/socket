const mongoose = require('mongoose');
const menuSchema = mongoose.Schema({
    img: String,
    name:String,
    information:String,
    price:Number,
});
module.exports = mongoose.model('Menu',menuSchema);