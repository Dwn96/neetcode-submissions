class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = {}
        for(const str of strs) {
            const sortedStr = str.split('').sort().join('');
            if(sortedStr in strMap) {
                strMap[sortedStr].push(str)
            } else {
                strMap[sortedStr] = [str]
            }
        }
        return Object.values(strMap)
    }
}
