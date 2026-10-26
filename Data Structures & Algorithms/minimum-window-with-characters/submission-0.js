class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let map = {}

        for(const char of t) {
            map[char] = (map[char] || 0) + 1
        }

        let count = Object.keys(map).length
        let left = 0
        let right = 0
        let minString = ''
        let len = Infinity

        while(right < s.length) {
            const rLetter = s[right]

            if(rLetter in map) {
                map[rLetter]--

                if(map[rLetter] === 0) {
                    count--
                }
            }
            right++

            while(count === 0) {
                const leftLetter = s[left]

                if(right - left < len) {
                    len = right - left
                    minString = s.slice(left,right)
                }

                if(leftLetter in map) {
                    map[leftLetter]++
                    if(map[leftLetter] > 0) {
                        count++
                    }
                }
                left++
            }
        }

        return minString
    }
}
