/*
	Validation for Form Type parameter
*/

module.exports = function(type) {

	// Check if indeed a number
	const reg = /^\d+$/;

	if (reg.test(type)) {
		return parseInt(type);
	} else {
		return 'Not a valid number';
	}
};
