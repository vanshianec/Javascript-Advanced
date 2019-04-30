function executeCommands(array) {
    for (let com of array) {
        [command, input] = com.split(" ");
        switch (command) {
            case 'append':
                closure.append(input);
                break;
            case 'removeStart':
                closure.removeStart(+input);
                break;
            case 'removeEnd':
                closure.removeEnd(+input);
                break;
            case 'print':
                closure.print();
                break;
        }
    }
}

let closure = function test() {
    let result = '';
    return {
        append: (input) => result += input,
        removeStart: (input) => result = result.slice(input),
        removeEnd: (input) => result = result.slice(0, result.length - input),
        print: () => console.log(result)
    };
}();

executeCommands(['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']);