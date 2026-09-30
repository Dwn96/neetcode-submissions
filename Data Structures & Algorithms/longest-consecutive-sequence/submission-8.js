class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const set = new Set(nums)
        let max = 0
        for(const num of set) {
            if(set.has(num -1)) {
                continue
            }
            let curr = num
            let currMax = 1

            while(set.has(curr +1)) {
                currMax ++
                curr ++
            }

            max = Math.max(max, currMax)
        }

        return max
    }
}
