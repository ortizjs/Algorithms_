/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 
 * TIme: O(nlogn) where n is the length of the input array as it takes n log n to sort the arr.
 * Space: O(n) as we allocate n space for the new sorted arr if we do not do it in place.
 */
var merge = function(intervals) {
    let sorted = intervals.sort((a,b) => a[0] - b[0]);
    
    let merged = [sorted[0]];
    
    for (let i = 1; i < sorted.length; i++) {
        let lastMerged = merged[merged.length - 1];
        let lastMergedEnd = lastMerged[1];
        let currentStart = sorted[i][0]
        let currentEnd = sorted[i][1];
        
        if (lastMergedEnd >= currentStart) {
            lastMerged[1] = Math.max(lastMergedEnd, currentEnd);
        } else {
            merged.push(sorted[i])
        }
    }
    
    return merged;
};