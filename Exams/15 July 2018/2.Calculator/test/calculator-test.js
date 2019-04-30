let expect = require("chai").expect;
let Calculator = require("../calculator").Calculator;

describe("Calculator", function () {
    describe("Check class functions", function () {
        it("Should return true when checking if functions exist", function () {
            expect(Calculator.prototype.hasOwnProperty('constructor')).to.equal(true);
            expect(Calculator.prototype.hasOwnProperty('add')).to.equal(true);
            expect(Calculator.prototype.hasOwnProperty('divideNums')).to.equal(true);
            expect(Calculator.prototype.hasOwnProperty('toString')).to.equal(true);
            expect(Calculator.prototype.hasOwnProperty('orderBy')).to.equal(true);
        });
    });
    let calc;
    beforeEach(function () {
        calc = new Calculator();
    });
    describe("Test add function", function () {
        it("Check if the array property exists before adding elements to it", function () {
            expect(calc.hasOwnProperty('expenses')).to.equal(true);
        });
        it("Should return empty array when calling toString without adding elements", function () {
            expect(calc.toString()).to.equal('empty array');
        });
        it("Should return 6 when adding one element", function () {
            calc.add(6);
            expect(calc.toString()).to.equal('6');
        });
        it("Should return 6 -> 12 -> 1 when adding three numbers", function () {
            calc.add(6);
            calc.add(12);
            calc.add(1);
            expect(calc.toString()).to.equal('6 -> 12 -> 1');
        });
        it("Should return 6.8 -> 12.1 -> 1.5 when adding three floating point numbers", function () {
            calc.add(6.8);
            calc.add(12.1);
            calc.add(1.5);
            expect(calc.toString()).to.equal('6.8 -> 12.1 -> 1.5');
        });
        it("Should return non number elements when adding non number elements", function () {
            calc.add(new Map());
            calc.add({name: 'Pesho'});
            calc.add(Math.PI);
            expect(calc.toString()).to.equal('[object Map] -> [object Object] -> 3.141592653589793');
        });
    });
    describe("Test divide function", function () {
        it("Should throw an error when dividing with no elements in the array", function () {
            expect(() => calc.divideNums()).to.throw(Error);
        });
        it("Should throw an error when dividing with non number elements", function () {
            calc.add('Pesho');
            calc.add(new Map());
            expect(() => calc.divideNums()).to.throw(Error);
        });
        it("Should throw an error when dividing with non number elements", function () {
            calc.add('Pesho');
            calc.add(new Map());
            expect(() => calc.divideNums()).to.throw(Error);
        });
        it("Should throw an error when dividing with zero", function () {
            calc.add(7);
            calc.add(34);
            calc.add(0);
            expect(calc.divideNums()).to.equal('Cannot divide by zero')
        });
        it("Should throw an error when dividing with zero", function () {
            calc.add(7);
            calc.add(0);
            calc.add(34);
            expect(calc.divideNums()).to.equal('Cannot divide by zero')
        });
        it("Should return zero when the first elements is zero", function () {
            calc.add(0);
            calc.add(7);
            calc.add(34);
            expect(calc.divideNums()).to.equal(0)
        });
        it("Should return 2 when dividing 64 by 8 by 4", function () {
            calc.add(64);
            calc.add(8);
            calc.add(4);
            expect(calc.divideNums()).to.equal(2)
        });
        it("Test if the dividing result is floating point number", function () {
            calc.add(44);
            calc.add(8);
            calc.add(4);
            expect(calc.divideNums()).to.equal(1.375)
        });
        it("Test when all numbers are floating point numbers", function () {
            calc.add(44.5);
            calc.add(8.1);
            calc.add(4.8);
            expect(calc.divideNums()).to.equal(1.1445473251028808)
        });
    });
    describe("Test order by function", function () {
        it("Should return empty when trying to sort elements on empty array", function () {
            expect(() => calc.orderBy().to.equal('empty'));
        });
        it("Test sorting numbers", function () {
            calc.add(5);
            calc.add(21);
            calc.add(11);
            expect(calc.orderBy()).to.equal('5, 11, 21');
        });
        it("Test sorting floating point numbers", function () {
            calc.add(5.8);
            calc.add(21.2);
            calc.add(11.4);
            expect(calc.orderBy()).to.equal('5.8, 11.4, 21.2');
        });
        it("Test sorting floating point and negative numbers", function () {
            calc.add(-64);
            calc.add(-6);
            calc.add(11.4);
            expect(calc.orderBy()).to.equal('-64, -6, 11.4');
        });
        it("Test sorting non number elements", function () {
            calc.add(new Map());
            calc.add('Pesho');
            calc.add(11.4);
            expect(calc.orderBy()).to.equal('11.4, Pesho, [object Map]');
        });
        it("Test sorting same elements", function () {
            calc.add(0);
            calc.add(0);
            calc.add(0);
            expect(calc.orderBy()).to.equal('0, 0, 0');
        });
    });
});