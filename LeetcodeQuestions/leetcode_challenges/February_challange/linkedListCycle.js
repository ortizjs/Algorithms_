function hasCycle(head) {
    let fast = head;
    let slow = fast;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) return true;
    }
    return false;
}