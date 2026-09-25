class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const nuMap = {}
        for(let i=0; i< nums.length; i++) {
            const compliment = target - nums[i];
            if(compliment in nuMap) {
                return [nuMap[compliment], i]
            }
            nuMap[nums[i]] = i
        }
    }
}
