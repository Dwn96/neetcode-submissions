class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueElements = Array.from(new Set(nums));

        return nums.length !== uniqueElements.length
    }
}
