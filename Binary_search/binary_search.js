function binarySearch(array, target) {
    if (!array.length) return false;
    let midIdx = Math.floor(array.length / 2);
    if (target < array[midIdx]) {
        return binarySearch(array.slice(0, midIdx), target);
    } else if (target > array[midIdx]) {
        return binarySearch(array.slice(midIdx + 1), target);
    } else {
        return true;
    }
}

function binarySearchIndex(array, target) {

}


module.exports = {
    binarySearch,
    binarySearchIndex
};