/*
	Mongoose Models for User
*/

let mongoose = require('mongoose');
let userSchema = require('../schema/User.js');

let User = mongoose.model('User', userSchema);

let UserMapper = {};

UserMapper.AddDocument = function(user, type, formData) {

	return User.findByIdAndUpdate(user, {'$push': {
		'Documents': {
			'Type': type,
			'Doc': formData
		}
	}}).exec();
};

module.exports = UserMapper;
