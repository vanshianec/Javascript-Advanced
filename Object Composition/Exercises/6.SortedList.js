function sortedList() {
    return {
        list: [],
        size: 0,
        add: function (element) {
            if (element % 1 === 0) {
                this.list.push(element);
                this.size = this.list.length;
                this.list.sort((a, b) => a - b);
            }
        },
        remove: function (index) {
            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1);
                this.size = this.list.length;
                this.list.sort((a, b) => a - b);
            }
        },
        get: function (index) {
            if (index >= 0 && index < this.list.length) {
                return this.list[index];
            }
        },
        s: function () {
            return this.size;
        }
    }
}

let list = sortedList();
list.add(5); //[5]
list.add(9); // [5, 9]
list.add(2); // [2, 5, 9]
console.log(list.get(2)); //  [2, 5, 9] => 9
list.add(5); // [2, 5, 5, 9]
list.remove(0); // [2, 5, 5, 9] => remove '2'
console.log(list.s()); // 3 (list size)
