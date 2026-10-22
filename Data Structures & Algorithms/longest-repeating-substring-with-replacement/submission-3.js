class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let start = 0
        let map = {}
        let maxLength = 0
        let maxCount = 0

        for(let end = 0; end<s.length; end++) {
            const char = s[end]
            if(!map[char])map[char] = 0
            map[char]++
            maxCount = Math.max(maxCount, map[char])

            const windowLength = end - start + 1
            if((windowLength - maxCount) > k) {
                map[s[start]]--
                start++                
            }
            maxLength = Math.max(maxLength, end - start + 1)
        }

        return maxLength
    }
}
