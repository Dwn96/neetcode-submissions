class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const shortest = strs.sort((a,b) => b.length - a.length).pop()

        let i = 0;
        for(; i<shortest.length; i++) {
            const prefix = shortest.substring(0, i + 1)
            if(!strs.every((str) => str.startsWith(prefix))) break
        }
        return shortest.substring(0, i)
 
    }
}
