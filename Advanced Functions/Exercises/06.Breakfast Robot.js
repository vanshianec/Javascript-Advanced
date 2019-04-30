function solution() {
    let microElements = new Map();
    microElements.set('flavour', 0);
    microElements.set('carbohydrate', 0);
    microElements.set('fat', 0);
    microElements.set('protein', 0);

    return function execute(input) {
        if (input === 'report') {
            printMicroElements();
        } else {
            [command, element, quantity] = input.split(" ");
            switch (command) {
                case 'restock':
                    microElements.set(element, microElements.get(element) + +quantity);
                    console.log('Success');
                    break;
                case 'prepare':
                    cookMeal(element, quantity);
                    break;
            }
        }
    };

    function printMicroElements() {
        [...microElements.entries()].forEach(kv => process.stdout.write(kv[0] + "=" + kv[1] + " "));

    }

    function cookMeal(element, quantity) {
        let flavour = 0;
        let carb = 0;
        let fat = 0;
        let protein = 0;
        switch (element) {
            case 'apple':
                carb = 1 * quantity;
                flavour = 2 * quantity;
                break;
            case 'coke':
                carb = 10 * quantity;
                flavour = 20 * quantity;
                break;
            case 'burger':
                carb = 5 * quantity;
                fat = 7 * quantity;
                flavour = 3 * quantity;
                break;
            case 'omelet':
                protein = 5 * quantity;
                fat = 1 * quantity;
                flavour = 1 * quantity;
                break;
            case 'cheverme':
                flavour = 10 * quantity;
                carb = 10 * quantity;
                fat = 10 * quantity;
                protein = 10 * quantity;
                break;
        }
        if (element === 'apple' || element === 'coke') {
            if (microElements.get('carbohydrate') >= carb && microElements.get('flavour') >= flavour) {
                microElements.set('carbohydrate', microElements.get('carbohydrate') - carb);
                microElements.set('flavour', microElements.get('flavour') - flavour);
                console.log('Success');
            } else if (microElements.get('carbohydrate') < carb) {
                console.log('Error: not enough carbohydrate in stock');
            } else {
                console.log('Error: not enough flavour in stock');
            }
        } else if (element === 'burger') {
            if (microElements.get('carbohydrate') >= carb && microElements.get('flavour') >= flavour
                && microElements.get('fat') >= fat) {
                microElements.set('carbohydrate', microElements.get('carbohydrate') - carb);
                microElements.set('flavour', microElements.get('flavour') - flavour);
                microElements.set('fat', microElements.get('fat') - fat);
                console.log('Success');
            } else if (microElements.get('carbohydrate') < carb) {
                console.log('Error: not enough carbohydrate in stock');
            } else if (microElements.get('flavour') < flavour) {
                console.log('Error: not enough flavour in stock');
            } else {
                console.log('Error: not enough fat in stock');
            }
        } else if (element === 'omelet') {
            if (microElements.get('protein') >= protein && microElements.get('flavour') >= flavour
                && microElements.get('fat') >= fat) {
                microElements.set('protein', microElements.get('protein') - protein);
                microElements.set('flavour', microElements.get('flavour') - flavour);
                microElements.set('fat', microElements.get('fat') - fat);
                console.log('Success');
            } else if (microElements.get('protein') < protein) {
                console.log('Error: not enough protein in stock');
            } else if (microElements.get('flavour') < flavour) {
                console.log('Error: not enough flavour in stock');
            } else {
                console.log('Error: not enough fat in stock');
            }
        } else {
            if (microElements.get('protein') >= protein && microElements.get('flavour') >= flavour
                && microElements.get('fat') >= fat && microElements.get('carbohydrate') >= carb) {
                microElements.set('protein', microElements.get('protein') - protein);
                microElements.set('flavour', microElements.get('flavour') - flavour);
                microElements.set('fat', microElements.get('fat') - fat);
                microElements.set('carbohydrate', microElements.get('carbohydrate') - carb);
                console.log('Success');
            } else if (microElements.get('protein') < protein) {
                console.log('Error: not enough protein in stock');
            } else if (microElements.get('flavour') < flavour) {
                console.log('Error: not enough flavour in stock');
            } else if ((microElements.get('carbohydrate') < carb)) {
                console.log('Error : not enough carbohydrate in stock');
            } else {
                console.log('Error: not enough fat in stock');
            }
        }
    }
}


let manager = solution();


manager("restock protein 20"); // Success
manager("restock fat 33"); // Success
manager("restock carbohydrate 21"); // Success
manager("restock flavour 20"); // Success
manager("restock protein 20"); // Success
manager("prepare cheverme 1"); // Success
manager('report');