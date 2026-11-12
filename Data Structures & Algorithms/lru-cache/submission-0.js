class Node {
    constructor(key,value) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map()

        this.head = new Node(0,0)
        this.tail = new Node(0,0)

        this.head.next = this.tail
        this.tail.prev = this.head
    }

    remove(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    insert(node) {
        const next = this.head.next

        this.head.next = node
        node.prev = this.head

        next.prev = node
        node.next = next
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)) return -1
        const node = this.cache.get(key)

        this.remove(node)
        this.insert(node)
        return node.value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)) {
            this.remove(this.cache.get(key))
        }
        const node = new Node(key,value)
        this.cache.set(key,node)
        this.insert(node)

        //Evict LRU if capacity exceeded
        if(this.cache.size > this.capacity) {
            const lru = this.tail.prev
            this.remove(lru)
            this.cache.delete(lru.key)

        }
    }
}
