# @param {Integer} n
# @return {Integer}
def count_primes(n)
    primes = Array.new(n).fill(false)
    count = 0
    
    (2...primes.length).each do |i|
        if primes[i] == false
            j = i
            while j * i < primes.length
                primes[i * j] = true
                j += 1
            end
        end
    end
    
    (2...primes.length).each do |i|
        if primes[i] == false
            count += 1
        end
    end
    count
end