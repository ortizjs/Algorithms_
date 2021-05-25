function lengthOfLongestSubstring(s) {
    let i = 0, j = 0;
    let longest = 0;
    let repeated = new Set();

    while (j < s.length) {
        let char = s[j];
        if (!repeated.has(char)) {
            repeated.add(char);
            j++;
            longest = Math.max(longest, j - i)
        } else {
            repeated.delete(s[i]);
            i++;
        }
    }
    return longest
}