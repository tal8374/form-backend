const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const formInput = require('./formInput.model');

let formSchema = new mongoose.Schema({
    formName: { type: Schema.Types.String },
    formInputs: [formInput],
    formSubmissions: [[formInput]],
});

module.exports = mongoose.model('Form', formSchema);
