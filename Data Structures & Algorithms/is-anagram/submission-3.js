class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false;

        const sCounts = {}
        const tCounts = {}

        for(const char of s) {
            if(!sCounts[char]) sCounts[char] = 0
            sCounts[char] +=1
        }

        for(const char of t) {
            if(!tCounts[char]) tCounts[char] = 0
            tCounts[char] +=1
        }
        
        for(const [k, v] of Object.entries(sCounts)) {
            if (tCounts[k] !==  v) return false
        }
        return true
    }
}
