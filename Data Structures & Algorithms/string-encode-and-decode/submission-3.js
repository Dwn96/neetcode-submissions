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
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        const res = []

        let i = 0

        '5#hello5#world'
        while(i < str.length) {
            const hashPos = str.indexOf('#', i)
            const len = Number(str.slice(i, hashPos))
            i = hashPos + 1
            const word = str.slice(i, i + len)
            res.push(word)
            i += len
        }

        return res

    }
}
