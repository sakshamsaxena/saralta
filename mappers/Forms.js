/*
	Mongoose Models for Forms Schema
*/

let mongoose = require('mongoose');
let formsSchema = require('../schema/Forms.js');
let Form = mongoose.model('Form', formsSchema);

let FormMapper = {};

FormMapper.GetAllFormTypes = function() {
	return Form.find({}).exec();
}

FormMapper.GetFormByType = function(id) {
	return Form.findOne({_id: id}).exec();
};

FormMapper.CreateNewForm = function(newForm) {
	return Form.create(newForm).exec();
};

FormMapper.UpdateOldForm = function(id, newForm) {
	return Form.findByIdAndUpdate(id, {'FormLayout': newForm}).exec();
};

module.exports = FormMapper;
