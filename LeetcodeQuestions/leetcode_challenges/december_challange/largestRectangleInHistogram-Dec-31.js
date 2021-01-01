var largestRectangleArea = function (heights) {
    if (!heights.length) {
        return 0
    }
    if (heights.length == 1) {
        return heights[0]
    }

    let maxArea = 0
    for (let i = 0; i < heights.length; i++) {
        let current = heights[i]
        let area = current
        left = i - 1
        right = i + 1
        while (left >= 0 && heights[left] >= current) {
            area += current
            left--
        }
        while (right < heights.length && heights[right] >= current) {
            area += current
            right++
        }
        maxArea = Math.max(area, maxArea)
    }
    return maxArea;
};