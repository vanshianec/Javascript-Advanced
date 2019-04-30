class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.shelfGenre = shelfGenre;
        this.room = room;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];
    }

    get room() {
        return this._room;
    }

    set room(room) {
        switch (room) {
            case 'livingRoom':
            case 'bedRoom':
            case 'closet':
                this._room = room;
                break;
            default:
                throw `Cannot have book shelf in ${room}`;
        }
    }

    addBook(bookName, bookAuthor, genre) {
        let book = {bookName, bookAuthor, genre};
        if (this.shelfCapacity === this.shelf.length) {
            this.shelf.shift();
        }
        this.shelf.push(book);
        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));
        return this;
    }

    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter(book => book.bookName !== bookName);
        return this;
    }

    showBooks(genre) {
        let result = `Results for search "${genre}":\n`;
        let matchedBooks = this.shelf.filter(book => book.genre === genre);
        matchedBooks.forEach(book => result += `\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"\n`);
        return result;
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    toString() {
        if (this.shelf.length === 0) {
            return "It's an empty shelf";
        }
        let result = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
        this.shelf.forEach(book => result += `\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}\n`);
        return result;
    }
}

let livingRoom = new BookCollection("Programming", "livingRoom", 5);
livingRoom.addBook("Introduction to Programming with C#", "Svetlin Nakov");
livingRoom.addBook("Introduction to Programming with Java", "Avetlin Nakov");
livingRoom.addBook("Programming for .NET Framework", "Zvetlin Nakov");
console.log(livingRoom.toString());

//"Programming" shelf in livingRoom contains:
// 📖 "Introduction to Programming with Java" - Avetlin Nakov
// 📖 "Introduction to Programming with C#" - Svetlin Nakov
// 📖 "Programming for .NET Framework" - Zvetlin Nakov


//let garden = new BookCollection("Programming", "garden"); (THROWS ERROR)


let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));

//Shelf's capacity: 1
// Results for search "history":
// 📖 Cuentos para pensar - "The Guns of August"
// 📖 David McCullough - "John Adams"

