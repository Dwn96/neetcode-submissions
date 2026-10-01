class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length === 0) {
            this.stack.push(val)
            this.minStack.push(val)
        } else {
            this.stack.push(val)
            this.minStack.push(Math.min(val, this.getMin()))
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.stack.length === 0) return null
        this.minStack.pop()
        return this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length -1]
    }
}
