function numberOfIslands(grid) {
    if (grid.length < 1) {
        return 0;
    }
    let islands = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                islands += dfs(i, j, grid);
            }
        }
    }
    return islands;
}

function dfs(i, j ,grid) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === "0") {
        return 0;
    }
    grid[i][j] = "0"
    dfs(i + 1, j, grid);
    dfs(i - 1, j , grid);
    dfs(i, j + 1, grid);
    dfs(i, j - 1, grid);
    return 1;
}

let grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]
let grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]

console.log(numberOfIslands(grid));
console.log(numberOfIslands(grid2));