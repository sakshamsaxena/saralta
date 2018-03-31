/*
	Main Class to manage Forms
*/

let FormsMapper = require('../mappers/Forms.js');
let vaildateParam = require('../util/paramValidation/ParameterValidation.js');

let FormModel = {};

FormModel.GetFormLayout = function(_id) {

	return new Promise(function(resolve, reject) {

		// Validate ID
		var id = vaildateParam.ValidateFormType(_id);

		// It's an error string if it's not valid
		// Otherwise, it's a valid number
		if (typeof id === 'string') {
			reject(id);
		} else {
			FormsMapper.GetFormByType(id)
				.then(function(form) {
					if (form === null) {
						reject('Form Type Does Not Exist');
					} else {
						resolve(form.FormLayout);
					}
				});
		}
	});
};

module.exports = FormModel;
