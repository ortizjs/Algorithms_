var removeNthFromEnd = function (head, n) {

    let length = 0
    let dummyNode = new ListNode(0)
    dummyNode.next = head;
    current = head;

    while (current) {
        length++
        current = current.next
    }

    length -= n
    current = dummyNode
    while (length > 0) {
        length--
        current = current.next
    }
    current.next = current.next.next
    return dummyNode.next
};
