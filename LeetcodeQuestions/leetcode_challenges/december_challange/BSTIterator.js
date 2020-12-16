// class BSTIterator {
//     constructor(root) {
//         this.index = -1;
//         this.sortedNodes = [];
//         this.inOrder(root)
//     }

//     next() {
//         this.index += 1
//         if (this.index < this.sortedNodes.length) {
//             return this.sortedNodes[this.index]
//         }
//     }

//     hasNext() {
//         return this.index < this.sortedNodes.length - 1;
//     }

//     inOrder(root){
//         if (!root) return;

//         this.inOrder(root.left)
//         this.orderedNodes.push(root.val)
//         this.inOrder(root.right)
//     }
// }

var BSTIterator = function(root) {
    this.index = -1;
    this.orderedNodes = [];
    this.inOrder(root)
};

BSTIterator.prototype.next = function() {
    this.index++;
    if (this.index < this.orderedNodes.length) {
        return this.orderedNodes[this.index]
    }
};

BSTIterator.prototype.hasNext = function() {
    return this.index < this.orderedNodes.length - 1;
}

BSTIterator.prototype.inOrder = function(root) {
    if (!root) return;
    this.inOrder(root.left);
    this.orderedNodes.push(root.val);
    this.inOrder(root.right);
}
