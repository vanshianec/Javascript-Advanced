let expect = require("chai").expect;
let rgbToHexColor = require("../test").rgbToHexColor;


describe("isSymmetric", function () {
    it("Should return undefined when the colors are invalid", function () {
        expect(rgbToHexColor(-5, -10, -20)).to.equal(undefined);
    });
    it("Should return undefined when one ore more colors are invalid", function () {
        expect(rgbToHexColor(-5, 6, -20)).to.equal(undefined);
    });
    it("Should return undefined when one ore more colors are invalid", function () {
        expect(rgbToHexColor(7, 6, -20)).to.equal(undefined);
    });
    it("Should return undefined when one ore more colors are invalid", function () {
        expect(rgbToHexColor(-5, 6, 64)).to.equal(undefined);
    });
    it("Should return undefined when one ore more colors are invalid", function () {
        expect(rgbToHexColor(2, -10, 5)).to.equal(undefined);
    });
    it("Should return undefined when the color numbers are greater than 255", function () {
        expect(rgbToHexColor(552, 444, 444)).to.equal(undefined);
    });
    it("Should return #000000 (black) when the colors are not set", function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
    it("Should return #FFFFFF (white) when the color values are 255", function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it("Should return #0F1923 (gray) when the color values are 15,25,35", function () {
        expect(rgbToHexColor(15, 25, 35)).to.equal('#0F1923');
    });
});