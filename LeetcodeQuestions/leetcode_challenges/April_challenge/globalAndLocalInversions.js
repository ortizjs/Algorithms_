var isIdealPermutation = function(A) {
    let max = -1;
    for (let i = 0; i < A.length - 2; i++) {
        max = Math.max(A[i], max);
        if (max > A[i + 2]) return false;
    }
    return true;
};

console.log(isIdealPermutation([1,0,2]))
console.log(isIdealPermutation([1,2,0]))