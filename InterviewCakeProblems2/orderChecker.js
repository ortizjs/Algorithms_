function orderChecker(dineInOrders, takeOutOrders, servedOrders) {
    if (dineInOrders.length < 1 || takeOutOrders.length < 1) {
        throw new Error("there must be orders in both arrays in order to compare!")
    }
    let dineInOrdersIdx = 0;
    let takeOutOrdersIdx = 0;
    let servedOrdersIdx = 0;

    // dineInOrdersIdx = dineInOrdersIdx >= dineInOrders.length ? dineInOrders.length - 1 : dineInOrdersIdx;
    // takeOutOrdersIdx = takeOutOrdersIdx >= takeOutOrders.length ? takeOutOrders.length - 1 : takeOutOrdersIdx;

    while (servedOrdersIdx < servedOrders.length) {
        let currentServedOrder = servedOrders[servedOrdersIdx];

        if (dineInOrdersIdx <= dineInOrders.length - 1 && currentServedOrder === dineInOrders[dineInOrdersIdx]) {
            dineInOrdersIdx++;
        } else if (takeOutOrdersIdx <= takeOutOrders.length - 1 && currentServedOrder === takeOutOrders[takeOutOrdersIdx]) {
            takeOutOrdersIdx++;
        } else {
            return false;
        }
        servedOrdersIdx++;
    }

    if (dineInOrdersIdx != dineInOrders.length || takeOutOrdersIdx != takeOutOrders.length) {
        return false
    }
    return true;
}
let TakeOutOrders = [17, 8, 24];
let DineInOrders = [12, 19, 2];
let ServedOrders = [17, 8, 12, 19, 24, 2];

let TakeOutOrders2 =  [1, 3, 5];
let DineInOrders2 =  [2, 4, 6];
let ServedOrders2 =  [1, 2, 4, 6, 5, 3];


console.log(orderChecker(DineInOrders, TakeOutOrders, ServedOrders));
console.log(orderChecker(DineInOrders2, TakeOutOrders2, ServedOrders2));

console.log(orderChecker([1, 3, 5], [2, 4, 6], [1, 2, 4, 6, 5, 3]))
console.log(orderChecker([1, 3, 5, 8, 10], [2, 4, 6], [1, 2, 4, 6, 5, 3, 10, 8]))
console.log(orderChecker([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2]))
console.log(orderChecker([17, 8, 24], [12, 19, 2, 3], [17, 8, 12, 19, 24, 2, 3]))