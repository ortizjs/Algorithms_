/**
 * @param {number[][]} matrix
 * Time: O(m) time per query. O(mn) for pre computation. The pre-computation in the constructor takes O(mn) time. The sumRegion query takes O(m) time.
 * 
 * Space complexity : O(mn). The algorithm uses O(mn) space to store the cumulative sum of all rows.
 */
var NumMatrix = function(matrix) {
    this.dp = Array.from({"length": matrix.length}, () => Array.from({"length": matrix[0].length + 1}, () => 0));
    
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            this.dp[row][col+1] = this.dp[row][col] + matrix[row][col]
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;
    for (let row = row1; row <= row2; row++) {
        sum += this.dp[row][col2 + 1] - this.dp[row][col1]
    }
    return sum
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */




/**
 * @param {number[][]} matrix
 * 
 * Time complexity : O(1) time per query, O(mn) time pre-computation. The pre-computation in the constructor takes O(mn) time. Each sumRegion query takes O(1) time.
 * 
 * Space complexity : O(mn). The algorithm uses O(mn) space to store the cumulative region sum.
 */
var NumMatrix = function(matrix) {
    this.dp = Array.from({"length": matrix.length + 1}, () => Array.from({"length": matrix[0].length + 1}, () => 0));
    
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            this.dp[row+1][col+1] = this.dp[row + 1][col] + this.dp[row][col+1] + matrix[row][col] - this.dp[row][col]
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.dp[row2 + 1][col2 + 1] - this.dp[row1][col2 + 1] - this.dp[row2 + 1][col1] + this.dp[row1][col1]
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */