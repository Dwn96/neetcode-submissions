class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(!strs.length) return ''
        const sorted = strs.sort((a,b) => b.length - a.length)
        const shortest = sorted.pop()
        let i = 0;
        for(;i<=shortest.length;i++) {
            const subStr = shortest.substring(0, i+1)
            if(!strs.every((str) => str.startsWith(subStr))) break;
        }
        return shortest.substring(0,i)
    }
}
