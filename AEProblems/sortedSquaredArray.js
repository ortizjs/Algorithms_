function sortedSquaredArray(array) {
    let squares = [];
    let minPointer = 0;
    let maxPointer = array.length - 1;

    while (minPointer <= maxPointer) {
        let minVal = Math.min(array[minPointer], array[maxPointer]);
        let maxVal = Math.max(array[minPointer], array[maxPointer]);
        let minAbs = Math.abs(minVal)
        let maxAbs = Math.abs(maxVal)
        if (minAbs > maxAbs) {
            squares.unshift(minAbs ** 2)
            minPointer++;
        } else {
            squares.unshift(maxAbs ** 2)
            maxPointer--;
        }
    }
    return squares
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))
console.log(sortedSquaredArray([1, 2]))
console.log(sortedSquaredArray([-5, -4, -3, -2, -1]))