/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results = [];
    nums.sort((a, b) => a - b); 

    for (let i=0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        const seenNum = new Map;
        for (let j = i+1; j < nums.length; j++) {
            const complement = 0 - nums[i] - nums[j];

            if (seenNum.has(complement)) {
                results.push([nums[i], nums[j], complement]);
                while (j + 1 < nums.length && nums[j] === nums[j + 1]) j++;
            }
            seenNum.set(nums[j], j);
            }
        }
        return results;
    };