function sort(array, arg) {
    switch (arg) {
        case 'asc':
            return array.sort((a, b) => a - b);
        case 'desc':
            return array.sort((a, b) => b - a);
    }
}

sort([4 ,3 - 5, 21, 64, 7], 'desc');