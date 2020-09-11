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

console.log("------My First Solution-----")
console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));
console.log(getProductsOfAllIntsExceptAtIndex([1, 2, 6, 5, 9]));
console.log(getProductsOfAllIntsExceptAtIndex([3, 1, 2, 5, 6, 4]));
console.log(getProductsOfAllIntsExceptAtIndex([0, 0, 0, 0, 0, 0]));
console.log(" ")

function getProductsOfAllIntsExceptAtIndex2(intsArray) {

    // ```This implementation does not full work yet...
    //     some of the products are not calculated correctly for example:
    //     input array = [1,7,3,4]
    //     output array gives [84,12,7,21] but it should be:
    //     right output being [84,12,28,21]```
        
    if (intsArray.length < 2) {
        throw new Error("Getting the product of numbers at other indices requires at least 2 numbers...")
    }
    let finalArray = new Array(intsArray.length).fill(0)
    let prevProd = 1;
    let toGoProd = 1;
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

console.log("-----My Second Solution------")
console.log(getProductsOfAllIntsExceptAtIndex2([1, 7, 3, 4]));
console.log(getProductsOfAllIntsExceptAtIndex2([1, 2, 6, 5, 9]));
console.log(getProductsOfAllIntsExceptAtIndex2([3, 1, 2, 5, 6, 4]));
console.log(getProductsOfAllIntsExceptAtIndex2([0, 0, 0, 0, 0, 0]));
console.log(" ")


function getProductsOfAllIntsExceptAtIndexInterviewCakeSolution(intArray) {
    if (intArray.length < 2) {
        throw new Error("Getting the product of numbers at other indices requires at least 2 numbers...")
    }

    const productsOfAllIntsExceptAtIndex = [];

    let productSoFar = 1;
    for (let i = 0; i < intArray.length; i++) {
        productsOfAllIntsExceptAtIndex[i] = productSoFar;
        productSoFar *= intArray[i];
    }

    productSoFar = 1;
    for (let j = intArray.length - 1; j >= 0; j--) {
        productsOfAllIntsExceptAtIndex[j] *= productSoFar;
        productSoFar *= intArray[j]
    }

    return productsOfAllIntsExceptAtIndex;
}


console.log("------InterviewCake Solution-----")
console.log(getProductsOfAllIntsExceptAtIndexInterviewCakeSolution([1, 7, 3, 4]));
console.log(getProductsOfAllIntsExceptAtIndexInterviewCakeSolution([1, 2, 6, 5, 9]));
console.log(getProductsOfAllIntsExceptAtIndexInterviewCakeSolution([3, 1, 2, 5, 6, 4]));
console.log(getProductsOfAllIntsExceptAtIndexInterviewCakeSolution([0, 0, 0, 0, 0, 0]));