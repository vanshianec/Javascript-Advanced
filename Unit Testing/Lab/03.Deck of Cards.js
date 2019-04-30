function printDeckOfCards(cards) {
    function makeCard(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        };

        if (!faces.includes(face) || !suits[suit]) {
            let error = new Error('Invalid card! ');
            error.card = face + suit;
            throw error;
        }

        return {
            face: face,
            suit: suits[suit],
            toString: function () {
                return this.face + this.suit;
            }
        };
    }

    try {
        let result = cards.map(el => {
            let card = el.split('');
            let suit = card.pop();
            return makeCard(card.join(''), suit);
        });
        console.log(result.join(' '));
    } catch (error) {
        console.log(`Invalid card: ${error.card}`);
    }

}

printDeckOfCards(['AS', '10D', 'KH', '1C']);