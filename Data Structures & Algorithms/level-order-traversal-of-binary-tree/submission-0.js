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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []
        let head = 0
        const queue = [root]
        const result = []

        while(queue.length > head) {
            const levelSize = queue.length - head
            const currentLevel = []
            for(let i = 0; i < levelSize; i++) {
                const node = queue[head++]
                currentLevel.push(node.val)
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
            result.push(currentLevel)
        }
        return result
    }
}
