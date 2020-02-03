// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end
function stepper(nums, memo={}) {
    let table = new Array(nums.length).fill(false);
    table[0] = true;
    for (let i = 0; i < nums.length; i++) {
        let maxRange = nums[i];
        if (table[i]) {
            for (let j = 1; j <= maxRange; j++){
                table[j] = true;
            }
        }
    }
    return table[nums.length - 1];

    // let key = nums.length;
    // if (key in memo) return memo[key];
    // if (nums.length === 0 || nums.length === 1) return true;
    // let maxRange = nums[0];
    // for (let s = 1; s <= maxRange; s++) {
    //     if (stepper(nums.slice(s), memo)) {
    //         memo[key] = true;
    //         return true;
    //     }
    // }   
    // memo[key] = false;
    // return memo[key];
    
    



}


// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6 
function maxNonAdjacentSum(nums, memo={}) {
    let key = nums.length;
    if (key in memo) return memo[key];
    if (nums.length === 0 ) return 0;
    let firstEle = nums[0];
    memo[key] = Math.max(firstEle + maxNonAdjacentSum(nums.slice(2), memo), maxNonAdjacentSum(nums.slice(1), memo));
    return memo[key];
    // if (nums.length === 0) return 0;
    // let table = new Array(nums.length);
    // table[0] = nums[0];
    // for (let i = 1; i < table.length; i++) {
    //     let skipLeftNeighbor = table[i - 2] === undefined ? 0 : table[i - 2];
    //     let includeThisNum = skipLeftNeighbor + nums[i];
    //     let notInclludeThisNum = table[i - 1];
    //     table[i] = Math.max(includeThisNum, notInclludeThisNum);
    // }
    // return table[nums.length - 1];
}


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount, memo={}) {
    let table = new Array(amount + 1).fill(Infinity);
    table[0] = 0;
    coins.forEach(coin => {
        for (let amt = 0; amt < table.length; amt++) {
            for (let qty = 0; qty * coin <= amt; qty++) {
                remainder = amt - qty * coin;
                attempt = table[remainder] + qty;
                if (attempt < table[amt]) table[amt] = attempt;
            }
        }
    });
    return table[table.length - 1];
    // let key = amount + '-' + coins;
    // if (key in memo) return memo[key];
    // if (amount === 0) return 0;
    // let results = [];

    // coins.forEach(coin => {
    //     if (coin <= amount) {
    //         results.push(minChange(coins, amount - coin, memo) + 1);
    //     }
    // });
    // memo[key] = Math.min(...results);
    // return memo[key];
}


module.exports = {
    stepper,
    maxNonAdjacentSum,
    minChange
};