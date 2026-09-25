class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = {}
        for(let i=0; i<strs.length; i++) {
            const sortedString = strs[i].split('').sort().join('')
            if(strMap[sortedString]) {
                strMap[sortedString].push(strs[i])
            } else {
                strMap[sortedString] = [strs[i]]
            }
        }
        return Object.values(strMap)
    }
}
