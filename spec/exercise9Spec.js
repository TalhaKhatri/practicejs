import { isValidNumber } from 'libphonenumber-js';

describe("telephoneCheck", function() {
	
	it("valid number with '-' seperator", function() {
		expect(telephoneCheck("555-555-5555")).toBe(true);
	});
	
	it("valid number with '-' seperated and country code", function() {
		expect(telephoneCheck("1 555-555-5555")).toBe(true);
	});
	
	it("valid number with '-' seperator, enclosed first 3 digit chunk and country code", function() {
		expect(telephoneCheck("1 (555) 555-5555")).toBe(true);
	});
	
	it("valid number with no seperators and no country code", function() {
		expect(telephoneCheck("5555555555")).toBe(true);
	});
	
	it("valid number with enclosed first 3 digit chunk and '-' seperator", function() {
		expect(telephoneCheck("(555)555-5555")).toBe(true);
	});
	
	it("valid number with enclosed first 3 digit chunk, '-' seperator and country code", function() {
		expect(telephoneCheck("1(555)555-5555")).toBe(true);
	});
	
	it("valid number with country code and random digits with ' ' seperator", function() {
		expect(telephoneCheck("1 456 789 4444")).toBe(true);
	});
	
	it("invalid number with alpha numeric characters", function() {
		expect(telephoneCheck("123**&!!asdf#")).toBe(false);
	});
	
	it("invalid number having less than 10 digits", function() {
		expect(telephoneCheck("55555555")).toBe(false);
	});
	
	it("invalid number with no seperators and having wrong country code", function() {
		expect(telephoneCheck("27576227382")).toBe(false);
	});
	
	it("invalid number having wrong number of eclosed digits", function() {
		expect(telephoneCheck("(6505552368)")).toBe(false);
	});
	
	it("invalid number with country code greater than 1, eclosed first 3 digit chunk and '-' seperator", function() {
		expect(telephoneCheck("2 (757) 622-7382")).toBe(false);
	});
	
	it("invalid number with country code less than 1, eclosed first 3 digit chunk and '-' seperator", function() {
		expect(telephoneCheck("0 (757) 622-7382")).toBe(false);
	});
	
	it("invalid number with country code less than 1, eclosed first 3 digit chunk and '-' seperator", function() {
		expect(telephoneCheck("-1 (757) 622-7382")).toBe(false);
	});
	
	it("invalid number with wrongly encapsulating the first 3 digit chunk which includes the country code", function() {
		expect(telephoneCheck("(175)76227382")).toBe(false);
	});
	
	it("invalid number with wrong country code and enclosed first 3 digit chunk", function() {
		expect(telephoneCheck("2(757)6227382")).toBe(false);
	});
	
	it("invalid number with wrong country code, enclosed first 3 digit chunk and '-' seperator", function() {
		expect(telephoneCheck("2(757)622-7382")).toBe(false);
	});
	
	it("invalid number with space between last 4 digit chunk", function() {
		expect(telephoneCheck("1(757) 622-73 82")).toBe(false);
	});
	
});
