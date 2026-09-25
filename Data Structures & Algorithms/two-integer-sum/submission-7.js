class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {}       

        for(let i = 0; i < nums.length; i++) {
            seen[nums[i]] = i
        }

        for(let i = 0; i < nums.length; i++) {
            const compliment = target - nums[i]

            if(seen[compliment] !== undefined &&  i !== seen[compliment]) {
                return [i, seen[compliment]]
            }
        }
    }
}
