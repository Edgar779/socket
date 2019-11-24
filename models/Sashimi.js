const mongoose = require('mongoose');
const sashimiSchema = mongoose.Schema({
    img: String,
    name:String,
    information:String,
    lot: String,
    price:String,
});
module.exports = mongoose.model('Sashimi',sashimiSchema);