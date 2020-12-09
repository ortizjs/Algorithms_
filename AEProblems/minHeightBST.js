class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
    }
};

function minHeightBst(array) {
    return constructMinHeightBst(array, 0, array.length - 1);
}

function constructMinHeightBst(array, minIdx, maxIdx) {
    if (minIdx > maxIdx) {
        return null;
    }

    let midIdx = Math.floor((minIdx + maxIdx) / 2);

    let bst = new BST(array[midIdx]);
    bst.left = constructMinHeightBst(array, minIdx, midIdx - 1);
    bst.right = constructMinHeightBst(array, midIdx + 1, maxIdx);
    return bst;
}

