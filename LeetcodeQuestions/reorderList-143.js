/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 * 
 * 
 * Time: O(N) to find the middle of the list, we are required to traverse the list which takes O(n) time.
 *       to reverse the second half of the list requires o(n/2)
 *       to merge the two lists also requires O(n/2) ... so total: O(n + n/2 + n/2) = O(n + n) = O(2n) -> O(n)
 * Space: O(1) since we do not allocate any extra data structures, only pointers.
 */
var reorderList = function(head) {
    if (!head) return head;
    
    let slow = head, fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let current = slow, prev = null, nextNode;
    
    while (current) {
        nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    
    let first = head, second = prev;
    
    while (second.next) {
        let temp = first.next;
        first.next = second;
        first = temp;
        
        temp = second.next;
        second.next = first;
        second = temp;
    }
}