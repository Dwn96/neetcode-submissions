class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {


        if(nums1.length > nums2.length) {
            [nums1,nums2] = [nums2, nums1]
        }

        const length1 = nums1.length
        const length2 = nums2.length

        const leftHalfSize = Math.floor((length1 +length2 +1)/2)

        let low = 0
        let high = length1

        while(low <= high) {
            const cut1 = Math.floor((low+high)/2)
            const cut2 = leftHalfSize - cut1

            // elements to the left and right of each cut
            const left1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1]
            const right1 = cut1 === length1 ? Infinity : nums1[cut1]

            const left2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1]
            const right2 = cut2 === length2 ? Infinity : nums2[cut2]

            if(left1 <= right2 && left2 <= right1) {

                // odd total
                if((length1+length2)%2 ===1) {
                    return Math.max(left1,left2)
                }

                //even total
                const largestLeft = Math.max(left1,left2)
                const smallestRight = Math.min(right1, right2)

                return (largestLeft+smallestRight)/2

            }

            // took too many elements
            if(left1 > right2) {    
                high = cut1 - 1
            } 
            else {
                //took too few elements
                low = cut1 + 1
            }

        }



    }
}
