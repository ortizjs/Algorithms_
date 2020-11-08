function getProductsOfAllIntsExceptAtIndex(numbers) {
    let finalProducts = [];
    let before = [];
    let beforeTotal = 1;
    let afterTotal = 1;

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];
        before.push(beforeTotal);
        beforeTotal *= currentNum;
    }

    for (let i = numbers.length - 1; i >= 0; i--) {
        let currentNum = numbers[i];
        let bf = before[i]
        let sum = afterTotal * bf;
        finalProducts.unshift(sum);
        afterTotal *= currentNum
    }
    return finalProducts

};

nums = [1, 7, 3, 4]
nums2 = [1, 2, 6, 5, 9]
console.log(getProductsOfAllIntsExceptAtIndex(nums))
console.log(getProductsOfAllIntsExceptAtIndex(nums2))
// console.log(getProductsOfAllIntsExceptAtIndex(nums3))

//  1 * [1, 7, 3, 4] * 1
//  [1, 1, 7, 21, 84]
//  [,12,4]
//  [84, 12, 28, 21]
//  [1,7,7,3,4]
//  [84, ]
//  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]