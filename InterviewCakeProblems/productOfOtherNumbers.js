function getProductsOfAllIntsExceptAtIndex(intsArray){
    if (intsArray.length < 2) {
        throw new Error("Getting the product of numbers at other indices requires at least 2 numbers...")
    }
    let finalArray = []
    let prevArr = [];
    let toGoArr = []
    let prevProd = 1;
    let toGoProd = 1;
    let i = 0; 
    let k = intsArray.length - 1;

    while (i < intsArray.length && k >= 0){
        prevArr[i] = prevProd;
        toGoArr[k] = toGoProd;
        prevProd *= intsArray[i];
        toGoProd *= intsArray[k];
        i++;
        k--;
    }

    for (let j = 0; j < prevArr.length; j++) {
        finalArray[j] = prevArr[j] * toGoArr[j];
    }
    return finalArray;
}


console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));
console.log(getProductsOfAllIntsExceptAtIndex([1, 2, 6, 5, 9]));
console.log(getProductsOfAllIntsExceptAtIndex([3, 1, 2, 5, 6, 4]));
console.log(getProductsOfAllIntsExceptAtIndex([0, 0, 0, 0, 0, 0]));


function getProductsOfAllIntsExceptAtIndex2(intsArray) {
    if (intsArray.length < 2) {
        throw new Error("Getting the product of numbers at other indices requires at least 2 numbers...")
    }
    let finalArray = []
    let toGoProd = 1;
    let prevProd = 1;
    let i = 0;
    let k = intsArray.length - 1;

    while (i < intsArray.length && k >= 0) {
        finalArray[i] = prevProd;
        finalArray[k] = toGoProd;
        prevProd *= intsArray[i];
        toGoProd *= intsArray[k];
        i++;
        k--;
    }
    return finalArray;
}


console.log(getProductsOfAllIntsExceptAtIndex2([1, 7, 3, 4]));
console.log(getProductsOfAllIntsExceptAtIndex2([1, 2, 6, 5, 9]));
console.log(getProductsOfAllIntsExceptAtIndex2([3, 1, 2, 5, 6, 4]));
console.log(getProductsOfAllIntsExceptAtIndex2([0, 0, 0, 0, 0, 0]));