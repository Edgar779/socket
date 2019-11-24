const mongoose = require('mongoose');
const makiSchema = mongoose.Schema({
    img: String,
    name:String,
    information:String,
    lot: String,
    price:String,
});
module.exports = mongoose.model('Maki', makiSchema);