function orderChecker(takeOutOrders, dineInOrders, servedOrders){
   let takeOutIdx = 0;
   let dineInIdx = 0;
   let currentServedIdx = 0;

   while (takeOutIdx < takeOutOrders.length || dineInIdx < dineInOrders.length) {
       let currentServedOrder = servedOrders[currentServedIdx]
       if (currentServedOrder === dineInOrders[dineInIdx]) {
           dineInIdx++;
       } else if (currentServedOrder === takeOutOrders[takeOutIdx]) {
           takeOutIdx++
       } else {
           return false;
       }
       currentServedIdx++;
   }

   if (currentServedIdx < dineInIdx || currentServedIdx < takeOutIdx) {
        return false;
   }
   return true;
}

function orderCheckerRecur(takeOutOrders, dineInOrders, servedOrders, takeOutIdx=0, dineInIdx=0, servedIdx=0) {
    if (servedIdx === servedOrders.length - 1) {
        return true
    }

    if ((takeOutIdx < takeOutOrders.length) && servedOrders[servedIdx] === takeOutOrders[takeOutIdx]) {
        takeOutIdx++;
    } else if (dineInIdx < dineInOrders.length && servedOrders[servedIdx] === dineInOrders[dineInIdx]) {
        dineInIdx++;
    } else {
        return false;
    }
    servedIdx++
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