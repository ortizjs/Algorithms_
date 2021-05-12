function restoreIpAddresses(s) {
    let res = [];
    let n = s.length;

    for (let i = 1; i < n && i < 4; i++) {
        let first = s.slice(0,i);
        if (!isValid(first)) continue;

        for (let j = 1; i + j < n && j < 4; j++) {
            let second = s.slice(i, i + j);
            if (!isValid(second)) continue;

            for (let k = 1; i + j + k < n && k < 4; k++) {
                let third = s.slice(i + j, i + j + k);
                let fourth = s.slice(i + j + k);
                if (!isValid(third) || !isValid(fourth)) continue;
                
                res.push(first + "." + second + "." + third + "." + fourth);
            }
        }
    }
    return res;
}

function isValid(s) {
    if (s.length > 3) return false;
    if (s[0] === "0" && s.length > 1) return false;
    let digit = parseInt(s);
    return 0 <= digit && digit <= 255;
}


console.log(restoreIpAddresses("25525511135"))
console.log(restoreIpAddresses("0000"))
console.log(restoreIpAddresses("1111"))
console.log(restoreIpAddresses("010010"))
console.log(restoreIpAddresses("101023"))