class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        const operands =  {
            '+' : (num1,num2) => (num1 + num2),
            '*' : (num1,num2) => (num1 * num2),
            '/': (num1,num2) => Math.trunc((num1 / num2)),
            '-': (num1,num2) => (num1 - num2)

        }
        for(const token of tokens) {
            if(!operands[token]) {
                stack.push(Number(token))
            } 
            else {                
                const operator2 = stack.pop()
                const operator1 = stack.pop()
                const res = Number(operands[token](operator1, operator2))

                stack.push((res))
            }
        }

        return stack[0]
    }
}
