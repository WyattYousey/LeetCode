/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    let mapping = new Map();

    function dfs(curr) {
        if (!curr) return null;
        if (mapping.has(curr)) return mapping.get(curr);

        let clone = new Node(curr.val);
        mapping.set(curr, clone);

        for (let neighbor of curr.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }

        return clone;
    }

    return dfs(node);
};