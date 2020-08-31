function orderChecker(takeOutOrders, dineInOrders, servedOrders){
    let takeOutCurrentIdx = 0;
    let dineInCurrentIdx = 0;
    let servedCurrentIdx = 0;

    while (servedCurrentIdx < servedOrders.length) {
        let currentServedOrder = servedOrders[servedCurrentIdx];

        if (dineInCurrentIdx <= dineInOrders.length - 1 && (currentServedOrder === dineInOrders[dineInCurrentIdx])) {
            dineInCurrentIdx++;
        } else if (takeOutCurrentIdx <= takeOutOrders.length - 1 && (currentServedOrder == takeOutOrders[takeOutCurrentIdx])) {
            takeOutCurrentIdx++;
        } else {
            return false;
        }
        servedCurrentIdx++;
    }

    if (dineInCurrentIdx != dineInOrders.length || takeOutCurrentIdx != takeOutOrders.length) {
        return false;
    }
    
    return true;
}

function orderCheckerRecur(takeOutOrders, dineInOrders, servedOrders, takeOutIdx=0, dineInIdx=0, servedIdx=0) {
    if (servedIdx === servedOrders.length - 1) {
        return true;
    }
    if (servedOrders[servedIdx] === takeOutOrders[takeOutIdx]) {
        takeOutIdx++;
    } else if (servedOrders[servedIdx] === dineInOrders[dineInIdx]) {
        dineInIdx++
    } else {
        return false;
    }
    servedIdx++;
    return orderCheckerRecur(takeOutOrders, dineInOrders, servedOrders, takeOutIdx, dineInIdx, servedIdx);
}

console.log(orderChecker([1, 3, 5], [2, 4, 6], [1, 2, 4, 6, 5, 3]))
console.log(orderChecker([1, 3, 5, 8, 10], [2, 4, 6], [1, 2, 4, 6, 5, 3, 10, 8]))
console.log(orderChecker([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2]))
console.log(orderChecker([17, 8, 24], [12, 19, 2,3], [17, 8, 12, 19, 24, 2,3]))
console.log("-------------- recursion version below!")
console.log(orderCheckerRecur([1, 3, 5], [2, 4, 6], [1, 2, 4, 6, 5, 3]))
console.log(orderCheckerRecur([1, 3, 5, 8, 10], [2, 4, 6], [1, 2, 4, 6, 5, 3, 10, 8]))
console.log(orderCheckerRecur([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2]))
console.log(orderCheckerRecur([17, 8, 24], [12, 19, 2, 3], [17, 8, 12, 19, 24, 2, 3]))