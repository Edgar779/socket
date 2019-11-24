const mongoose = require('mongoose');
const sushiSchema = mongoose.Schema({
    img: String,
    name:String,
    information:String,
    lot: String,
    price:String,
});
module.exports = mongoose.model('Sushi',sushiSchema);