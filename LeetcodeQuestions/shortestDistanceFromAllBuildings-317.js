/**
 * @param {number[][]} grid
 * @return {number}
 * Time: O()
 * Space: O()
 */
var shortestDistance = function(grid) {
    
    if (grid === null || !grid[0].length) return -1;
    let rows = grid.length, cols = grid[0].length;
    let reach = Array.from({"length": rows}, () => Array.from({"length": cols}, () => null))
    let distances = Array.from({"length": rows}, () => Array.from({"length": cols}, () => null));
    let totalBuildings = 0;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1)  {
                bfs(grid, i, j, reach, distances, reach)
                totalBuildings++;
            }
        }
    }
    
    let minDistance = Infinity;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (reach[i][j] === totalBuildings && distances[i][j] < minDistance) {
                minDistance = distances[i][j];
            }
        }
    }
    return minDistance === Infinity ? -1 : minDistance;
};

function bfs(grid, row, col, reach, distances, reach) {
    let rowDir = [0,0,1,-1]
    let colDir = [1,-1,0,0]
    let rows = grid.length, cols = grid[0].length;
    let visited = Array.from({"length": rows}, () => Array.from({"length": cols}, () => 0))
    let queue = [[row, col]];
    visited[row][col] = true;
    let d = 0
    while (queue.length) {
        let size = queue.length;
        d++;
        for (let i = 0; i < size; i++) {
            let current = queue.shift();
            for (let k = 0; k < 4; k++) {
                let rr = current[0] + rowDir[k];
                let cc = current[1] + colDir[k];
                
                if (!isValid(grid, rr, cc, visited)) continue;
                queue.push([rr,cc])
                visited[rr][cc] = true;
                reach[rr][cc]++;
                distances[rr][cc] += d;
            }
        }
    }
    
}

function isValid(grid, rr, cc, visited) {
    if (rr < 0 || cc < 0 || rr > grid.length - 1 || cc > grid[0].length - 1) {
        return false;
    }
    
    if (visited[rr][cc]) return false;
    if (grid[rr][cc] !== 0) return false;
    return true;
}