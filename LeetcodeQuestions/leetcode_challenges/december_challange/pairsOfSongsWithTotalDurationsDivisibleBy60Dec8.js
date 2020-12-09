function numPairsDivisibleBy60(time){
    if (time.length == 2 && time[0] + time[1] % 60 == 0) {
        return 1
    }

    let mod_freqs = {0:0}
    let songs = 0

    time.forEach(song => {
        let mod = song % 60;
        
        if (mod  === 0) {
            songs += mod_freqs[0]
        } else {
            if (mod_freqs.hasOwnProperty(60 - mod)) {
                songs += mod_freqs[60 - mod];
            } else {
                mod_freqs[60 - mod] = 0
            }
        }
        if (mod_freqs.hasOwnProperty(mod)) {
            mod_freqs[mod] += 1
        } else {
            mod_freqs[mod] = 1
        }
    })
    return songs
}

console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40]))
console.log(numPairsDivisibleBy60([60,60,60]))