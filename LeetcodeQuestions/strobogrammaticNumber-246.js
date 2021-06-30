var isStrobogrammatic = function(num) {
    let n = num.length;

    for (let i = 0, j = n - 1; i <= j; i++, j--) {
        let numStr = `${num[i]}${num[j]}`;
        if (numStr !== "00" && numStr !== "11" && numStr !== "88" && numStr !== "69" && numStr !== "96") {
            return false;
        }
    }
    return true;
}