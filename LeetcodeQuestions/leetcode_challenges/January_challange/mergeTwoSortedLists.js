/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) {
        return null
    }
    if (!l1) {
        return l2
    } else if (!l2) {
        return l1
    }

    let newNode;
    let nodeOne = l1;
    let nodeTwo = l2;

    if (nodeOne.val <= nodeTwo.val) {
        newNode = nodeOne
        nodeOne = nodeOne.next
    } else {
        newNode = nodeTwo
        nodeTwo = nodeTwo.next
    }
    let newHead = newNode;

    while (nodeOne && nodeTwo) {
        if (nodeOne.val <= nodeTwo.val) {
            newNode.next = nodeOne;
            nodeOne = nodeOne.next;
        } else {
            newNode.next = nodeTwo;
            nodeTwo = nodeTwo.next
        }
        newNode = newNode.next
    }

    while (nodeOne) {
        newNode.next = nodeOne
        newNode = newNode.next
        nodeOne = nodeOne.next
    }

    while (nodeTwo) {
        newNode.next = nodeTwo
        newNode = newNode.next
        nodeTwo = nodeTwo.next
    }
    return newHead;
};