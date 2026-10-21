class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0
        let charSet = new Set()
        let maxLen = 0
        for(let r = 0; r<s.length; r++) {
            while(charSet.has(s[r])) {
                charSet.delete(s[l])
                l++
            }
            charSet.add(s[r])
            const currentLen = r - l + 1
            maxLen = Math.max(maxLen, currentLen)
        }

        return maxLen
    }
}
