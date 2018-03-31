/*
	User Schema
*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = mongoose.Schema.Types.ObjectId;
let Mixed = mongoose.Schema.Types.Mixed;

let userSchema = {
	_id: ObjectId,
	Name: String,
	Email: String,
	Phone: Number,
	Age: Number,
	State: String,
	PinCode: Number,
	CreatedOn: {
		type: Date,
		default: Date.now
	},
	LastModified: {
		type: Date,
		default: Date.now
	},
	Documents: {type: Mixed}
};

module.exports = new Schema(userSchema);

/*var s = new Schema(userSchema);
mongoose.connect('mongodb://localhost:27017/saralta');
var m = mongoose.model('Users', s);

m.create({
	Name: 'X',
	Email: 'Y',
	Phone: '78',
	Age: 12,
	State: 'QQ',
	PinCode: 9878,
	Documents: [{type: "Bhai Bhai", Doc: {
			"License No": "DL-1234567890123",
			"Name": "Foo Bar",
			"S/W/D": "Foozie Bar",
			"DOB": "25/12/1994",
			"BG": "U",
			"Address": "Long Address String with PIN",
			"Authorisation to Drive": [{
				"Type": "LMV-NT",
				"Date Of Issue": "23/10/2000"
			}],
			"Issue Date": "23/10/2000",
			"Validity": "23/10/2030"
	} }]
}, function(err, docs) {
	if(err)
		throw err;
	console.log(docs);
	mongoose.connection.close();
})
*/