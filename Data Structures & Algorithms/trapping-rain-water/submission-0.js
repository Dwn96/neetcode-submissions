class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        const left = []
        const right = []

        let maxLeft = 0
        let maxRight  = 0

        for(let i =0; i<height.length; i++) {
            maxLeft = Math.max(maxLeft, height[i])
            left[i] = maxLeft
        }

        for(let i = height.length - 1; i> -1; i--) {
            maxRight = Math.max(maxRight, height[i])
            right[i] = maxRight
        }

        let sum = 0

        for(let i =0; i<height.length - 1; i++) {

            let cap = Math.min(left[i], right[i]) - height[i]
            if(cap < 0) cap = 0

            sum += cap

        }

        return sum



    }
}
