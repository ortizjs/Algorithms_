function subsets(numsArray) {
    let results = [];
    return generateSubsets([], numsArray, results);
}


function generateSubsets(temp, rest, results) {
    results.push(temp);
    for (let i = 0; i < rest.length; i++) {
        generateSubsets(temp.concat(rest[i]), rest.slice(i + 1), results);
    }
    return results;
}

console.log(subsets([1,2,3]))
console.log(subsets([1,2,3,4]))
console.log(subsets([1,2,3,4,5,6,7]))