/*
	Main Class to manage Forms
*/

let FormsMapper = require('../mappers/Forms.js');
let validateForm = require('../util/formValidation/FormValidation.js');
let vaildateParam = require('../util/paramValidation/ParameterValidation.js');

let FormModel = {};

FormModel.GetFormTypes = function() {

	return new Promise(function(resolve, reject) {

		FormsMapper.GetAllFormTypes()
			.then(function(forms) {
				var types = [];
				for (var i = 0; i < forms.length; i++) {
					types.push(forms[i].FormType);
				}
				resolve(types);
			})
			.catch(function(err) {
				reject(err);
			});
	});
};

FormModel.GetFormLayout = function(_id) {

	return new Promise(function(resolve, reject) {

		// Validate ID
		// It's an error string if it's not valid
		// Otherwise, it's a valid number
		var id = vaildateParam.ValidateFormType(_id);
		if (typeof id === 'string') {
			reject(id);
		}

		// Get the Form Layout
		FormsMapper.GetFormByType(id)
			.then(function(form) {
				if (form === null) {
					reject('Form Type Does Not Exist');
				} else {
					resolve(form.FormLayout);
				}
			});
	});
};

FormModel.UpdateFormLayout = function(_id, _formData) {

	return new Promise(function(resolve, reject) {

		// Validate ID
		// It's an error string if it's not valid
		// Otherwise, it's a valid number
		var id = vaildateParam.ValidateFormType(_id);
		if (typeof id === 'string') {
			reject(id);
		}

		// Validate Form Data
		// It's an error string if it's not valid
		// Otherwise, it's a valid object
		var formData = validateForm(id, _formData);
		if (typeof formData === 'string') {
			reject(formData);
		}

		// Update the Form Layout
		FormsMapper.UpdateOldForm(id, formData)
			.then(function(form) {
				if (!form) {
					reject('Form Type Does Not Exist');
				} else {
					resolve(form.FormLayout);
				}
			})
			.catch(function(err) {
				reject(err);
			});
	});
};

module.exports = FormModel;
