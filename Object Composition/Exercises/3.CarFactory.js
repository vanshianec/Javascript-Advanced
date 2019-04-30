function assembleCar(car) {
    function getEngine() {
        let currentPower = car['power'];
        if (currentPower <= 90) {
            return {power: 90, volume: 1800};
        }
        if (currentPower <= 120) {
            return {power: 120, volume: 2400};
        }
        if (currentPower <= 200) {
            return {power: 200, volume: 3500};
        }
    }

    function getWheels() {
        let wheelSize = car['wheelsize'];
        if (wheelSize % 2 === 0) {
            wheelSize--;
        }
        return [wheelSize, wheelSize, wheelSize, wheelSize];

    }

    return {
        model: car['model'],
        engine: getEngine(),
        carriage: {
            type: car['carriage'],
            color: car['color']
        },
        wheels: getWheels()
    };
}

console.log(assembleCar({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));