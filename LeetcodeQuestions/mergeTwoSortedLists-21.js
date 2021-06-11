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
var mergeTwoLists = function(l1, l2) {
    let dummyNode = new ListNode(-1);
    let newHead = dummyNode;
    
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            dummyNode.next = l1;
            l1 = l1.next;
        } else {
            dummyNode.next = l2;
            l2 = l2.next;
        }
        dummyNode = dummyNode.next;
    }
    
    if (l1) {
        dummyNode.next = l1
    } else if (l2) {
        dummyNode.next = l2;
    }
    return newHead.next;
};

