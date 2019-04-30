function aggregate(array) {
    //print sum
    console.log(array.reduce((acc, current) => acc + current));
    //print min number
    console.log(array.reduce((acc, current) => Math.min(acc, current)));
    //print max number
    console.log(array.reduce((acc, current) => Math.max(acc, current)));
    //print product
    console.log(array.reduce((acc, current) => acc * current));
    //print numbers joined
    console.log(array.join(''));
}

aggregate([3, 10, 2, -4]);
//11 - Sum
// -4 - Min
// 10 - Max
// -240 - product
// 3102-4 - concat