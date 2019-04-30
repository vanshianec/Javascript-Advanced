function orderRectangles(rectangles) {
    let sortedRectangles = [];
    for (let rectangle of rectangles) {
        let obj = {
            width: rectangle[0],
            height: rectangle[1],
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (other) {
                if (this.area() > other.area()) {
                    return -1;
                } else if (this.area() < other.area()) {
                    return 1;
                } else {
                    if (this.width > other.width) {
                        return -1;
                    } else if (this.width < other.width) {
                        return 1;
                    }
                    return 0;
                }
            }
        };
        sortedRectangles.push(obj);
    }
    return sortedRectangles.sort((a, b) => a.compareTo(b));
}

console.log(orderRectangles([[1,20],[20,1],[5,3],[5,3]]));