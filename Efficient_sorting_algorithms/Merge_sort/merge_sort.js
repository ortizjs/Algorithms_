function merge(array1, array2) {
    let merged = [];
    while (array1.length || array2.length) {
        let ele1 = array1.length ? array1[0] : Infinity;
        let ele2 = array2.length ? array2[0] : Infinity;
        let temp ;
        if (ele1 < ele2) {
            temp = array1.shift();
        } else {
            temp = array2.shift();
        }
        merged.push(temp);
    }
    return merged;
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let middleIdx = Math.min(array.length / 2);
    let leftSide = array.slice(0, middleIdx);
    let rightSide = array.slice(middleIdx);
    let leftSorted = mergeSort(leftSide);
    let rightSorted = mergeSort(rightSide);
    return merge(leftSorted, rightSorted);
}

module.exports = {
    merge,
    mergeSort
};