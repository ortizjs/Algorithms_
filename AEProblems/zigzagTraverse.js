function zigzagTraverse(array) {
    let results = [];
    let goingDown = true;
    let height = array.length - 1;
    let width = array[0].length - 1;
    let row = 0;
    let col = 0;

    while (!isOutOfBounds(row, col, height, width)) {
        results.push(array[row][col]);
        if (goingDown) {
            if (row === height || col === 0) {
                goingDown = false;
                if (row === height) {
                    col++;
                } else {
                    row++;
                }
            } else {
                row++;
                col--;
            }
        } else {
            if (col === width || row === 0) {
                goingDown = true
                if (col === width) {
                    row++;
                } else {
                    col++;
                }
            } else {
                row--;
                col++;
            }
        }
    }
    return results

}

function isOutOfBounds(row, col, height, width) {
    return row < 0 || row > height || col < 0 || col > width
}

console.log(zigzagTraverse([[1, 3, 4, 10], [2, 5, 9, 11], [6, 8, 12, 15], [7, 13, 14, 16]]));
console.log(zigzagTraverse([[1]]));
console.log(zigzagTraverse([[1, 2, 3, 4, 5]]));
console.log(zigzagTraverse([[1], [2], [3], [4], [5]]));
console.log(zigzagTraverse([[1, 3], [2, 4], [5, 7], [6, 8], [9, 10]]));
console.log(zigzagTraverse([[1, 3, 4, 7, 8], [2, 5, 6, 9, 10]]));
console.log(zigzagTraverse([
    [1, 3, 4, 10, 11],
    [2, 5, 9, 12, 19],
    [6, 8, 13, 18, 20],
    [7, 14, 17, 21, 24],
    [15, 16, 22, 23, 25]
]));
console.log(zigzagTraverse([
    [1, 3, 4, 10, 11, 20],
    [2, 5, 9, 12, 19, 21],
    [6, 8, 13, 18, 22, 27],
    [7, 14, 17, 23, 26, 28],
    [15, 16, 24, 25, 29, 30]
]));
console.log(zigzagTraverse([
    [1, 3, 4, 10, 11],
    [2, 5, 9, 12, 20],
    [6, 8, 13, 19, 21],
    [7, 14, 18, 22, 27],
    [15, 17, 23, 26, 28],
    [16, 24, 25, 29, 30]
]));
console.log(zigzagTraverse([
    [1, 21, -3, 4, 15, 6, -7, 88, 9],
    [10, 11, 112, 12, 20, -1, -2, -3, -4],
    [6, 8, 113, 19, 21, 0, 0, 0, 0],
    [7, 2, 18, 22, -27, 12, 32, -111, 66],
    [15, 17, 23, 226, 28, -28, -226, -23, -17],
    [16, 24, 27, 299, 30, 29, 32, 31, 88]
]));