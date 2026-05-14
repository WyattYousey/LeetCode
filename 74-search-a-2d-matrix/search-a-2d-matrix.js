/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let targetArr;

    for (arr of matrix) {
        const min = arr[0];
        const max = arr[arr.length - 1];

        if (target >= min && target <= max) {
            targetArr = arr;
            break;
        } else {
            targetArr = []
        }
    }

    if (targetArr.length === 0) return false;
    
    let left = 0;
    let right = targetArr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (targetArr[mid] === target) {
            return true;
        }

        if (targetArr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};