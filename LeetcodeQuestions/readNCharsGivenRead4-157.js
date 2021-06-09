/**
 * Definition for read4()
 * 
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 * 
 * Time: O(N) to copy n elements
 * Space: O(1) to keep the buffer of 4 elements.
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
        let copiedChars = 0, readChars = 4;
        let buf4 = [];
        
        while (copiedChars < n && readChars === 4) {
            readChars = read4(buf4);
            for (let i = 0; i < readChars; i++) {
                if (copiedChars === n) {
                    return copiedChars;
                }
                buf.push(buf4[i]);
                copiedChars++;
            }
        }
        return copiedChars;
    };
};