function orderChecker(dineInOrder, takeOutOrders, servedOrders) {
    let dineInIdx = 0;
    let takeOutIdx = 0;
    let servedIdx = 0;

    while (servedIdx < servedOrders.length) {
        let currentOrder = servedOrders[servedIdx];
        if (currentOrder === dineInOrder[dineInIdx]) {
            dineInIdx++;
        } else if (currentOrder === takeOutOrders[takeOutIdx]) {
            takeOutIdx++;
        } else {
            return false;
        }
        servedIdx++
    }
    if (dineInIdx != dineInOrder.length || takeOutIdx != takeOutOrders.length) {
        return false;
    }
    return true;
}

let TakeOutOrders = [1, 3, 5]
let DineInOrders = [2, 4, 6]
let ServedOrders = [1, 2, 4, 6, 5, 3]

let TakeOutOrders2 = [17, 8, 24]
let DineInOrders2 = [12, 19, 2]
let ServedOrders2 = [17, 8, 12, 19, 24, 2]

console.log(orderChecker(DineInOrders,TakeOutOrders, ServedOrders))
console.log(orderChecker(DineInOrders2, TakeOutOrders2, ServedOrders2))