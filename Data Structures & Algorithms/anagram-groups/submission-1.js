class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = {}
        for(let i=0; i<strs.length; i++) {
            const sortedStr = strs[i].split('').sort().join('');
            if(!strMap[sortedStr]) {
                strMap[sortedStr] = []
            }
            strMap[sortedStr].push(strs[i])
        }
        return Object.values(strMap)
    }
}
