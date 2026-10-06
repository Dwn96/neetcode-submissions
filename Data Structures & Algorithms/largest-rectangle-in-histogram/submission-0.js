class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        const n = heights.length
        const left = new Array(n)
        const right = new Array(n)

        // nearest smallest element to the left
        const stack = []
        for(let i = 0; i < n; i++) {
            while(stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
                stack.pop()
            }

            if(stack.length) {
                left[i] = stack[stack.length - 1]
            } else {
                left[i] = -1
            }

            stack.push(i)
        }

        stack.length = 0

        for(let i = n - 1; i>-1; i--) {
            while(stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
                stack.pop()
            }

            if(stack.length) {
                right[i] = stack[stack.length - 1]
            } else {
                right[i] = n
            }

            stack.push(i)
        }

        let maxArea = 0
        for(let i=0; i<n; i++) {
            const width = right[i] - left[i] - 1
            const currentArea = width * heights[i]
            maxArea = Math.max(currentArea, maxArea)
        }

        return maxArea
    }
}
