class binaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value) {
        this.left = new binaryTreeNode(value);
        return this.left;
    }

    insertRight(value) {
        this.right = new binaryTreeNode(value);
        return this.right;
    }
}