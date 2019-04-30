class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
        this.singleRooms = Math.floor(capacity * 0.5);
        this.doubleRooms = Math.floor(capacity * 0.3);
        this.maisonetteRooms = Math.floor(capacity * 0.2);
    }

    get roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135
        }
    }

    get servicesPricing() {
        return {
            food: 10,
            drink: 15,
            housekeeping: 25
        }
    }

    rentARoom(clientName, roomType, nights) {
        let roomsCount = 0;
        let output;
        switch (roomType) {
            case 'single':
                roomsCount = this.singleRooms;
                break;
            case 'double':
                roomsCount = this.doubleRooms;
                break;
            case 'maisonette':
                roomsCount = this.maisonetteRooms;
                break;
        }
        if (roomsCount <= 0) {
            output = getAvailableRooms(this.singleRooms, this.doubleRooms, this.maisonetteRooms);
        } else {
            let bookingNumber = this.currentBookingNumber++;
            let client = {bookingNumber, clientName, roomType, nights};
            this.bookings.push(client);
            switch (roomType) {
                case 'single':
                    this.singleRooms--;
                    break;
                case 'double':
                    this.doubleRooms--;
                    break;
                case 'maisonette':
                    this.maisonetteRooms--;
                    break;
            }
            output = `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${bookingNumber}.`
        }

        function getAvailableRooms(singleRooms, doubleRooms, maisonetteRooms) {
            let rooms = {
                'single': singleRooms,
                'double': doubleRooms,
                'maisonette': maisonetteRooms
            };
            delete rooms[roomType];
            let result = `No ${roomType} rooms available!`;
            for (let rType in rooms) {
                if (rooms[rType] !== 0) {
                    result += ` Available ${rType} rooms: ${rooms[rType]}.`
                }
            }
            return result;
        }

        return output;
    }

    checkOut(currentBookingNumber) {
        if (typeof this.bookings[currentBookingNumber - 1] === 'undefined') {
            return `The booking ${currentBookingNumber} is invalid.`
        }
        let client = this.bookings[currentBookingNumber - 1];
        let roomPrice = +this.roomsPricing[client.roomType];
        switch (client.roomType) {
            case 'single':
                this.singleRooms++;
                break;
            case 'double':
                this.doubleRooms++;
                break;
            case 'maisonette':
                this.maisonetteRooms++;
                break;
        }
        let totalPrice = roomPrice * +client.nights;
        this.bookings.splice(currentBookingNumber - 1, 1);
        if (client.hasOwnProperty('services')) {
            let services = client.services;
            let totalServiceMoney = 0;
            for (let service of services) {
                totalServiceMoney += +this.servicesPricing[service];
            }
            return `We hope you enjoyed your time here, Mr./Mrs. ${client.clientName}. The total amount of money you have to pay is ${totalPrice + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`
        }
        return `We hope you enjoyed your time here, Mr./Mrs. ${client.clientName}. The total amount of money you have to pay is ${totalPrice} BGN.`
    }

    roomService(currentBookingNumber, serviceType) {
        if (typeof this.bookings[currentBookingNumber - 1] === 'undefined') {
            return `The booking ${currentBookingNumber} is invalid.`
        } else if (!this.servicesPricing.hasOwnProperty(serviceType)) {
            return `We do not offer ${serviceType} service.`
        }
        let client = this.bookings[currentBookingNumber - 1];
        let clientName = client['clientName'];
        if (!client.hasOwnProperty('services')) {
            client.services = [];
        }
        client.services.push(serviceType);
        this.bookings[currentBookingNumber - 1] = client;
        return `Mr./Mrs. ${clientName}, Your order for ${serviceType} service has been successful.`
    }

    report() {
        let result = `${this.name.toUpperCase()} DATABASE:\n--------------------\n`;
        if (this.bookings.length === 0) {
            return result + 'There are currently no bookings.'
        }
        this.bookings.forEach(booking => {
            for (let key in booking) {
                if (booking[key] instanceof Array) {
                    result += `${key}: ${booking[key].join(', ')}\n`
                } else {
                    result += `${key} - ${booking[key]}\n`
                }
            }
            result += '----------\n';
        });
        return result.slice(0, -12);
    }
}

let hotel = new Hotel('HotUni', 11);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Peter', 'single', 4);
console.log(hotel.rentARoom('Peter', 'single', 4));
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Robert', 'double', 4);
console.log(hotel.rentARoom('Robert', 'double', 4));
console.log(hotel.rentARoom('Robert', 'double', 4));
hotel.rentARoom('Geroge', 'maisonette', 6);
hotel.rentARoom('Geroge', 'maisonette', 6);
console.log(hotel.rentARoom('Geroge', 'maisonette', 6));

hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(3, 'drink');
hotel.roomService(3, 'drink');
hotel.roomService(3, 'drink');
console.log(hotel.checkOut(3));
hotel.roomService(2, 'room');
console.log(hotel.report());



