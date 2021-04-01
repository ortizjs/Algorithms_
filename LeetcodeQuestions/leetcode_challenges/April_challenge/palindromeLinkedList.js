//Other solution:
// var isPalindrome = function (head) {
//     let slow = head;
//     let fast = head;

//     while (fast !== null && fast.next !== null) {
//         fast = fast.next.next;
//         slow = slow.next;
//     }

//     slow = reverse(slow);
//     fast = head;
//     while (slow !== null) {
//         if (slow.val !== fast.val) {
//             return false;
//         }

//         slow = slow.next;
//         fast = fast.next;
//     }
//     return true;
// };


// function reverse(head) {
//     let current = head;
//     let prev = null;

//     while (current !== null) {
//         let next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }
//     return prev;
// }


var isPalindrome = function (head) {
    let currentNode = head;
    let nodesArr = [];

    while (currentNode) {
        nodesArr.push(currentNode.val);
        currentNode = currentNode.next;
    }
    let n = nodesArr.length;
    for (let i = 0; i < nodesArr.length; i++) {
        if (nodesArr[n - 1 - i] !== nodesArr[i]) return false;
    }
    return true;
};


