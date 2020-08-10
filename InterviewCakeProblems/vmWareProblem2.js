function fibonacci(n) {
    // Write your code here
    let results = [];
    let first = 0;
    let second = 1;
    let tempNum;
    while (n > 0) {
        tempNum = first
        first = first + second;
        second = tempNum;
        n -= 1;
        results.push(second)
    }
    return results;
}