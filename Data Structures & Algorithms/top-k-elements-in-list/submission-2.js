class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {}
        const bucket = []
        const result = []
        for(const num of nums) {
            if(!map[num]) map[num] = 1
            else map[num] = map[num] + 1            
        }

        for(const [num, freq] of Object.entries(map)) {
            if(!bucket[freq]) {
                bucket[freq] = new Set()
            }
            bucket[freq].add(num)
        }

        for(let i = bucket.length - 1; i >= 0; i-- ) {
            if(bucket[i]) result.push(...bucket[i])
            if(result.length === k) break;
        }

        return result;
        
    }
}
