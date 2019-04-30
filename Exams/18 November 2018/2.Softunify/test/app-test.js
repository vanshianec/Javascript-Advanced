let expect = require("chai").expect;
let SoftUniFy = require("../app").SoftUniFy;

describe("StringBuilder", function () {
    describe("Check if functions exist", function () {
        it("downloadSong exists", function () {
            expect(SoftUniFy.prototype.hasOwnProperty('downloadSong')).to.equal(true);
        });
        it("playSong exists", function () {
            expect(SoftUniFy.prototype.hasOwnProperty('playSong')).to.equal(true);
        });
        it("songsList exists", function () {
            expect(SoftUniFy.prototype.hasOwnProperty('songsList')).to.equal(true);
        });
        it("rateArtist exists", function () {
            expect(SoftUniFy.prototype.hasOwnProperty('rateArtist')).to.equal(true);
        });
    });

    let app;
    beforeEach(function () {
        app = new SoftUniFy();
    });

    describe("Check if property exists", function () {
        it("allSongs exists", function () {
            expect(app.hasOwnProperty('allSongs')).to.equal(true);
        });
    });
    describe("Test downloadSong function", function () {
        it("downloadSong function should return object when invoked", function () {
            let res = app.downloadSong('Pesho', 'Peshkata', 'Iskam da si hodq');
            expect(typeof res).to.equal('object');
        });
        it("downloadSong function should return object when invoked", function () {
            app.downloadSong('Pesho', 'Peshkata', 'Iskam da si hodq');
            app.downloadSong('Pesho', 'Mishkata', 'Iskam da ne si hodq');
            let result = app.allSongs['Pesho']['songs'];
            let expected = ['Peshkata - Iskam da si hodq', 'Mishkata - Iskam da ne si hodq'];
            expect(result).to.eql(expected);
        });
    });
    describe("Test playSong function", function () {
        it("Should return a message when the song is missing", function () {
            expect(app.playSong('missing')).to.equal("You have not downloaded a missing song yet. Use SoftUniFy's function downloadSong() to change that!");
        });
        it("Should return the artist and lyrics when the song exists", function () {
            app.downloadSong('Pesho', 'hello', 'hello man');
            expect(app.playSong('hello')).to.equal('Pesho:\nhello - hello man\n');
        });
        it("Should return all artists that have a song with the same name", function () {
            app.downloadSong('Pesho', 'hello', 'hello man');
            app.downloadSong('Misho', 'hello', 'hello woman');
            expect(app.playSong('hello')).to.equal('Pesho:\nhello - hello man\nMisho:\nhello - hello woman\n');
        });
    });
    describe("Test songsList getter", function () {
        it("Should return a message when the allSongs property is empty", function () {
            expect(app.songsList).to.equal('Your song list is empty');
        });
        it("Should return a result when the allSongs property is not empty", function () {
            app.downloadSong('Pesho', 'hello', 'hello man');
            app.downloadSong('Misho', 'hello', 'hello woman');
            expect(app.songsList).to.equal('hello - hello man\nhello - hello woman');
        });
    });
    describe("Test rateArtist function", function () {
        it("Should return a message when the allSongs property is empty", function () {
            expect(app.rateArtist()).to.equal('The undefined is not on your artist list.');
        });
        it("Should return 0 when the rating argument is missing", function () {
            app.downloadSong('Pesho', 'hello', 'hello man');
            expect(app.rateArtist('Pesho')).to.equal(0);
        });
        it("Should return 35 when the rating argument is passed", function () {
            app.downloadSong('Misho', 'hello', 'hello woman');
            expect(app.rateArtist('Misho', 35)).to.equal(35);
        });
    });
});