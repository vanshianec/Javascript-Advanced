let expect = require("chai").expect;
let mathEnforcer = require("../test").mathEnforcer;


describe("mathEnforcer", function () {
    describe("addFive", function () {
        it("Should return undefined when the parameter is not a number", function () {
            expect(mathEnforcer.addFive('4')).to.equal(undefined);
        });
        it("Should return 9 when adding 5 to 4", function () {
            expect(mathEnforcer.addFive(4)).to.equal(9);
        });
        it("Should return -5 when adding 5 to -10", function () {
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        });
        it("Should return 6.5 when the adding 5 to 1.5", function () {
            expect(mathEnforcer.addFive(1.5)).to.equal(6.5);
        });
    });
    describe("subtractTen", function () {
        it("Should return undefined when the parameter is not a number", function () {
            expect(mathEnforcer.subtractTen('8')).to.equal(undefined);
        });
        it("Should return -3 when subtracting 10 from 7", function () {
            expect(mathEnforcer.subtractTen(7)).to.equal(-3);
        });
        it("Should return -16 when subtracting 10 from -6", function () {
            expect(mathEnforcer.subtractTen(-6)).to.equal(-16);
        });
        it("Should return -4.5 when subtracting 10 from 5.5", function () {
            expect(mathEnforcer.subtractTen(5.5)).to.equal(-4.5);
        });
    });
    describe("sum", function () {
        it("Should return undefined when both parameters are not numbers", function () {
            expect(mathEnforcer.sum('8', '2')).to.equal(undefined);
        });
        it("Should return undefined when one of parameters is not a numbers", function () {
            expect(mathEnforcer.sum(8, '2')).to.equal(undefined);
        });
        it("Should return undefined when one of parameters is not a numbers", function () {
            expect(mathEnforcer.sum('8', 2)).to.equal(undefined);
        });
        it("Should return 10 when summing 8 and 2", function () {
            expect(mathEnforcer.sum(8, 2)).to.equal(10);
        });
        it("Should return 10 when summing 5.5 and 4.5", function () {
            expect(mathEnforcer.sum(5.5, 4.5)).to.equal(10);
        });
    });
});