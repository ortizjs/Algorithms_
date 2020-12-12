function isMonotonic(array) {
    // Write your code here.
    if (!array.length || array.length <= 2) return true;

    let i = 0;
    let j = 1;

    while (j < array.length - 1) {
        let first = array[i];
        let second = array[j];
        let third = array[j + 1]
        console.log("first: ", first, "second: ", second, "third: ", third)
        if (first > second && second < third || first < second && second > third) {
            return false
        }
        i++;
        j++;
    }
    return true;
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]))