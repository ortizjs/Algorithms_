var FreqStack = function () {
    this.freqMap = {}
    this.freqStack = {}
    this.freq = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function (x) {
    let freq = this.freqMap[x]
    if (freq !== undefined) {
        this.freqMap[x] += 1;
    } else {
        this.freqMap[x] = 1;
    }
    if (this.freqMap[x] > this.freq) {
        this.freq = this.freqMap[x]
    }
    if (this.freqMap[x] in this.freqStack) {
        this.freqStack[this.freqMap[x]].push(x)
    } else {
        this.freqStack[this.freqMap[x]] = [x]
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
    let frequent = this.freqStack[this.freq].pop();
    if (!this.freqStack[this.freq].length) this.freq -= 1;
    this.freqMap[frequent] -= 1
    return frequent;
};


/**
Input:
["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],
[[],[5],[7],[5],[7],[4],[5],[],[],[],[]]
Output: [null,null,null,null,null,null,null,5,7,5,4]
Explanation:
After making six .push operations, the stack is [5,7,5,7,4,5] from bottom to top.  Then:

pop() -> returns 5, as 5 is the most frequent.
The stack becomes [5,7,5,7,4].

pop() -> returns 7, as 5 and 7 is the most frequent, but 7 is closest to the top.
The stack becomes [5,7,5,4].

pop() -> returns 5.
The stack becomes [5,7,4].

pop() -> returns 4.
The stack becomes [5,7].
*/