let expect = require("chai").expect;
let createCalculator = require("../test").createCalculator;


describe("Add/Subtract", function () {
    it("Should return 0 when no operations are used", function () {
        let calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
    });
    it("Should return 42 when adding 21 two times", function () {
        let calculator = createCalculator();
        calculator.add(21);
        calculator.add(21);
        expect(calculator.get()).to.equal(42);
    });
    it("Should return -21 when subtracting 21 from 0", function () {
        let calculator = createCalculator();
        calculator.subtract(21);
        expect(calculator.get()).to.equal(-21);
    });
    it("Should return 31 when subtracting 21 from 52", function () {
        let calculator = createCalculator();
        calculator.add(52);
        calculator.subtract(21);
        expect(calculator.get()).to.equal(31);
    });
    it("Should be able to parse 42 when a string is passed as parameter", function () {
        let calculator = createCalculator();
        calculator.add('42');
        expect(calculator.get()).to.equal(42);
    });
});