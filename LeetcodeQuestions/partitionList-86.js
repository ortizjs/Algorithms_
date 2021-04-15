/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    
    if (!head) return null;
    
    let beforeHead = new ListNode(0);
    let beforePointer = beforeHead;
    let afterHead = new ListNode(0);
    let afterPointer = afterHead;
    
    while (head) {
        if (head.val < x) {
            beforePointer.next = head;
            beforePointer = beforePointer.next;
        } else {
            afterPointer.next = head;
            afterPointer = afterPointer.next;
        }
        head = head.next;
    }
    
    afterPointer.next = null;
    beforePointer.next = afterHead.next;
    return beforeHead.next;
};