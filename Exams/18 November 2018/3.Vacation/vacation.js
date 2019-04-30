class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    get numberOfChildren() {
        let totalCount = 0;
        for (let grade in this.kids) {
            totalCount += this.kids[grade].length;
        }
        return totalCount;
    }

    registerChild(name, grade, budget) {
        if (this.budget > budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }
        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }
        let value = `${name}-${budget}`;
        if (this.kids[grade].includes(value)) {
            return `${name} is already in the list for this ${this.destination} vacation.`
        }
        this.kids[grade].push(value);
        return this.kids[grade];
    }

    removeChild(name, grade) {
        if (!this.kids.hasOwnProperty(grade)) {
            return `We couldn't find ${name} in ${grade} grade.`
        }
        if (!this.kids[grade].map(kid => kid.split("-")[0]).includes(name)) {
            return `We couldn't find ${name} in ${grade} grade.`
        }

        this.kids[grade] = this.kids[grade].filter(kid => !kid.includes(name));
        return this.kids[grade];
    }

    toString() {
        if (Object.keys(this.kids).length === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
        }
        let result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
        Object.keys(this.kids).sort((a, b) => +a - +b).forEach(key => {
            let count = 1;
            result += `Grade: ${key}\n`;
            this.kids[key].forEach(kid => {
                result += `${count}. ${kid}\n`;
                count++;
            })
        });
        return result;
    }
}


let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);

console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Lilly', 6, 2100));
console.log(vacation.registerChild('Pesho', 6, 2400));
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Tanya', 5, 6000));
console.log(vacation.registerChild('Mitko', 10, 1590));

vacation.registerChild('Gosho', 5, 2000);
vacation.registerChild('Lilly', 6, 2100);

console.log(vacation.removeChild('Gosho', 9));

vacation.registerChild('Pesho', 6, 2400);
vacation.registerChild('Gosho', 5, 2000);

console.log(vacation.removeChild('Lilly', 6));
console.log(vacation.registerChild('Tanya', 5, 6000))

vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500);

console.log(vacation.toString());


