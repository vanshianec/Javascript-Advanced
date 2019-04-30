function printGreatestCommonDivisor(a, b) {
    while (a != b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }
    return a;
}

printGreatestCommonDivisor(252, 105); //21