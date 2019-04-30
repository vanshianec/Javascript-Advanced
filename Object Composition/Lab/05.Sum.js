function getObject() {
    return function () {
        let sel1;
        let sel2;
        let resSel;
        return {
            init: function (selector1, selector2, resultSelector) {
                sel1 = document.getElementById(`${selector1}`);
                sel2 = document.getElementById(`${selector2}`);
                resSel = document.getElementById(`${resultSelector}`);
            },
            add: function () {
                resSel.value = +sel1.value + +sel2.value;
            },
            subtract: function () {
                resSel.value = +sel1.value - +sel2.value;
            }
        };
    }();
}




