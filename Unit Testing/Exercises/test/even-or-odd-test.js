let expect = require("chai").expect;
let isOddOrEven = require("../test").isOddOrEven;


describe("isOddOrEven", function () {
    it("Should return undefined when the parameter passed is not string", function () {
        expect(isOddOrEven(7)).to.equal(undefined);
    });
    it("Should return even when the string length is even number", function () {
        expect(isOddOrEven('45')).to.equal('even');
    });
    it("Should return odd when the string length is odd number", function () {
        expect(isOddOrEven('456')).to.equal('odd');
    });
});