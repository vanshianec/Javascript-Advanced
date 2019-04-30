let expect = require("chai").expect;
let FilmStudio = require("../film-studio").FilmStudio;

describe("Film Studio", function () {

    describe("Check if functions exist", function () {
        it("Casting exists", function () {
            expect(FilmStudio.prototype.hasOwnProperty('casting')).to.equal(true);
        });
        it("MakeMovie exists", function () {
            expect(FilmStudio.prototype.hasOwnProperty('makeMovie')).to.equal(true);
        });
        it("LookForProducer exists", function () {
            expect(FilmStudio.prototype.hasOwnProperty('lookForProducer')).to.equal(true);
        });
        it("Constructor exists", function () {
            expect(FilmStudio.prototype.hasOwnProperty('constructor')).to.equal(true);
        });
    });
    describe("Test initialization", function () {
        it("Check if films property exists", function () {
            let studio = new FilmStudio('Pesho');
            expect(studio.hasOwnProperty('films')).to.equal(true);
            expect(() => studio.films.to.equal([]));
        });
        it("Check if name property exists", function () {
            let studio = new FilmStudio('Pesho');
            expect(studio.hasOwnProperty('name')).to.equal(true);
            expect(studio.name).to.equal('Pesho');
        });
    });
    let studio;
    beforeEach(function () {
        studio = new FilmStudio();
    });

    describe("Test initialization", function () {
        it("Check if films property exists", function () {
            expect(studio.hasOwnProperty('films')).to.equal(true);
        });
        it("Check if name property exists", function () {
            expect(studio.hasOwnProperty('name')).to.equal(true);
        });
    });
    describe("Test makeMovie function", function () {
        it("Should throw an error message when trying to make a movie with no arguments", function () {
            expect(() => studio.makeMovie()).to.throw('Invalid arguments count');
        });
        it("Should throw an error message when trying to make a movie with one argument", function () {
            expect(() => studio.makeMovie('Captain America: Civil War')).to.throw('Invalid arguments count');
        });
        it("Should throw an error message when trying to make a movie with more than two arguments", function () {
            expect(() => studio.makeMovie('Avengers: Endgame', 'Test', 'Third Argument')).to.throw('Invalid arguments count');
        });
        it("Should throw an error when the first argument is not a string", function () {
            expect(() => studio.makeMovie(1, [])).to.throw('Invalid arguments');
        });
        it("Should throw an error when the second argument is not an array", function () {
            expect(() => studio.makeMovie('Avengers: Infinity War', 'Not an array')).to.throw('Invalid arguments');
        });
        it("Should throw an error when both arguments are not valid", function () {
            expect(() => studio.makeMovie(new Map(), {})).to.throw('Invalid arguments');
        });
        it("Test valid movie initialization", function () {
            let result = studio.makeMovie('Iron Man', ['Iron Man']);
            expect(typeof result).to.equal('object');
            expect(result.filmName).to.equal('Iron Man');
            result = studio.makeMovie('Iron Man', ['Iron Man']);
            expect(result.filmName).to.equal('Iron Man 2');
            expect(typeof result.filmRoles).to.equal('object');
        });

    });
    describe("Test casting function", function () {
        it("Should return no films when no movies are added to the studio", function () {
            let result = studio.casting('Robert Downey Jr', 'Iron Man');
            expect(result).to.equal('There are no films yet in undefined.');
        });
        it("Should return no films when no movies are added to the studio", function () {
            let marvelStudio = new FilmStudio('MCU');
            let result = marvelStudio.casting('Robert Downey Jr', 'Iron Man');
            expect(result).to.equal('There are no films yet in MCU.');
        });
        it("Actor should get the role when it is not taken", function () {
            studio.makeMovie('Avengers: Endgame', ['Captain America', 'Iron Man', 'Thor', 'Black Widow']);
            let result = studio.casting('Robert Downey Jr', 'Iron Man');
            expect(result).to.equal('You got the job! Mr. Robert Downey Jr you are next Iron Man in the Avengers: Endgame. Congratz!');
        });
        it("Should change the actor when casting two actors for the same role", function () {
            studio.makeMovie('Avengers: Endgame', ['Captain America', 'Iron Man', 'Thor', 'Black Widow']);
            studio.casting('Robert Downey Jr', 'Iron Man');
            let result = studio.casting('Chris Evans', 'Iron Man');
            expect(result).to.equal('You got the job! Mr. Chris Evans you are next Iron Man in the Avengers: Endgame. Congratz!');
        });
        it("Should not find a role for the actor when the role is not added in the movie making", function () {
            studio.makeMovie('Avengers: Endgame', ['Captain America', 'Iron Man', 'Thor', 'Black Widow']);
            let result = studio.casting('Robert Downey Jr', 'Hulk');
            expect(result).to.equal('Robert Downey Jr, we cannot find a Hulk role...');
        });
    });
    describe("Test lookForProducer function", function () {
        it("Should throw an error when the movie is missing", function () {
            expect(() => studio.lookForProducer('Avengers: Endgame')).to.throw(Error);
        });
        it("Should return the desired string result when the movie exists", function () {
            studio.makeMovie('Avengers: Endgame', ['Captain America', 'Iron Man', 'Thor', 'Black Widow']);
            expect(studio.lookForProducer('Avengers: Endgame'))
                .to.equal('Film name: Avengers: Endgame\n' +
                'Cast:\nfalse as Captain America\nfalse as Iron Man\nfalse as Thor\nfalse as Black Widow\n');
        });
        it("Should return the result for the second movie when creating two movies with the same names", function () {
            studio.makeMovie('Avengers: Endgame', ['Captain America', 'Iron Man', 'Thor', 'Black Widow']);
            studio.makeMovie('Avengers: Endgame', ['Captain America', 'Iron Man', 'Thor', 'Black Widow']);
            expect(studio.lookForProducer('Avengers: Endgame 2'))
                .to.equal('Film name: Avengers: Endgame 2\n' +
                'Cast:\nfalse as Captain America\nfalse as Iron Man\nfalse as Thor\nfalse as Black Widow\n');
        });
    });
    describe("Test multiple functions at once", function () {
        it("Multiple functions at once", function () {
            expect(() => marvelStudio.lookForProducer('Avengers: Endgame')).to.throw(Error);
            expect(() => marvelStudio.lookForProducer('Avengers: Endgame', 'Pesho')).to.throw(Error);
            expect(() => marvelStudio.casting('Chris Evans')).to.throw(Error);
            let marvelStudio = new FilmStudio('MCU');
            marvelStudio.makeMovie('Avengers: Infinity War',
                ['Captain America', 'Iron Man']);
            marvelStudio.makeMovie('Iron Man', ['Iron Man']);
            let ironManRole = marvelStudio.casting('Robert Downey Jr', 'Iron Man');
            let captainAmericaRole = marvelStudio.casting('Chris Evans', 'Captain America');
            let ironManSecondRole = marvelStudio.casting('Robert Downey Jr', 'Iron Man');
            expect(ironManRole).to.equal('You got the job! Mr. Robert Downey Jr you are next Iron Man in the Avengers: Infinity War. Congratz!');
            expect(captainAmericaRole).to.equal('You got the job! Mr. Chris Evans you are next Captain America in the Avengers: Infinity War. Congratz!');
            expect(ironManSecondRole).to.equal('You got the job! Mr. Robert Downey Jr you are next Iron Man in the Avengers: Infinity War. Congratz!');
            expect(marvelStudio.lookForProducer('Iron Man')).to.equal('Film name: Iron Man\nCast:\nfalse as Iron Man\n');
            expect(marvelStudio.lookForProducer('Avengers: Infinity War'))
                .to.equal('Film name: Avengers: Infinity War\nCast:\nChris Evans as Captain America\nRobert Downey Jr as Iron Man\n');
            expect(() => marvelStudio.lookForProducer()).to.throw(Error);
        });
    });
    describe("Test multiple functions at once", function () {
        it("Edge cases", function () {
            studio.makeMovie('', []);
            let casting = studio.casting('', '');
            let producer = studio.lookForProducer('');
            expect(casting).to.equal(', we cannot find a  role...');
            expect(producer).to.equal('Film name: \nCast:\n');
            expect(() => studio.lookForProducer('f')).to.throw('f do not exist yet, but we need the money...');
        });
    });

});