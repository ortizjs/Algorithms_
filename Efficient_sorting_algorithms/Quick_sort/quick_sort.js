function quickSort(array) {
    if (array.length <= 1) return array;
    let pivot = array.shift();
    let leftSide = array.filter(el => el < pivot);
    let rightSide = array.filter(el => el >= pivot);
    let leftSorted = quickSort(leftSide);
    let rightSorted = quickSort(rightSide);
    return leftSorted.concat(pivot).concat(...rightSorted);
}


module.exports = {
    quickSort
};