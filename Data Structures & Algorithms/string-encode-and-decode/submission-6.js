class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        let encoded = ''
        for(const str of strs) {
            encoded += `${str.length}#${str}`
        }
        return encoded; // '5#hello2#mr'
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        const res = []

        let i = 0

        while(i < str.length) {
            const hashPos = str.indexOf('#', i)
            const len = Number(str.slice(i,hashPos))

            i = hashPos + 1
            const word = str.slice(i, i+len)
            res.push(word)
            i += len
        }

        return res
    }
}