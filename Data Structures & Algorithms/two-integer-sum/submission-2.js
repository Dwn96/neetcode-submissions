class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /**
         * 1. Create a map where k=val , v= index
         * 2. Iterate over name while calc T - val & pop map
         * 3. Try finding the compliment in the map
         *
         */

        const nuMap = {}
        for(let i=0;i<nums.length; i++) {
            const compliment = target - nums[i]
            if(compliment in nuMap) {
                return [i, nuMap[compliment]]
            }
            else nuMap[nums[i]] = i
        }
    }
}
