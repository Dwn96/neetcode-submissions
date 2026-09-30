class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const set = new Set(nums)

        let max = 0

        for(const num of set) {
            if(set.has(num - 1)) {
                continue
            }
            let curr = num
            let currentMax = 1

            while(set.has(curr + 1)) {
                curr ++
                currentMax ++
            }
            max = Math.max(max, currentMax)
        }

        return max
    }
}
