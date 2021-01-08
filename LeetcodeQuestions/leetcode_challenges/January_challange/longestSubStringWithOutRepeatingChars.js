function longestStrWORepeatingChars(s) {
    let i = 0
    let j = 0
    let repeated = new Set();
    let max = 0

    while (j < s.length) {
        if (!repeated.has(s[j])) {
            repeated.add(s[j])
            j++
            max = Math.max(max, repeated.size)
        } else {
            repeated.delete(s[i])
            i++
        }
    }
    return max
}