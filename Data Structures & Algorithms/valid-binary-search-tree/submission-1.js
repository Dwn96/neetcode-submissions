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
     * @return {boolean}
     */    
    isValidBST(root) {
        if(!root) return true
        const queue = [
            {
                min: -Infinity,
                max: Infinity,
                node: root
            }
        ]
        let head = 0

        while(queue.length > head) {
            const { node, min, max } = queue[head++]
            if(node.val <= min || node.val >= max) {
                return false
            }

            if(node.left) {
                queue.push({
                    node: node.left,
                    min,
                    max: node.val
                })
            }
            if(node.right) {
                queue.push({
                    node: node.right,
                    max,
                    min: node.val
                })
            }
        }
        return true
    }
}
