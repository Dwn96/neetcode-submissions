class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''

        for(const str of strs) {
            res += `${str.length}#${str}`
        }

        return res // '{len}#{str}'
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let i = 0
        let arr = []

        while (i < str.length) {
            const hashPos = str.indexOf('#', i)
            const len = Number(str.slice(i, hashPos))

            // '5#hello2#mr'
            i = hashPos + 1
            const word = str.slice(i, i + len) 
            arr.push(word)

            i+=len

        }
        return arr
    }
}
