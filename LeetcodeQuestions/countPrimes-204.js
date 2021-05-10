function countPrimes(n) {
    let count = 0;
    let primes = new Array(n).fill(false);
    for (let i = 2; i * i < primes.length; i++) {
        if (!primes[i]) {
            for (let j = i; j * i < primes.length; j++) {
                primes[i * j] = true;
            }
        }
    }

    for (let i = 2; i < primes.length; i++) {
        if (!primes[i]) count++;
    }
    return count;
}

console.log(countPrimes(10))
console.log(countPrimes(100))