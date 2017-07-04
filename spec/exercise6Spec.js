describe("checkDate", function() {

	it("with an empty string", function() {
		expect(checkDate("")).toBe("Invalid Date!");
	});

	it("with garbage string", function() {
		expect(checkDate("123456asd")).toBe("Invalid Date!");
	});

	it("with single digit day", function() {
		expect(checkDate("3/02/2015")).toBe("Invalid Date!");
	});

	it("with single digit month", function() {
		expect(checkDate("03/2/2015")).toBe("Invalid Date!");
	});

	it("with invalid day", function() {
		expect(checkDate("32/02/2015")).toBe("Invalid Date!");
	});

	it("with invalid month", function() {
		expect(checkDate("03/13/2015")).toBe("Invalid Date!");
	});

	it("with invalid year", function() {
		expect(checkDate("03/12/22222")).toBe("Invalid Date!");
	});

	it("with invalid seperators", function() {
		expect(checkDate("03-12-2015")).toBe("Invalid Date!");
	});

	it("with special characters", function() {
		expect(checkDate("12.5/12/2015")).toBe("Invalid Date!");
	});

	it("with valid date format", function() {
		expect(checkDate("21/03/2016")).toBe("Valid Date!");
	});

	it("with valid date format", function() {
		expect(checkDate("14/02/1999")).toBe("Valid Date!");
	});

});
