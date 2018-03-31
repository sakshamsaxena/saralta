/*
	Mongoose Models for Quick Access Schema
*/

let mongoose = require('mongoose');
let quickAccessSchema = require('../schema/QuickAccess.js');

let QuickAccess = mongoose.model('QuickAccess', quickAccessSchema);

let QuickAccessMapper = {};

QuickAccessMapper.GetQuickAccessItems = function(user) {
	return QuickAccess.findOne({UserID: user}).exec();
};

module.exports = QuickAccessMapper;
