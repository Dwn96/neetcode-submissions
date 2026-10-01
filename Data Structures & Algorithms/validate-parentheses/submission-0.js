class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const stack = []
        for(const char of s) {
            if(char === '(' || char === '{' || char === '[') {
                stack.push(char)
            }
            else {
                const popped = stack.pop()
                if(popped === '(' && char !== ')') return false
                if(popped === '{' && char !== '}') return false
                if(popped === '[' && char !== ']') return false
                if(popped === undefined) return false
            }
        }

        return stack.length === 0
    }
}
