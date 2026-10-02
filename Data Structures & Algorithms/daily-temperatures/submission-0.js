class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temps) {

        const stack = []
        const res = []

        /**
         * Essentially what we're doing is
         * checking if the item at the top of
         * the stack t is warmer than the current c.
         * If it is, we do c - t to calc the difference in days
         * 
         * If it is colder, we pop it and pop again
         * until we find whatevers warmer
         * 
         * 
         */


        for(let i = temps.length - 1; i>=0; i-- ) {

            while(stack.length > 0 &&  temps[i] >= temps[stack[stack.length - 1]] ) {
                stack.pop()
            }
            
           if(stack.length > 0) {
             res[i] = stack[stack.length - 1] - i
           }
           else {
            res [i] = 0
           }
            
            stack.push(i)

        }

        return res


    }
}
