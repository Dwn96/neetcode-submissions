/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head)
        let groupPrev = dummy
        while(true) {
            let kth = groupPrev
            for(let i = 0; i < k && kth; i++) {
                kth = kth.next
            }
            if(!kth) break

            const groupNext = kth.next

            //reverse current group
            let prev = groupNext
            let curr = groupPrev.next

            while(curr !== groupNext) {
                const next = curr.next
                curr.next = prev
                prev = curr
                curr = next
            }

            //reconnect reversed group
            const oldGroupStart = groupPrev.next
            groupPrev.next = kth
            groupPrev = oldGroupStart
        }
        return dummy.next
    }
}
