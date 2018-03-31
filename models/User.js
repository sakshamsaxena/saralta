/*
	Main Class to manage User
*/

let UserMapper = require('../mappers/User.js');
let FormsMapper = require('../mappers/Forms.js');
let validateForm = require('../util/formValidation/FormValidation.js');
let vaildateParam = require('../util/paramValidation/ParameterValidation.js');

let UserModel = {};

UserModel.SubmitForm = function(_userId, _formId, _formData) {

	return new Promise(function(resolve, reject) {

		// Validate ID
		// It's an error string if it's not valid
		// Otherwise, it's a valid number
		var formId = vaildateParam.ValidateFormType(_formId);
		if (typeof formId === 'string') {
			reject(formId);
		}

		// Validate Form Data
		// It's an error string if it's not valid
		// Otherwise, it's a valid object
		var formData = validateForm(formId, _formData);
		if (typeof formData === 'string') {
			reject(formData);
		}

		FormsMapper.GetFormByType(formId)
			.then(function(form) {
				// Get Form Name
				var formType = form.FormType;
				// Add Document
				return UserMapper.AddDocument(_userId, formType, formData);
			})
			.then(function(doc) {
				if (doc) {
					resolve(doc);
				} else {
					reject('Operation Failed');
				}
			});
	});
};

module.exports = UserModel;
