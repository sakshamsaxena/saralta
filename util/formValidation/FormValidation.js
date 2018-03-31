/*
	Utility to Validate Form Data
*/

let validateDrivingLicense = require('./validators/DrivingLicense.js');

module.exports = function(type, formData) {

	switch(type) {
		case 2:
			return validateDrivingLicense(formData);
		default:
			return "Invalid Form Type";
	}
}