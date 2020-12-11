function generateMatrix(n) {
    let total = n ** 2
    let matrix = Array.from({ length: n }, () => Array.from({ length: n }, () => false));

    let counter = 1
    let top = 0;
    let bottom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1


    while (counter <= total) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = counter;
            counter++;
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = counter;
            counter++;
        }
        right--;
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = counter;
            counter++;
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = counter;
            counter++;
        }
        left++;
    }
    return matrix
}

console.log(generateMatrix(3))