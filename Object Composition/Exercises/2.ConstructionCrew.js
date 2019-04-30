function modifyWorker(worker) {
    if (worker['handsShaking']) {
        worker['handsShaking'] = false;
        worker['bloodAlcoholLevel'] = worker['bloodAlcoholLevel'] + worker['weight'] * worker['experience'] * 0.1;
    }
    return worker;
}

let result = modifyWorker({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
});

console.log(result);

//{ weight: 80,
//   experience: 1,
//   bloodAlcoholLevel: 8,
//   handsShaking: false }