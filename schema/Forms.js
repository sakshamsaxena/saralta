/*
	All Forms Schema.
	Uses Numerical IDs for easy tracking
*/

let mongoose = require('mongoose');
let autoIncrement = require('mongoose-plugin-autoinc').autoIncrement;

let Schema = mongoose.Schema;
let Mixed = mongoose.Schema.Types.Mixed;

let formsSchema = new Schema({
	_id: Number,
	FormType: {type: String},
	FormLayout: Mixed
});

formsSchema.plugin(autoIncrement, 'Form');

module.exports = formsSchema;
