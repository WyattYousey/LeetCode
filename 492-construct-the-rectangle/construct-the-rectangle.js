/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let w = Math.floor(Math.sqrt(area));
    while(true) {
        if (Number.isInteger(area / w)) {
            return [area / w, w]
        } else {
            w--;
        }
    }
};