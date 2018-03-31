/*
	Testing Suite
*/

/*
	Form Tests
*/

describe('Forms API', function() {

	describe('while getting forms', function() {

		it('should provide a form with Auth', function() {
			// GET
			// Auth : User | Admin
		});

		it('should not provide a form without valid Auth', function() {
			// GET
			// Auth : Invalid
		});

		it('should not provide a form without Auth', function() {
			// GET
			// Auth : None
		});

	});

	describe('while submitting forms', function() {

		it('should accept submission response with Auth', function() {
			// POST
			// Auth : User | Admin
		});

		it('should not accept submission response without valid Auth', function() {
			// POST
			// Auth : Invalid
		});

		it('should not accept submission response without Auth', function() {
			// POST
			// Auth : None
		});

	});
	
	describe('while creating forms', function() {

		it('should create a new form with Admin Auth', function() {
			// POST
			// Auth : Admin
		});

		it('should not create a new form with User Auth', function() {
			// POST
			// Auth : User
		});

		it('should not create a new form without valid Admin Auth', function() {
			// POST
			// Auth : Invalid
		});

		it('should not create a new form without Auth', function() {
			// POST
			// Auth : None
		});

	});
	
	describe('while updating forms', function() {

		it('should update an exiting form with Admin Auth', function() {
			// PUT
			// Auth : Admin
		});

		it('should not update an exiting form with User Auth', function() {
			// PUT
			// Auth : User
		});

		it('should not update an exiting form without valid Admin Auth', function() {
			// PUT
			// Auth : Invalid
		});

		it('should not update an exiting form without Auth', function() {
			// PUT
			// Auth : None
		});

	});

});
