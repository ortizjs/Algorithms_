// You are given a m x n 2D grid initialized with these three possible values; 
// -1 -- A Wall or an obstacle.
// 0 --- A Gate.
// Inf - Infinity means an empty room. We use the value 2^31 - 1= 2147483647 to
// represent INF as you may assume that the distance to a gate is less than 2147483647.

// Fill each empty room with the distance to its nearest gate. If it is 
// impossible to reach a gate, it should be filled with INF. 

// Given the 2D grid: 
// INF  -1    0   INF
// INF  INF  INF   -1
// INF  -1   INF   -1
//  0   -1   INF  INF

// After running your function, you 2D grid should be:
//  3   -1   0    1
//  2    2   1   -1
//  1   -1   2   -1
//  0   -1   3    4


// If we were to iterate through this, we could use two for loops to look at each
// cell because we will need to look at each cel... right? 


// Can be solved as a graph problem... 
// 


// function repopulateGrid(rooms) {
//     for (let i = 0; i < rooms.length; i++) {
//         for (let j = 0; j < rooms[i].length; j++) {
//             if (rooms[i][j] === 0) {
//                 dfs(i, j, 0, rooms);
//             }
//         }
//     }
// }

// function dfs(row, col, distance, rooms) {
//     if (row < 0 || row >= rooms.length || col < 0 || col >= rooms[row].length || rooms[row][col] < distance) {
//         return;
//     }
//     rooms[row][col] = distance;
//     dfs(row + 1, col, distance + 1, rooms);
//     dfs(row - 1, col, distance + 1, rooms);
//     dfs(row, col + 1, distance + 1, rooms);
//     dfs(row, col - 1, distance + 1, rooms);
// }

function repopulateGrid(rooms) {
    let rows = rooms.length;
    let cols = rooms[0].length;
    let queue = [];
    let dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (rooms[i][j] === 0) {
                queue.push([i,j]);
            }
        }
    }

    while (queue.length) {
        let curr = queue.shift();
        let currRow = curr[0];
        let currCol = curr[1];

        for (dir of dirs) {
            let nextRow = dir[0] + currRow;
            let nextCol = dir[1] + currCol;

            if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols || rooms[nextRow][nextCol] !== 2147483647) continue;
            rooms[nextRow][nextCol] = rooms[currRow][currCol] + 1;
            queue.push([nextRow, nextCol]); 
        }
    }
}

rooms = [
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647]
]

repopulateGrid(rooms);
console.log(rooms);