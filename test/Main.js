/*
	Testing Suite
*/

/*
	Form Tests
*/

describe('Forms API', function() {

	describe('while getting forms', function() {

		it('should provide a form with Auth', function() {
			// GET /:Type
			// Auth : User | Admin
		});

		it('should not provide a form without valid Auth', function() {
			// GET /:Type
			// Auth : Invalid
		});

		it('should not provide a form without Auth', function() {
			// GET /:Type
			// Auth : None
		});

	});

	describe('while submitting forms', function() {

		it('should accept submission response with Auth', function() {
			// POST /:Type
			// Auth : User | Admin
		});

		it('should not accept submission response without valid Auth', function() {
			// POST /:Type
			// Auth : Invalid
		});

		it('should not accept submission response without Auth', function() {
			// POST /:Type
			// Auth : None
		});

	});
	
	describe('while updating forms', function() {

		it('should update an exiting form with Admin Auth', function() {
			// PUT /:Type
			// Auth : Admin
		});

		it('should not update an exiting form with User Auth', function() {
			// PUT /:Type
			// Auth : User
		});

		it('should not update an exiting form without valid Admin Auth', function() {
			// PUT /:Type
			// Auth : Invalid
		});

		it('should not update an exiting form without Auth', function() {
			// PUT /:Type
			// Auth : None
		});

	});
	
	describe('while creating forms', function() {

		it('should create a new form with Admin Auth', function() {
			// POST /New
			// Auth : Admin
		});

		it('should not create a new form with User Auth', function() {
			// POST /New
			// Auth : User
		});

		it('should not create a new form without valid Admin Auth', function() {
			// POST /New
			// Auth : Invalid
		});

		it('should not create a new form without Auth', function() {
			// POST /New
			// Auth : None
		});

	});

});
