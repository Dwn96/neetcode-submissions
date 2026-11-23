/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        const queue = [[root, -Infinity]]
        let head = 0
        let count = 0
        while(queue.length > head) {
            const [node, maxSoFar] = queue[head++]
            if(node.val >= maxSoFar) {
                count++
            }
            const newMax = Math.max(node.val, maxSoFar)
            if(node.left) {
                queue.push([node.left, newMax])
            }
            if(node.right) {
                queue.push([node.right, newMax])
            }
        }
        return count
    }
}
