const mongoose = require('mongoose');
const setSchema = mongoose.Schema({
    img: String,
    name: String
});
module.exports = mongoose.model('Image',setSchema);