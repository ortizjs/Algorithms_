var maxArea = function (height) {
    let maxArea = -Infinity;

    let i = 0;
    let j = height.length - 1;

    while (i < j) {
        let currentArea = Math.min(height[i], height[j]) * (j - i)
        maxArea = Math.max(maxArea, currentArea)
        if (height[i] < height[j]) {
            i++
        } else {
            j--;
        }
    }
    return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]))