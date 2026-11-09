// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return null

        // create copies and interweave such that A -> A' -> B -> B' -> C -> C'

        let current = head
        while(current) {
            const copy = new Node(current.val)
            copy.next = current.next
            current.next = copy
            current = copy.next
        }

        //assign random pointers
        current = head
        while(current) {
            if(current.random) {
                current.next.random = current.random.next
            }
            current = current.next.next
        }

        // separate the 2 lists
        current = head
        const copyHead = head.next

        while(current) {
            const copy = current.next
            current.next = copy.next
            copy.next = copy.next ? copy.next.next : null
            current = current.next
        }
        return copyHead
    }
}
