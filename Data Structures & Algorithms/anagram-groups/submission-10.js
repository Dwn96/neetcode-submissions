class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

  
    groupAnagrams(strs) {
        const seen = new Map()

        for(const str of strs) {
            const key = str.split('').sort().join()

            if(seen.has(key)) {
                seen.get(key).push(str)
            }
            else {
                seen.set(key, [str])
            }
        }

        return [...seen.values()]
    }
}
