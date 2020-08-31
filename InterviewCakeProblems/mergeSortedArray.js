function mergeSortedArrays(myList, aliceList){
    let mergeSortedArrays = []

    let m = 0;
    let a = 0;
    
    while ((m < myList.length &&  a < aliceList.elngth) || (myList[m] != undefined || aliceList[a] != undefined)) {
        let mySell = myList[m]; 
        let aliceSell = aliceList[a];
        if (mySell === undefined) { mySell = Infinity}
        if (aliceSell === undefined) { aliceSell = Infinity}

        if (mySell <= aliceSell) {
            mergeSortedArrays.push(mySell);
            m++;
        } 
        else {
            mergeSortedArrays.push(aliceSell);
            a++;
        }
    }
    return mergeSortedArrays;
}


function mergeSortedArraysICImplementation(myArray, aliceArray) {
    let mergedSortedArrays = [];
    let myCurrentIdx = 0;
    let aliceCurrentIdx = 0;
    let currentMergedIdx = 0;
    
    while (currentMergedIdx < (myArray.length + aliceArray.length)) {
        let isMyArrayExhausted = myCurrentIdx >= myArray.length;
        let isAliceArraysExhausted = aliceCurrentIdx >= aliceArray.length;

        if (!isMyArrayExhausted && (isAliceArraysExhausted || myArray[myCurrentIdx] <= aliceArray[aliceCurrentIdx])) {
            mergedSortedArrays[currentMergedIdx] = myArray[myCurrentIdx];
            myCurrentIdx++;
        } else {
            mergedSortedArrays[currentMergedIdx] = aliceArray[aliceCurrentIdx];
            aliceCurrentIdx++;
        }
        currentMergedIdx++;
    }
    return mergedSortedArrays;
}
my_list = [3, 4, 6, 10, 11, 15, 20, 21]
alices_list = [1, 5, 8, 12, 14, 19]
const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeSortedArrays(my_list, alices_list))
console.log(mergeSortedArrays(myArray, alicesArray))
console.log(mergeSortedArraysICImplementation(my_list, alices_list))
console.log(mergeSortedArraysICImplementation(myArray, alicesArray))