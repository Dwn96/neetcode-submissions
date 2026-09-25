class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {}
        for(const num of nums) {
            if(!map[num]) map[num] = 1
            else map[num] = map[num] + 1            
        }
        const values = Object.keys(map).sort((a,b) => (map[b] - map[a]))
        return values.slice(0, k)
    }
}
