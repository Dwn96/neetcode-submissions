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
            let mid = Math.floor((left+right) / 2)

            let hrs = 0

            for(const pile of piles) {
                hrs += Math.ceil(pile / mid)
            }

            if(hrs <= h) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        return left
    }
}
