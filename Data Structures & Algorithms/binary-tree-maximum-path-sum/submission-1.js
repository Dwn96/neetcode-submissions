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
    maxPathSum(root) {
        let maxSum = -Infinity

        function dfs(node) {
            if(!node) return 0
            const leftPath = Math.max(0, dfs(node.left))
            const rightPath = Math.max(0, dfs(node.right))

            const pathSum = node.val + leftPath + rightPath
            maxSum = Math.max(pathSum, maxSum)
            return node.val + Math.max(leftPath,rightPath)
        }

        dfs(root)

        return maxSum

    }
}
