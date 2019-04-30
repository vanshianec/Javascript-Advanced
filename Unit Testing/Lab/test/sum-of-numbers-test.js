let expect = require("chai").expect;
let sum = require("../test").sum;


describe("Sum of array numbers", function () {
    it("Should return 3 for [1, 2]", function () {
        let expectedSum = 3;
        let actualSum = sum([1, 2]);
        expect(actualSum).to.equal(expectedSum);
    });
    it("Should return 6 for [1, 2 , 3]", function () {
        let expectedSum = 6;
        let actualSum = sum([1, 2, 3]);
        expect(actualSum).to.equal(expectedSum);
    });
    it("Should return 10 for [1, 2, 3, 4]", function () {
        let expectedSum = 10;
        let actualSum = sum([1, 2, 3, 4]);
        expect(actualSum).to.equal(expectedSum);
    })
});