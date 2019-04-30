let expect = require("chai").expect;
let isSymmetric = require("../test").isSymmetric;


describe("isSymmetric", function () {
    it("Should return false when the input is not an array", function () {
        expect(isSymmetric(8)).to.equal(false);
    });
    it("Should return true when the array is empty", function () {
        expect(isSymmetric([])).to.equal(true);
    });
    it("Should return true when the array is symmetric", function () {
        expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.equal(true);
    });
    it("Should return false when the array is not symmetric", function () {
        expect(isSymmetric([1, 2, 3, 4, 8, 3, 2, 1])).to.equal(false);
    });
    it("Should return false when the array is not symmetric", function () {
        expect(isSymmetric([10, 1, 26])).to.equal(false);
    });
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.equal(true);
    });
});