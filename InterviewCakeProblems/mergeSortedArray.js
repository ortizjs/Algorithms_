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
    let mergedSortedArray = [];
    let myCurrentIdx = 0;
    let aliceCurrentIdx = 0;
    let mergedCurrentIdx = 0;

    while (mergedCurrentIdx < (myArray.length + aliceArray.length)) {
        const isMyArrayExhausted = myCurrentIdx >= myArray.length;
        const isAliceArrayExhausted = aliceCurrentIdx >= aliceArray.length;

        if (!isMyArrayExhausted && (isAliceArrayExhausted || myArray[myCurrentIdx] < aliceArray[aliceCurrentIdx])) {
            mergedSortedArray[mergedCurrentIdx] = myArray[myCurrentIdx];
            myCurrentIdx++;
        } else {
            mergedSortedArray[mergedCurrentIdx] = aliceArray[aliceCurrentIdx];
            aliceCurrentIdx++;
        }
        mergedCurrentIdx++;
    }
    return mergedSortedArray
}
my_list = [3, 4, 6, 10, 11, 15, 20, 21]
alices_list = [1, 5, 8, 12, 14, 19]
const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeSortedArrays(my_list, alices_list))
console.log(mergeSortedArrays(myArray, alicesArray))
console.log(mergeSortedArraysICImplementation(my_list, alices_list))
console.log(mergeSortedArraysICImplementation(myArray, alicesArray))