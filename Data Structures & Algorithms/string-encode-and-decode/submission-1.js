class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = ''
        for(const str of strs) {
            encodedStr += `${str.length}#${str}`
        }
        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let j = 0
        const decodedStrs = []

        for(let i = 0; i<str.length;) {
            j = i
            while(str[j] !== '#') {
                j++
            }
            const len = Number(str.substring(i,j))
            const word = str.substring(j+1, j+1+len)
            decodedStrs.push(word)
            i = j + 1 + len
        }

        return decodedStrs
    }
}
