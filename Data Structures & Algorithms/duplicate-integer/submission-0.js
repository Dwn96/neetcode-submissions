class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    
    hasDuplicate(nums) {
        const map = {}
        for(let i=0;i<nums.length;i++) {
            let curr = nums[i]
            if(map[curr]) return true
            else {
                map[curr] = true
            }      
        }
        return false
    }
}
