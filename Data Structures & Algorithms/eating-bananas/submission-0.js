class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let left = 1
        let right = Math.max(...piles)

        while(left < right) {

            let mid = Math.floor((left+right)/2)

            let hoursSpent = 0

            for(let i = 0; i<piles.length; i++) {
                hoursSpent += Math.ceil(piles[i]/ mid)
            }

            if(hoursSpent <= h) {
                right = mid
            } else {
                left = mid + 1
            }

        }
        return left
    }
}
