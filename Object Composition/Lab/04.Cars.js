function solve(input) {
    let carBuilder = function () {
        let cars = {};
        return {
            create: name => cars[name] = {},
            inherits: (child, parent) => Object.setPrototypeOf(cars[child], cars[parent]),
            set: (name, key, value) => cars[name][key] = value,
            print: name => {
                let result = [];
                for (const key in cars[name]) {
                    result.push(`${key}:${cars[name][key]}`)
                }
                console.log(result.join(', '));
            }
        }
    }();

    for (const element of input) {
        [command, ...args] = element.split(' ');
        if (command === 'create') {
            carBuilder.create(args[0]);
            if (args[1] === 'inherit') {
                carBuilder.inherits(args[0], args[2]);
            }
        } else {
            carBuilder[command](args[0], args[1], args[2]);
        }
    }
}


solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);