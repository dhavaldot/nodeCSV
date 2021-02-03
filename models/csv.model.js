const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id: Number,
    Name: String,
    No: Number,
    City: String
});

module.exports = mongoose.model('User', UserSchema);