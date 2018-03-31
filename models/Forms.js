/*
	Main Class to manage Forms
*/

let FormsMapper = require('../mappers/Forms.js');

let FormModel = {};

FormModel.GetFormLayout = function(id) {

	return new Promise(function(resolve, reject) {
		if (typeof id === 'string') {
			reject(id);
		} else {
			FormsMapper.GetFormByType(id)
				.then(function(form) {
					if (form === null) {
						reject('Invalid Form Type');
					} else {
						resolve(form.FormLayout);
					}
				});
		}
	});
};

module.exports = FormModel;
