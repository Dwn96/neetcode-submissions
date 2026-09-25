class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const charMap = {}

        for(const char of s) {
            if(!charMap[char]) {
                charMap[char] = 1
            } else {
                charMap[char] = charMap[char] + 1
            }
        }

        for(const char of t ) {
            if(charMap[char]) {
                charMap[char] = charMap[char] - 1
            }
        }

        return Object.values(charMap).every((char) => char === 0)
    }
}
