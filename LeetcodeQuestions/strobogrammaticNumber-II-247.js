/**
 * @param {number} n
 * @return {string[]}
 * Time: O()
 * Space: O()
 */
var findStrobogrammatic = function(n) {
    function generateNums(m) {
        if (m === 0) {
            return [""];
        } else if (m === 1) {
            return ["0", "1", "8"];
        }
        
        let list = generateNums(m - 2);
        let newList = [];
        
        for (let num of list) {
            if (n !== m) {
                newList.push(`0${num}0`);
            }
            newList.push(`1${num}1`)
            newList.push(`6${num}9`)
            newList.push(`9${num}6`)
            newList.push(`8${num}8`)
        }
        return newList;
    }
    return generateNums(n);
};