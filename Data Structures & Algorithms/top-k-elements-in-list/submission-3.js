class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const freqMap = {}
        const bucket = []
        const result = []

        for(const num of nums) {
            if(freqMap[num] === undefined) freqMap[num] = 0
            freqMap[num] += 1
        }

        for(const [k,v] of Object.entries(freqMap)) {
            if(bucket[v] === undefined) bucket[v] = new Set()
            bucket[v].add(k)
        } 

        for(let i = bucket.length -1; i > -1; i--) {
            if(bucket[i]) result.push(...bucket[i])
            if (result.length === k) break
        }
        return result

        
    }
}
