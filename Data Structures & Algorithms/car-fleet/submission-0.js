class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        if(!position.length) return 0

        const cars = position.map((pos, i) => [pos, speed[i]])

        const sorted = cars.sort((a,b) => b[0] - a[0])

        const stack = []

        for(const [pos, speed] of sorted) {

            const time = (target - pos) / speed

            stack.push(time)

            if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop()
            }
        }

        return stack.length
    }
}
