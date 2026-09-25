class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {}
        for(const num of nums) {
            if(!map[num]) map[num] = 1
            else map[num]++
            
            if(map[num] > 1) return true            
        }
        return false
    }
}
