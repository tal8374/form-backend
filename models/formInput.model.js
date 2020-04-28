const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let formSchema = new mongoose.Schema({
    label: { type: Schema.Types.String },
    inputName: { type: Schema.Types.String },
    inputType: { type: Schema.Types.String },
    inputValue: { type: Schema.Types.String },
});

module.exports = formSchema;
