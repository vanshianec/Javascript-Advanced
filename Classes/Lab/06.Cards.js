let result = (function () {
    let Suits = {
        SPADES: '\u2660',
        HEARTS: '\u2665',
        DIAMONDS: '\u2666',
        CLUBS: '\u2663',
    };

    let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(face) {
            if (!faces.includes(face)) {
                throw new Error("Invalid card face: " + face);
            }
            this._face = face;
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {
            if (!Object.values(Suits).includes(suit)) {
                throw new Error("Invalid card suit: " + suit);
            }
            this._suit = suit;
        }
    }

    return {
        Suits: Suits,
        Card: Card
    }
}());

let Suits = result.Suits;
let Card = result.Card;

let firstCard = new Card("Q", Suits.CLUBS); //valid
firstCard.face = "A";
firstCard.suit = Suits.DIAMONDS;
let secondCard = new Card("1", Suits.DIAMONDS); // invalid face, should throw Error