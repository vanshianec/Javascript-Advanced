function displayArgsInfo() {
    let map = new Map();
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ": " + obj);
        if (!map.has(type)) {
            map.set(type, 0);
        }
        map.set(type, map.get(type) + 1);
    }
    [...map.entries()].sort((a, b) => b[1] - a[1]).forEach(kv => console.log(kv[0] + " = " + kv[1]));
}

displayArgsInfo('cat', 'dog', 42, function () {
    console.log('Hello world!');
});