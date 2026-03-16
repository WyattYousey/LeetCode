/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let q = new Queue(), ans = []
    q.enqueue(root)
    while (q.front()) {
        let qlen = q.size(), row = []
        for (let i = 0; i < qlen; i++) {
            let curr = q.dequeue()
            row.push(curr.val)
            if (curr.left) q.enqueue(curr.left)
            if (curr.right) q.enqueue(curr.right)
        }
        ans.push(row)            
    }
    return ans;
};