/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let l = 0, r = height.length - 1;

    while (l < r) {
        const width = r - l;
        maxArea = Math.max(maxArea, width * Math.min(height[l], height[r]));

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return maxArea;
};