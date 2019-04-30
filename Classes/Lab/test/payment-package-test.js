let expect = require("chai").expect;
let PaymentPackage = require("../test").PaymentPackage;

describe("StringBuilder", function () {
    describe("Check if functions exist", function () {
        it("Append exists", function () {
            expect(PaymentPackage.prototype.hasOwnProperty('name')).to.equal(true);
        });
        it("Prepend exists", function () {
            expect(PaymentPackage.prototype.hasOwnProperty('value')).to.equal(true);
        });
        it("InsertAt exists", function () {
            expect(PaymentPackage.prototype.hasOwnProperty('VAT')).to.equal(true);
        });
        it("Remove exists", function () {
            expect(PaymentPackage.prototype.hasOwnProperty('active')).to.equal(true);
        });
        it("ToString exists", function () {
            expect(PaymentPackage.prototype.hasOwnProperty('toString')).to.equal(true);
        });
    });
    describe("Initialization", function () {
        it("Should be able to init with two parameters", function () {
            let package = new PaymentPackage('Transfer Fee', 1000);
            expect(package.toString()).to.equal('Package: Transfer Fee\n- Value (excl. VAT): 1000\n- Value (VAT 20%): 1200');
        });
        it("Should throw an error when the value is not a number", function () {
            expect(() => new PaymentPackage('Transfer Fee', 'value should not be string')).to.throw(Error);
        });
        it("Should throw an error when the name is not a string", function () {
            expect(() => new PaymentPackage(2, 2000)).to.throw(Error);
        });
        it("Should throw an error when both params are invalid", function () {
            expect(() => new PaymentPackage(Math.PI, new Map())).to.throw(Error);
        });
    });
    let package;
    beforeEach(function () {
        package = new PaymentPackage('Partnership Fee', 7000);
    });
    describe("Test class getters", function () {
        it("Should return Partnership Fee when requiring the package name", function () {
            expect(package.name).to.equal('Partnership Fee');
        });
        it("Should return 7000 when requiring the package value", function () {
            expect(package.value).to.equal(7000);
        });
        it("Should 20 when requiring the package default VAT", function () {
            expect(package.VAT).to.equal(20);
        });
        it("Should return true when requiring the package default active", function () {
            expect(package.active).to.equal(true);
        });
    });
    describe("Test class setters", function () {
        it("Should return Consultation when setting the package name to Consultation", function () {
            expect(package.name = 'Consultation').to.equal('Consultation');
        });
        it("Should return 1000 when setting the package value to 1000", function () {
            expect(package.value = 1000).to.equal(1000);
        });
        it("Should 30 when setting the package VAT to 30", function () {
            expect(package.VAT = 30).to.equal(30);
        });
        it("Should return false when setting the package active to false", function () {
            expect(package.active = false).to.equal(false);
        });
    });
    describe("Test invalid setters", function () {
        it("Should throw an Error when setting the package name to empty string", function () {
            expect(() => package.name = '').to.throw(Error);
        });
        it("Should throw an Error when setting the package name to non string value", function () {
            expect(() => package.name = false).to.throw(Error);
        });
        it("Should throw an Error when setting the package value to negative number", function () {
            expect(() => package.value = -5).to.throw(Error);
        });
        it("Should throw an Error when setting the package value to non number value", function () {
            expect(() => package.value = '5').to.throw(Error);
        });
        it("Should throw an Error when setting the package VAT to negative number", function () {
            expect(() => package.VAT = -35).to.throw(Error);
        });
        it("Should throw an Error when setting the package VAT to non number value", function () {
            expect(() => package.VAT = '40').to.throw(Error);
        });
        it("Should throw an Error when setting the package active to non boolean value", function () {
            expect(() => package.active = 'false').to.throw(Error);
        });
    });
    describe("Test multiple function at once", function () {
        it("Test to the class with multiple function invokes at once", function () {
            package.name = 'Consultation';
            package.value = 10000;
            package.VAT = 70;
            package.active = false;
            expect(package.toString()).to.equal('Package: Consultation (inactive)\n- Value (excl. VAT): 10000\n- Value (VAT 70%): 17000');
        });
        it("Should return correct value for ('0', 0) inactive", function () {
            package.name = '0';
            package.value = 0;
            package.VAT = 70;
            package.active = false;
            expect(package.toString()).to.equal('Package: 0 (inactive)\n- Value (excl. VAT): 0\n- Value (VAT 70%): 0');
        });
    });
});