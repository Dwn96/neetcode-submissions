class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let head = 0
        let dq = []
        const res = []

        for(let i = 0; i<nums.length; i++) {

            if(dq.length > head && dq[head] <= i-k) {
                head++
            }

            while(dq.length > head && nums[dq[dq.length-1]] < nums[i]) {
                dq.pop()
            }

            dq.push(i)

            if(i >= k - 1) {
                res.push(nums[dq[head]])
            }
        }
        return res
    }
}
