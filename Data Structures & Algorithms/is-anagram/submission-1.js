class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const map = {}

        for(let i =0; i< s.length; i++) {
            const curr = s.charAt(i)
            if(map[curr]) map[curr] = map[curr] + 1
            else map[curr] = 1
        }

        for(let j = 0; j< t.length; j++) {
            const curr = t.charAt(j)
            if(map[curr]) map[curr] = map[curr] - 1
            else return false
        }
        return !Object.values(map).some((el) => el !== 0)
    }
}
