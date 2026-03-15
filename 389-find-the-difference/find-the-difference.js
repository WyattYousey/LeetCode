/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const map = new Map();
    for(let l of s){
       map[l] = (map[l] || 0) + 1;
    }
    for(let l of t) {  
        if (!map[l] || map[l] === 0) {
            return l;
        } else {
            map[l]--;
        }
    }
}