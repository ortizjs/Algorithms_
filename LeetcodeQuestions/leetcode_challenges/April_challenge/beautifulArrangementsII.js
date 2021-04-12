function constructArray(n, k) {
    let res = new Array(n);
    let min = 1;
    let max = n;
    let idx = 0;
    let isMax = false;
    res[idx++] = min++;

    while (k > 1) {
        res[idx++] = max--;
        isMax = true;
        k--;
        if (k > 1) {
            res[idx++] = min++;
            isMax = false;
            k--;
        }
    }

    while (idx < n) {
        if (isMax) {
            res[idx++] = max--;
        } else {
            res[idx++] = min++;
        }
    }
    return res;
}