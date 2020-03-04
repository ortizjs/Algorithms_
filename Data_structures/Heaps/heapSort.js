function HeapSort(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        heapify(array, array.length, i);
    }   
    for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
        swap(array, endOfHeap, 0);
        heapify(array, endOfHeap, 0);
    }
    return array;
}


function heapify(array, n, i){
   let leftIdx = 2 * i + 1;
   let rightIdx = 2 * i + 2;
   let leftChild = leftIdx >= n ? -Infinity : array[leftIdx];
   let rightChild = rightIdx >= n ? -Infinity : array[rightIdx];
   if (array[i] > leftChild && array[i] > rightChild) return;
   let swapIdx;
   if (leftChild < rightChild) {
       swapIdx = rightIdx;
   } else {
       swapIdx = leftIdx;
   }
   swap(array, i, swapIdx);
   heapify(array, n, swapIdx);
}

function swap(array, i, j){
    [array[i], array[j]] = [array[j], array[i]];
}









// function HeapSort(array) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         heapify(array, array.length, i);
//     }
//     for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--){
//         swap(array, endOfHeap, 0);
//         heapify(array, endOfHeap, 0);
//     }
//     return array;
// }


// function heapify(array, n, i){
//     let leftIdx = 2 * i + 1;
//     let rightIdx = 2 * i + 2;
//     let leftVal = array[leftIdx];
//     let rightVal = array[rightIdx];

//     if (leftIdx >= n) leftVal = -Infinity;
//     if (rightIdx >= n) rightVal = -Infinity;
//     if (array[i] > leftVal && array[i] > rightVal) return;
//     let swapIdx;
//     if (leftVal < rightVal) {
//         swapIdx = rightIdx;
//     } else {
//         swapIdx = leftIdx;
//     }
//     swap(array, i, swapIdx);
//     heapify(array, n, swapIdx);
// }

// function swap(array, i, j){
//     [array[i], array[j]] = [array[j], array[i]];
// }

console.log(HeapSort([7,9,6,10,20,4,8,21]));
console.log(HeapSort([777,93,66,100,20,43,88,21]));
console.log(HeapSort([79,79,60,1000,20,45,89,21]));