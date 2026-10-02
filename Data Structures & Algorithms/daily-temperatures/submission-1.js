class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temps) {
        const stack = []
        const ans = []

        for(let i = temps.length -1 ; i > -1; i -- ) {
            const curr = temps[i]
            while(stack.length > 0 
            && curr >= temps[stack[stack.length - 1]]
            ) {
                stack.pop()
            }

            if(stack.length > 0) {
                ans[i] = stack[stack.length - 1] - i
            } else {
                ans[i] = 0
            }

            stack.push(i)

        }

        return ans
    }
}
