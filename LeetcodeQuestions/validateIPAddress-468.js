/**
 * @param {string} IP
 * @return {string}
 * 
 * Time: O(N) Where N is the length of the IP address
 * Space: O(N) Where N is the length of the IP address
 */
var validIPAddress = function(IP) {
    let count = 0;
    if (IP.indexOf(":") === -1) {
        let splitted = IP.split(".");
        for (let p of splitted) {
            count++;
            if (count > 4 || !p.length || (p.length > 1 && p.charAt(0) === "0") || p.length > 4) return "Neither";
            for (let c of p) {
                if (c < "0" || c > "9") return "Neither";
            }
            let value = parseInt(p);
            if (p < 0 || p > 255) return "Neither"
        }
        return count === 4 && IP.charAt(IP.length - 1) !== "." ? "IPv4" : "Neither"
    } else {
        let splitted = IP.split(":");
        for (let p of splitted) {
            count++;
            if (count > 8 || !p.length || p.length > 4) return "Neither";
            for (let c of p) {
                if ((c < "a" || c > "f") && (c < "A" || c > "F") && (c < "0" || c > "9")) return "Neither"
            }
        }
        return count === 8 && IP.charAt(IP.length - 1) !== ":" ? "IPv6" : "Neither";
    }
};

console.log(validIPAddress("192.168.1.1"))
console.log(validIPAddress("192.168.1.0"))
console.log(validIPAddress("192.168.01.1"))
console.log(validIPAddress("2001:0db8:85a3:0000:0000:8a2e:0370:7334"))
console.log(validIPAddress("2001:db8:85a3:0:0:8A2E:0370:7334"))
console.log(validIPAddress("2001:0db8:85a3::8A2E:037j:7334"))