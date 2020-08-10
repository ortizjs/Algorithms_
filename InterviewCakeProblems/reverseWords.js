function reverseWords(message){
    let mess1 = message.join("")
    // console.log(mess1)
    let mess2 = mess1.split(" ")
    let lower = 0
    let upper = mess2.length - 1
    while (lower < upper) {
        let temp = mess2[lower]
        mess2[lower] = mess2[upper]
        mess2[upper] = temp
        lower++
        upper--
    }
    return mess2.join(" ")
    
}

console.log(reverseWords(['c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l']))
console.log(reverseWords(['t', 'h', 'e', ' ', 'e', 'a', 'g', 'l', 'e', ' ',
    'h', 'a', 's', ' ', 'l', 'a', 'n', 'd', 'e', 'd']))