class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}
        for(const str of strs) {
            const arr = Array(26).fill(0)
            for(const char of str) {
                arr[char.charCodeAt(0) - 'a'.charCodeAt(0)] +=1
            }
            const key = arr.join('-')
            if(!map[key]) map[key] = []
            map[key].push(str)
        }
        return Object.values(map)
    }
}
