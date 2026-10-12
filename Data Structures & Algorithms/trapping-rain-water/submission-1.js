class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let left = 0
        let right = height.length - 1
        let maxRight = 0
        let maxLeft = 0
        let sum = 0
        while(left < right) {

            if(height[left] < height[right]) {

                if(height[left] > maxLeft) {
                    maxLeft = height[left]
                } 
                else {
                    sum += (maxLeft - height[left])
                }

                left++

            } 
            else {
                if(height[right] > maxRight) {
                    maxRight = height[right]
                }
                else {
                    sum += (maxRight - height[right])
                }

                right --
            }

            
        }

        return sum


    }
}
