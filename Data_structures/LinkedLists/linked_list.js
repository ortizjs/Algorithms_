// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        if (this.legth === 0) {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return current;

    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            let newNext = this.head;
            newNode.next = newNext;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        this.head = this.head.next;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let currentNode = this.head.next;
        while (currentNode) {
            if (currentNode.value === target) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index > this.length) {
            return null;
        }
        let counter = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (this.counter === index) {
                return currentNode;
            }
            counter++;
            curentNode = currentNode.next;
        }
    }

    // TODO: Implement the set method here
    set(index, val) {
        let node = this.get(index);
        if (node === null) return false;
        node.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        // if (index < 0 || index >= this.length) return false;
        // let node = new Node(val);
        // let prevNode = index === 0 ? this.get(index) : this.get(index - 1);
        // let nextNode = this.get(index);
        // prevNode.next = node;
        // node.next = nextNode;
        // this.length++;
        // return true;
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.addToHead(val);
        if (index === this.length) return this.addToTail(val);
        let node = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = this.get(index);
        node.next = nextNode;
        prevNode.next = node;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.removeHead();
        if (index === this.length - 1) return this.removeTail();
        let removedNode = this.get(index);
        let prevNode = this.get(index - 1);
        prevNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
