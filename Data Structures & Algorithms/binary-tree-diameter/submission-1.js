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
    diameterOfBinaryTree(root) {
        let diameter = 0

        const dfs = (node) => {
            if(!node) return 0
            const rightPath = dfs(node.right)
            const leftPath = dfs(node.left)
            diameter = Math.max(diameter,leftPath+rightPath)
            return 1 + Math.max(leftPath,rightPath)
        }

        dfs(root)
        return diameter
    }
}
