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
    merge2Lists(l1,l2) {
        const dummy = new ListNode(0)
        let current = dummy
        while(l1 && l2) {
            if(l1.val <= l2.val) {
                current.next = l1
                l1 = l1.next
            } else {
                current.next = l2
                l2 = l2.next
            }
            current = current.next
        }
        current.next = l1 || l2
        return dummy.next
    }
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length === 0) return null
        let interval = 1

        while(interval < lists.length) {
            for(let i = 0; i+interval < lists.length; i += interval *2) {
                lists[i] = this.merge2Lists(lists[i], lists[i+interval])
            }
            interval *= 2
        }
        return lists[0]
    }
}
