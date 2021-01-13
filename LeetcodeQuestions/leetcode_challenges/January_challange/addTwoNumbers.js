var addTwoNumbers = function (l1, l2) {
    let newHead = new ListNode();
    let newNode = newHead;
    let carry = 0;

    while (l1 || l2) {
        let valOne = l1 ? l1.val : 0;
        let valTwo = l2 ? l2.val : 0;

        let newValue = valOne + valTwo + carry;
        newNode.val = newValue % 10;
        carry = Math.floor(newValue / 10)

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
        // l1 = l1.next ? l1.next : null
        // l2 = l2.next ? l2.next : null

        if (l1 || l2 || carry) {
            newNode.next = new ListNode()
            newNode = newNode.next;
        }
    }
    if (carry !== 0) newNode.val = carry
    return newHead;

    //     let p1 = l1
    //     let p2 = l2
    //     let head = new ListNode()
    //     let ph = head
    //     let pivot = 0


    //     while(p1 || p2) {
    //         let v1 = p1 ? p1.val : 0
    //         let v2 = p2 ? p2.val : 0


    //         let sum = (v1+v2) + pivot
    //         let curr = sum % 10
    //         pivot = Math.floor(sum/10)
    //         ph.val = curr

    //         p1 = p1 ? p1.next : null
    //         p2 = p2 ? p2.next : null        

    //         if (p1 || p2 || pivot) {
    //             ph.next = new ListNode()
    //             ph = ph.next
    //         }
    //     }
    //     if (pivot) {
    //         ph.val = pivot
    //     }
    //     return head


    //     let newNode = (l1.val + l2.val) >= 10 ? new ListNode((l1.val + l2.val) % 10) : new ListNode((l1.val + l2.val))

    //     let carry = (l1.val + l2.val) >= 10 ? Math.floor((l1.val + l2.val) / 10) : 0
    //     l1 = l1.next;
    //     l2 = l2.next;

    //     let newHead = newNode
    //     while (l1 && l2) {       
    //         let newValue = l1.val + l2.val + carry
    //         if (newValue >= 10) {
    //             carry = Math.floor(newValue/10)
    //             newNode.next = new ListNode(newValue%10)
    //             newNode = newNode.next
    //         } else {
    //             newNode.next = new ListNode(newValue)
    //             newNode = newNode.next
    //             carry = 0
    //         }
    //         l1 = l1.next
    //         l2 = l2.next
    //     }
    //     while (l1 !== null) {
    //         let newVal = l1.val + carry
    //         if (newVal >= 10) {
    //             carry = Math.floor(newVal/10)
    //             newNode.next = new ListNode(newVal%10)
    //             newNode = newNode.next
    //         } else {
    //             newNode.next = new ListNode(newVal)
    //             newNode = newNode.next
    //             carry = 0
    //         }
    //          l1 = l1.next   
    //     }

    //     while (l2 !== null) {
    //         let newVal = l2.val + carry;
    //         if (newVal >= 10) {
    //             carry = Math.floor(newVal/10)
    //             newNode.next = new ListNode(newVal%10)
    //             newNode = newNode.next
    //         } else {
    //             newNode.next = new ListNode(newVal)
    //             newNode = newNode.next
    //             carry = 0
    //         }

    //         l2 = l2.next
    //     }
    //     if (carry !== 0) newNode.next = new ListNode(carry)
    //     return newHead


};