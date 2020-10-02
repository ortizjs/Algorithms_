function countingSort(arr, max) {
    let countingArray = new Array(max + 1).fill(0);
    let finalArray = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        countingArray[num]++
    }

    for (let j = 0; j < arr.length + 1; j++) {
        let counter = countingArray[j];
        while (counter > 0) {
            finalArray.push(j);
            counter--;
        }
    }
    return finalArray
}

console.log(countingSort([4, 3, 5, 6, 7, 8, 3, 1], 8))

module.exports = {
    countingSort
};