const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new mongoose.Schema({
    userName: { type: Schema.Types.String, required: true, unique: true },
    password: { type: Schema.Types.String, required: true, unique: true },
});

module.exports = mongoose.model('User', userSchema);
