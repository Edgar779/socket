const mongoose = require('mongoose');
const gunkanSchema = mongoose.Schema({
    img: String,
    name:String,
    information:String,
    lot: String,
    price:String,
});
module.exports = mongoose.model('Gunkan',gunkanSchema);