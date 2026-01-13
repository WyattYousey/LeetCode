/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seenNums = new Map;

    for (let i=0; i <= nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        if (seenNums.has(complement)) {
            return [seenNums.get(complement), i]
        }
        
        seenNums.set(currentNum, i);
    }
    return []
};