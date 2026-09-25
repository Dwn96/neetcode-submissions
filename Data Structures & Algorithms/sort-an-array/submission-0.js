class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    merge (left, right) {
        const sortedArr = []
        while(left.length && right.length) {
            if(left[0] <= right[0]) {
                sortedArr.push(left.shift())
            } else {
                sortedArr.push(right.shift())
            }
        }

        return [...sortedArr, ...left, ...right]

    }
    sortArray(nums) {
        if(nums.length < 2) return nums
        const mid = Math.floor(nums.length / 2)
        const leftArr = nums.slice(0,mid)
        const rightArr = nums.slice(mid)

        return this.merge(this.sortArray(leftArr), this.sortArray(rightArr))
    }
}
