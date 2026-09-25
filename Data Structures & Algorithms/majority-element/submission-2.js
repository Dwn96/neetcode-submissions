class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = {}
        let maxFreq = 0
        let majority = 0
        for(const num of nums) {
            if(!map[num]) map[num] = 1
            else map[num]++
            if(map[num] > maxFreq) {
                maxFreq = map[num]
                majority = num
            }
        }
        return majority
    }
}
