/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let l = 0, r = height.length - 1;

    while (l < r) {
        const width = r - l;
        let currArea = 0;

        if (height[l] < height[r]) {
            currArea = width * height[l];
            l++;
        } else {
            currArea = width * height[r];
            r--;
        }
        maxArea = Math.max(maxArea, currArea);
    }
    return maxArea;
};