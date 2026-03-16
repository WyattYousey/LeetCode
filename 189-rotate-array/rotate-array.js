/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function reverseArr(nums, l, r) {
    while(l < r) {
        let tmp = nums[l];
        nums[l] = nums[r];
        nums[r] = tmp;
        l++;
        r--;
    }
}

var rotate = function(nums, k) {
    k = k % nums.length;
    let left = 0;
    let right = nums.length - 1;

    reverseArr(nums, left, right);

    left = 0;
    right = k - 1;
    reverseArr(nums, left, right);

    left = k;
    right = nums.length - 1;
    reverseArr(nums, left, right);
};
