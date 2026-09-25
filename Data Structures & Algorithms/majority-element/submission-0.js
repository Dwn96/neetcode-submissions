class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = {}
        const bucket = []
        for(const num of nums) {
            if(!map[num]) map[num] = 1
            else map[num]++
        }
        for(const[val, freq] of Object.entries(map)) {
            if(!bucket[freq]) bucket[freq] = []
            bucket[freq].push(val)
        }
        return bucket.pop()[0]
    }
}
