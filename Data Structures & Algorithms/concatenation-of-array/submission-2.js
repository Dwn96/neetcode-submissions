class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const output = []
        for(let i=0; i<=1; i++) {
            for(let j=0;j<nums.length; j++) {
                output.push(nums[j])
            }
        }
        return output
    }
}
