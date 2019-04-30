let expect = require("chai").expect;
let lookupChar = require("../test").lookupChar;

describe("lookupChar", function () {
    it("Should return undefined when the first parameter is not a string", function () {
        expect(lookupChar(7, 3)).to.equal(undefined);
    });
    it("Should return undefined when the second parameter is not a number", function () {
        expect(lookupChar('7', '3')).to.equal(undefined);
    });
    it("Should return Incorrect index when the index is not an integer", function () {
        expect(lookupChar('7', 3.12)).to.equal(undefined);
    });
    it("Should return undefined when the number of parameters is less than two", function () {
        expect(lookupChar('fdsfsd')).to.equal(undefined);
    });
    it("Should return undefined when both parameters are invalid", function () {
        expect(lookupChar(6, '3')).to.equal(undefined);
    });
    it("Should return 'Incorrect index' when the index is out of range", function () {
        expect(lookupChar('Captain America', 55)).to.equal('Incorrect index');
    });
    it("Should return 'Incorrect index' when the index is less than zero", function () {
        expect(lookupChar('Captain America', -7)).to.equal('Incorrect index');
    });
    it("Should return the 'i' when the index is 5", function () {
        expect(lookupChar('Captain America', 5)).to.equal('i');
    });
    it("Should return the 'C' when the index is 0", function () {
        expect(lookupChar('Captain America', 0)).to.equal('C');
    });
    it("Should return 'Incorrect index' when the string is empty", function () {
        expect(lookupChar('', 0)).to.equal('Incorrect index');
    });
});