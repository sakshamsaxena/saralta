/*
	Mongoose Models for Forms Schema
*/

let mongoose = require('mongoose');
let formsSchema = require('../schema/Forms.js');
let Form = mongoose.model('Form', formsSchema);

let FormMapper = {};

FormMapper.GetFormByType = function(_idForm) {
	// 
}

FormMapper.CreateNewForm = function(newForm) {
	// 
}

FormMapper.UpdateOldForm = function(newForm) {
	//
}

// Form.create({FormType: "VoterLicense", FormLayout: {foo: "Bar"}}, function(err, form) {
// 	if (err)
// 		throw err;
// 	console.log(form);
// 	mongoose.connection.close();
// });
module.exports = FormMapper;
