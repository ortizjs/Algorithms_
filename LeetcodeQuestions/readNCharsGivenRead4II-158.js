/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 * Time: O(n) n is the number of elements to copy
 * Space: O(1) global buff is set to 4 all the time as the max.
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    
    let globalBuf = []
    
    return function(buf, n) {
        let copiedChars = 0, readChars = 4;
        
        while (n > 0) {
            if (globalBuf.length === 0) {
                if (read4(globalBuf) === 0) {
                    return copiedChars;
                }
            }
            
            buf.push(globalBuf.shift());
            copiedChars++;
            n--;
        }
    };
};