function executeCommands(input) {
    let execute = function () {
        let result = [];
        return {
            add: function (string) {
                result.push(string);
            },
            remove: function (string) {
                result = result.filter(e => e !== string);
            },
            print: function () {
                console.log(result.join(','));
            }
        };
    }();

    for (let element of input) {
        [command, string] = element.split(' ');
        execute[command](string);
    }
}

executeCommands(['add hello', 'add again', 'remove', ' hello', 'add again', 'print']);