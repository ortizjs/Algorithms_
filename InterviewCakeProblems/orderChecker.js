function orderChecker(takeOutOrders, dineInOrders, servedOrders){
    var takeOutIdx = 0
    var dineInIdx = 0
    for (let i = 0; i < servedOrders.length; i++) {
        let order = servedOrders[i]
        if (takeOutOrders.indexOf(order) != -1) {
            if (takeOutIdx == takeOutOrders.indexOf(order)) {
                takeOutIdx += 1
            } else {
                return false
            }
        } else {
            if (dineInIdx == dineInOrders.indexOf(order)) {
                dineInIdx += 1
            } else {
                return false
            }
        }
    };
    return true
}

function orderCheckerRecur(takeOutOrders, dineInOrders, servedOrders, takeOutIdx=0, dineInIdx=0, servedIdx=0) {
    if (servedIdx === servedOrders.length) {
        return true
    } 
    if ((takeOutIdx < takeOutOrders.length) && takeOutOrders[takeOutIdx] == servedOrders[servedIdx]) {
        takeOutIdx++
    } else if ((dineInIdx < dineInOrders.length) && dineInOrders[dineInIdx] == servedOrders[servedIdx]) {
        dineInIdx++
    } else {
        return false
    }
    servedIdx++
    return orderCheckerRecur(takeOutOrders,dineInOrders,servedOrders,takeOutIdx, dineInIdx, servedIdx)
}

console.log(orderChecker([1, 3, 5], [2, 4, 6], [1, 2, 4, 6, 5, 3]))
console.log(orderChecker([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2]))
console.log("-------------- recursion version below!")
console.log(orderCheckerRecur([1, 3, 5], [2, 4, 6], [1, 2, 4, 6, 5, 3]))
console.log(orderCheckerRecur([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2]))