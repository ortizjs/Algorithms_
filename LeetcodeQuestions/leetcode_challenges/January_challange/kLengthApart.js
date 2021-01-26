var checkDistanceLeft = function (nums, idx, k) {
    let counter = 0;
    let left = idx - 1;
    let passed = true
    while (left >= 0) {
        if (nums[left] === 0) {
            counter++;
        } else {
            if (counter < k) {
                passed = false
            }
            break;
        }
        left--;
    }
    return passed;
}

var checkDistanceRight = function (nums, idx, k) {
    let counter = 0;
    let right = idx + 1;
    let passed = true;
    while (right < nums.length) {
        if (nums[right] === 0) {
            counter++;
        } else {
            if (counter < k) {
                passed = false
            }
            break;
        }
        right++;
    }
    return passed;
}

var kLengthApart = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            console.log(i, checkDistanceRight(nums, i), checkDistanceLeft(nums, i))
            if (i === 0) {
                if (!checkDistanceRight(nums, i, k)) return false
            } else if (i === nums.length - 1) {
                if (!checkDistanceLeft(nums, i, k)) return false
            } else {
                if (!checkDistanceLeft(nums, i, k) || !checkDistanceRight(nums, i, k)) {
                    return false;
                }
            }
        }
    }
    return true;
};