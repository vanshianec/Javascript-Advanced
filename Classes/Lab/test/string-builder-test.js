let expect = require("chai").expect;
let StringBuilder = require("../test").StringBuilder;

describe("StringBuilder", function () {
    let builder;
    beforeEach(function () {
        builder = new StringBuilder();
    });
    describe("Check if functions exist", function () {
        it("Append exists", function () {
            expect(StringBuilder.prototype.hasOwnProperty('append')).to.equal(true);
        });
        it("Prepend exists", function () {
            expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.equal(true);
        });
        it("InsertAt exists", function () {
            expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.equal(true);
        });
        it("Remove exists", function () {
            expect(StringBuilder.prototype.hasOwnProperty('remove')).to.equal(true);
        });
        it("ToString exists", function () {
            expect(StringBuilder.prototype.hasOwnProperty('toString')).to.equal(true);
        });
    });
    describe("Initialization", function () {
        it("Init without params", function () {
            expect(builder._stringArray.join('')).to.equal('');
        });
        it("Init with passed string", function () {
            builder = new StringBuilder('Captain America');
            expect(builder._stringArray.join('')).to.equal('Captain America');
        });
        it("Init with passed string", function () {
            builder = new StringBuilder('Captain America');
            expect(() => new StringBuilder(5)).to.throw(TypeError);
        });
    });
    describe("Append", function () {
        it("Append one string", function () {
            builder.append(" Tony Stark");
            expect(builder.toString()).to.equal(" Tony Stark")
        });
        it("Append multiple strings", function () {
            builder.append("Captain America");
            builder.append("Tony Stark");
            expect(builder.toString()).to.equal("Captain AmericaTony Stark")
        });
        it("Append non strings (should throw an error)", function () {
            expect(() => builder.append(5)).to.throw(TypeError)
        });
    });
    describe("Prepend", function () {
        it("Prepend one string", function () {
            builder.prepend(" Tony Stark");
            expect(builder.toString()).to.equal(" Tony Stark")
        });
        it("Prepend multiple strings", function () {
            builder.prepend("Captain America");
            builder.prepend("Tony Stark");
            expect(builder.toString()).to.equal("Tony StarkCaptain America")
        });
        it("Prepend non strings (should throw an error)", function () {
            expect(() => builder.append(5)).to.throw(TypeError)
        });
    });
    describe("Insert", function () {
        it("Insert at beginning", function () {
            builder.append("Captain America");
            builder.insertAt(" Tony Stark", 0);
            expect(builder.toString()).to.equal(" Tony StarkCaptain America")
        });
        it("Insert at end", function () {
            builder.append("Captain America");
            builder.insertAt(" Tony Stark", 15);
            expect(builder.toString()).to.equal("Captain America Tony Stark")
        });
        it("Insert at middle", function () {
            builder.append("Captain America");
            builder.insertAt(" Tony Stark", 7);
            expect(builder.toString()).to.equal("Captain Tony Stark America")
        });
        it('Check insert method functionality', function () {
            let str = 'Captain America';
            builder.insertAt(str, 3);
            let expected = Array.from('');
            expected.splice(3, 0, ...str);
            expect(expected).to.deep.equal(builder._stringArray);
        });
    });
    describe("Remove", function () {
        it("Remove from zero to more than string length", function () {
            builder.append("Captain America");
            builder.remove(0, 24);
            expect(builder.toString()).to.equal("")
        });
        it("Remove from zero to string length", function () {
            builder.append("Captain America");
            builder.remove(0, 15);
            expect(builder.toString()).to.equal("")
        });
        it("Remove from middle to string length", function () {
            builder.append("Captain America");
            builder.remove(7, 15);
            expect(builder.toString()).to.equal("Captain")
        });
        it("Should return the string when the start index is equal to the string length", function () {
            builder.append("Captain America");
            builder.remove(15, 15);
            expect(builder.toString()).to.equal("Captain America")
        });
        it("Remove from the string length - 1", function () {
            builder.append("Captain America");
            builder.remove(14, 1);
            expect(builder.toString()).to.equal("Captain Americ")
        });
    });
    describe("Multiple functions at once", function () {
        it("Test builder behaviour when invoking multiple functions at once", function () {
            builder.append("Captain America");
            builder.append("Tony Stark");
            builder.prepend("Captain America");
            builder.prepend("Tony Stark");
            builder.remove(0, 20);
            builder.insertAt('Test', 11);
            expect(builder.toString()).to.equal('ericaCaptaiTestn AmericaTony Stark');
        });
    });
    describe("toString", function () {
        it("Test toString method", function () {
            expect(builder._stringArray.join('')).to.equal(builder.toString())
        });
    });
});