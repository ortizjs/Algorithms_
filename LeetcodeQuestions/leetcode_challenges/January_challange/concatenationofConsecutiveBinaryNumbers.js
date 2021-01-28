var concatenatedBinary = function (n) {
    let sum = 0
    let mod = 1000000007;
    let pow = 1;


    for (let i = n; i >= 1; i--) {
        let bin = i;

        while (bin > 0) {
            if ((bin & 1) === 1) {
                sum = (sum + pow) % mod;
            }
            bin = bin >> 1;
            pow = (pow * 2) % mod
        }
    }
    return parseInt(sum)
}

//https://www.youtube.com/watch?v=du_Gg4UIJeI&ab_channel=FriendlyNeighborhoodCoder
