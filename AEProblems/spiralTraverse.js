function spiralTraverse(array) {
    let results = [];
    let size = array.length * array[0].length;

    let top = 0;
    let bottom = array.length - 1;
    let left = 0;
    let right = array[0].length - 1;

    while (results.length < size) {
        for (let i = left; i <= right && results.length < size; i++) {
            results.push(array[top][i]);
        }
        top++;

        for (let i = top; i <= bottom && results.length < size; i++) {
            results.push(array[i][right]);
        }
        right--;

        for (let i = right; i >= left && results.length < size; i--) {
            results.push(array[bottom][i]);
        }
        bottom--;

        for (let i = bottom; i >= top && results.length < size; i--) {
            results.push(array[i][left]);
        }
        left++;
    }

    return results;
}

array = [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
console.log(spiralTraverse(array));