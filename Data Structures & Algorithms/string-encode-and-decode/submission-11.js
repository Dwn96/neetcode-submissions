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

        return encoded //5#hello4#john
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let i = 0
        let j = str.length
        let res = []

        while(i < j) {
            let hashPos = str.indexOf('#', i)
            let len = Number(str.slice(i, hashPos))

            i = hashPos + 1

            const word = str.slice(i, i + len)
            res.push(word)

            i+=len
        }

        return res
    }
}
