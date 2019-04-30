function getSortedTickets(array, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

    }

    let tickets = [];
    for (let ticket of array) {
        [destination, price, status] = ticket.split("|");
        price = +price;
        tickets.push(new Ticket(destination, price, status));
    }
    return tickets.sort(function (a, b) {
        if (a[sortingCriteria] < b [sortingCriteria]) {
            return -1;
        } else if (a[sortingCriteria] > b [sortingCriteria]) {
            return 1;
        }
        return 0;
    })
}

console.log(getSortedTickets(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));
