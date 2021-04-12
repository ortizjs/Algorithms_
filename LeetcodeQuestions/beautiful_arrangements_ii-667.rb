# @param {Integer} n
# @param {Integer} k
# @return {Integer[]}
def construct_array(n, k)
    res = Array(n)
    idx = 0
    min = 1
    max = n
    is_max = false
    res[idx] = min
    idx += 1
    min += 1
    
    while k > 1
        res[idx] = max
        idx += 1
        max -= 1
        is_max = true
        k -= 1
        
        if k > 1
            res[idx] = min
            idx += 1
            min += 1
            k -= 1
            is_max = false
        end
    end
    
    while idx < n
        if is_max
            res[idx] = max
            idx += 1
            max -= 1
        else
            res[idx] = min
            idx += 1
            min += 1
        end
    end
    res
end