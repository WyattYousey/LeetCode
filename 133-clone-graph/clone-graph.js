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
    if (!node) return null;

    const map = new Map();
    const stack = [node];

    map.set(node, new Node(node.val));

    while (stack.length) {
        const curr = stack.pop();

        for (const neighbor of curr.neighbors) {
            if (!map.has(neighbor)) {
                map.set(neighbor, new Node(neighbor.val));
                stack.push(neighbor);
            }

            map.get(curr).neighbors.push(map.get(neighbor));
        }
    }

    return map.get(node);
};