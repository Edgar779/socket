const mongoose = require('mongoose');
const temakiSchema = mongoose.Schema({
    img: String,
    name:String,
    information:String,
    lot: String,
    price:String,
});
module.exports = mongoose.model('Temaki',temakiSchema);