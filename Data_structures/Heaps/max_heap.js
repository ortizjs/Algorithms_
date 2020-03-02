class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    siftUp(idx) {
        if (idx === 1) return;
        let parentIdx = this.getParent(idx);
        if (this.array[idx] > this.array[parentIdx]) {
            [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
            this.siftUp(parentIdx);
        }
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftDown(idx) {
        let tempArray = this.array;
        let current = tempArray[idx];
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        let leftVal = tempArray[leftIdx];
        let rightVal = tempArray[rightIdx];
        if (leftVal === undefined) leftVal = -Infinity;
        if (rightVal === undefined) rightVal = -Infinity;
        // let tempIdx = leftVal > rightVal ? leftIdx : rightIdx;
        let tempIdx;
        if (leftVal > rightVal) {
            tempIdx = leftIdx;
        } else {
            tempIdx = rightIdx;
        }
        if (current > leftVal && current > rightVal) return;
        [tempArray[idx], tempArray[tempIdx]] = [tempArray[tempIdx], tempArray[idx]];
        this.siftDown(tempIdx);
    }

    deleteMax() {
        if (this.array.length === 1) return null;
        if (this.array.length === 2) return this.array.pop();
        let maxNode = this.array[1];
        let minNode = this.array.pop();
        this.array[1] = minNode;
        this.siftDown(1);
        return maxNode;
    }
}

module.exports = {
    MaxHeap
};