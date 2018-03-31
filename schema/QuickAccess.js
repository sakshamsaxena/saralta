/*
	Quick Access Schema
*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = mongoose.Schema.Types.ObjectId;
let Mixed = mongoose.Schema.Types.Mixed;

let quickAccessSchema = {
	_id: ObjectId,
	UserID: ObjectId,
	Items: [{type: Mixed}]
};

module.exports = new Schema(quickAccessSchema);
