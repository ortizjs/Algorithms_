function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

function selectionSort(arr) {
    for (let i = 0 ; i < arr.length; i++) {
        let minValIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minValIdx] > arr[j]) {
                swap(arr,i,j);
                minValIdx = j;
            }
        }
    }
    return arr;
}

module.exports = {
    selectionSort,
    swap
};