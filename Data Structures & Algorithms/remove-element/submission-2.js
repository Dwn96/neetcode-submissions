class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let index = 0;
        // [2,3,4,0,4,0] val = 0
        for(let i = 0; i<nums.length; i++) {
            if(nums[i] !== val) {
                const temp = nums[index]                
                nums[index] = nums[i]
                nums[i] = temp
                index++
            }
        } 
        return index

    }
}
