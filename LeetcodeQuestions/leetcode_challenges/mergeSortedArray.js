function merge(nums1, m, nums2, n) {
    n--;
    m--;

    for (let i = nums1.length - 1; i >= 0; i--) {
        if (n < 0) return;
        if (m >= 0 && nums1[m] > nums2[n]) {
            nums1[i] = nums1[m]
            m--;
        } else {
            nums1[i] = nums2[n];
            n--;
        }
    }
}