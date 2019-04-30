let solution = function () {

    function add([xA, yA], [xB, yB]) {
        return [xA + xB, yA + yB];
    }

    function multiply([xA, yA], multiplier) {
        return [xA * multiplier, yA * multiplier];
    }

    function length([xA, yA]) {
        return Math.sqrt(xA * xA + yA * yA);
    }

    function dot([xA, yA], [xB, yB]) {
        return xA * xB + yA * yB;
    }

    function cross([xA, yA], [xB, yB]) {
        return xA * yB - yA * xB;
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }

}();


// Sample Input                             Output     Explanation
solution.add([1, 1], [1, 0]);              //[2, 1]    [1 + 1, 1 + 0] = [2, 1]
solution.multiply([3.5, -2], 2); //[7, -4]   [3.5 * 2, (-2) * 2] = [7, -4]
solution.length([3, -4]);                  //5         sqrt(3 * 3 + (-4) * (-4)) = 5
solution.dot([1, 0], [0, -1]);             //0         1 * 0 + 0 * (-1) = 0
solution.cross([3, 7], [1, 0]);           //-7         3 * 0 – 7 * 1 = -7