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

        // copy each node
        let current = head
        while(current) {
            const copy = new Node(current.val)
            copy.next = current.next
            current.next = copy
            current = current.next.next
        }

        // attach random node
        current = head
        while(current) {
            const copy = current.next
            if(current.random) {
                copy.random = current.random.next
            }
            current = current.next.next
        }

        //separate the two
        current = head
        const copyHead = head.next

        while(current) {
            let copy = current.next
            current.next = copy.next
            copy.next = copy.next ? copy.next.next : null
            current = current.next
        }
        return copyHead
    }
}
