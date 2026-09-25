class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const map = {}
        for(let i=0; i<s.length; i++) {
            if(map[s.charAt(i)]) map[s.charAt(i)] = map[s.charAt(i)] +=1
            else map[s.charAt(i)] = 1
        }
        for(let j=0; j<t.length; j++) {
            if(map[t.charAt(j)]) map[t.charAt(j)] = map[t.charAt(j)] - 1
            else return false
        }
        return Object.values(map).every((val) => val === 0)
    }
}
