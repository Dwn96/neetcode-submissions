class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

            const set = new Set(nums)

    let max = 0

    for(const num of nums) {

        if(set.has(num - 1)) {
            continue
        }

        let curr = num

        let currentMax = 1

        while(set.has(curr + 1)) {
            currentMax ++
            curr ++
        }

        max = Math.max(currentMax, max)

    }

    return max
    }
}
