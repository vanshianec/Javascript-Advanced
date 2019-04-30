class SortedList {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        if (element % 1 === 0) {
            this.list.push(element);
            this.size = this.list.length;
            this.list.sort((a, b) => a - b);
        }
    }

    remove(index) {
        if (index >= 0 && index < this.list.length) {
            this.list.splice(index, 1);
            this.size = this.list.length;
            this.list.sort((a, b) => a - b);
        }
    }

    get(index) {
        if (index >= 0 && index < this.list.length) {
            return this.list[index];
        }
    }

    get listSize() {
        return this.size;
    }

    toString() {
        return this.list;
    }
}

let sortedList = new SortedList();
sortedList.add(5);
sortedList.add(3);
sortedList.add(8);
sortedList.add(5);
sortedList.remove(2);
console.log(sortedList.get(0));
console.log(sortedList.toString());
