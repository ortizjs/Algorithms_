class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
    if (!linkedList) return null;

    let current = linkedList;

    while (current) {
        let nextNode = current.next;
        while (nextNode !== null && current.value === nextNode.value) {
            nextNode = nextNode.next;
        }
        current.next = nextNode;
        current = nextNode;
    }
    return linkedList;
}
