/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    function helper(nums, fn, i, sum) {
        if (i === nums.length) {
            return sum;
        }
        let transformed = fn(sum, nums[i]);

        return helper(nums, fn, i + 1, transformed);
    }
    return helper(nums, fn, 0, init);
};