const mongoose = require('mongoose');
const menuSchema = mongoose.Schema({
    email: String,
    password: String
});
module.exports = mongoose.model('Admin',menuSchema);