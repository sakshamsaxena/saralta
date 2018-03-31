/*
	Mongoose Models for Forms Schema
*/

let mongoose = require('mongoose');
let formsSchema = require('../schema/Forms.js');
let Form = mongoose.model('Form', formsSchema);

let FormMapper = {};

FormMapper.GetFormByType = function(id) {
	return Form.findOne({_id: id}).exec();
};

FormMapper.CreateNewForm = function(newForm) {
	return Form.Create(newForm).exec();
};

FormMapper.UpdateOldForm = function(id, newForm) {
	return Form.findByIdAndUpdate(id, newForm).exec();
};

module.exports = FormMapper;
