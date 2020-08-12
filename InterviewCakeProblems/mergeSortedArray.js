function mergeSortedArrays(myList, aliceList){
    let mergedArrays = []
    let myCurrentIdx = 0
    let aliceCurrentIdx = 0
    let mergedIdx = 0
    
    while (mergedIdx < (myList.length + aliceList.length)){
        let myCurrNum = myList[myCurrentIdx]
        let aliceCurrNum = aliceList[aliceCurrentIdx]
        let myListDone = myCurrentIdx >= myList.length
        let aliceListDone = aliceCurrentIdx >= aliceList.length
        if ((!myListDone) && (aliceListDone || myCurrNum < aliceCurrNum)) {
            mergedArrays.push(myCurrNum)
            myCurrentIdx++
        } else {
            mergedArrays.push(aliceCurrNum)
            aliceCurrentIdx++
        }
        mergedIdx++
    }
    return mergedArrays
}
my_list = [3, 4, 6, 10, 11, 15, 20, 21]
alices_list = [1, 5, 8, 12, 14, 19]

console.log(mergeSortedArrays(my_list, alices_list))