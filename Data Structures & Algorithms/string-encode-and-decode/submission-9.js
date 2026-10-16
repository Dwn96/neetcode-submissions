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

        return encoded; //5#hello4#world
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0
        let j = str.length - 1
        let decoded = []
        while(i < j) {

            const hashPos = str.indexOf('#', i)
            const len = Number(str.slice(i, hashPos))

            i = hashPos + 1
            const word = str.slice(i, i + len)
            decoded.push(word)

            i+=len
        }

        return decoded  

    }
}
