/*
	Validator for Driving License.

	Ideal Sample Dataset :

	{
		'License No': 'DL-1234567890123',
		'Name': 'Foo Bar',
		'S/W/D': 'Foozie Bar',
		'DOB': '25/12/1994',
		'BG': 'U',
		'Address': 'Long Address String with PIN',
		'Authorisation to Drive': [{
			'Type': 'LMV-NT',
			'Date Of Issue': '23/10/2000'
		}],
		'Issue Date': '23/10/2000',
		'Validity': '23/10/2030'
	}
*/

function TestDate(val) {
	let reg = /^\d{2}\/\d{2}\/\d{4}/;
	return reg.test(val);
}

function TestName(val) {
	let reg = /^[aA-zZ\s]+[aA-zZ]$/;
	return reg.test(val) && (val.length <= 50);
}

function TestBG(val) {
	let reg = /^[aA-zZ]{1,}\+*$/;
	return reg.test(val) && (val.length <= 3);
}

function TestAddress(val) {
	let reg = /^[aA-zZ\s\/\d\-\,]+$/;
	return reg.test(val);
}

function TestType(val) {
	let reg = /^[A-Z\-\.]+$/;
	return reg.test(val) && (val.length <= 8);
}

function TestLicNo(val) {
	let reg = /^[A-Z\d\-]+$/;
	return reg.test(val) && (val.length === 16);
}

module.exports = function(formData) {

	if (!TestLicNo(formData['License No'])) {
		console.log(formData['License No']);
		return 'Invalid License Number';
	}

	if (!TestName(formData.Name)) {
		return 'Invalid Name';
	}

	if (!TestName(formData['S/W/D'])) {
		return 'Invalid Relation Name';
	}

	if (!TestDate(formData.DOB)) {
		return 'Invalid Date Of Birth';
	}

	if (!TestBG(formData.BG)) {
		return 'Invalid Blood Group';
	}

	if (!TestAddress(formData.Address)) {
		return 'Invalid Address';
	}

	if (!TestDate(formData['Issue Date'])) {
		return 'Invalid Issue Date';
	}

	if (!TestDate(formData.Validity)) {
		return 'Invalid Validity Date';
	}

	for (var i = 0; i < formData['Authorisation to Drive'].length; i++) {
		var ele = formData['Authorisation to Drive'][i];
		if (!TestType(ele.Type)) {
			return 'Invalid Vehicle Type Authorised';
		}

		if (!TestDate(ele['Date Of Issue'])) {
			return 'Invalid Authorisation Issue Date';
		}
	}

	return formData;
};
