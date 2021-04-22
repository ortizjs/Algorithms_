function leastBricks(wall) {
    let counts = new Map();
    
    let n = wall.length;
    let max = 0;
    
    for (let row of wall) {
        let i = 0;
        let sum = 0;
        while (i < row.length - 1) {
            sum += row[i];
            if (i < row.length) {
                if (!counts.has(sum)) {
                    counts.set(sum, 0);
                }
                counts.set(sum, counts.get(sum) + 1);
                max = Math.max(max, counts.get(sum))
            }
            i++;
        }
    }
    // console.log(counts)
    return n - max;
}

console.log(leastBricks([[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]))