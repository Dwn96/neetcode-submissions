class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}
        for(const str of strs) {
            const array = Array(26).fill(0);
            for(const char of str) {
                const ascii = char.charCodeAt(0)
                array[ascii - 97]+=1
            }
            const code = array.join('-')
            if(!map[code]) {
                map[code] = []
            }
            map[code].push(str)
        }
        return Object.values(map)
    }
}
