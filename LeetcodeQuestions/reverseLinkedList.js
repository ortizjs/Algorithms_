function reverse(head) {
    let current = head;
    let next;
    let prev = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
    return head;
}