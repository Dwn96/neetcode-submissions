class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueElements = Array.from(new Set(nums));

        if(uniqueElements.length !== nums.length) return true
        return false;
    }
}
