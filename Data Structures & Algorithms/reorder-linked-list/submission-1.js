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
     * @return {void}
     */
    reorderList(head) {
        if(!head || !head.next) return

        //find the middle
        let slow = head
        let fast = head

        while(fast.next && fast.next.next) {
            slow = slow.next
            fast = fast.next.next
        }

        //split the list
        let second = slow.next
        slow.next = null

        //reverse the 2nd half
        let prev = null 
        let current = second

        while(current) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }

        // merge the 2 halves
        let first= head
        second = prev

        while(second) {
            let firstNext = first.next
            let secondNext = second.next

            first.next = second
            second.next = firstNext

            first = firstNext
            second = secondNext
        }

    }
}
