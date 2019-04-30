function subSum(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    }
    if (array.length === 0) {
        return 0;
    }
    if (!array.every(Number)) {
        return NaN;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex >= array.length) {
        endIndex = array.length - 1;
    }
    return array.slice(startIndex, endIndex + 1).reduce((a, b) => a + b);
}

subSum([10, 20, 30, 40, 50, 60], 3, 300); //150