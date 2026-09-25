class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}
        for(const str of strs) {
            const sortedStr = str.split('').sort().join('');
            if(!map[sortedStr]) {
                map[sortedStr] = []
            }
            map[sortedStr].push(str)
        }
        return Object.values(map)
    }
}
