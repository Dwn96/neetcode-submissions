class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
 search (arr, target) {
	let i = 0
	let j = arr.length - 1
	
	while(i <= j) {
		const mid = Math.floor((i + j) / 2)
		
		if(arr[mid] === target) return mid
		if(arr[mid] < target) {
			i = mid + 1
		} else {
			j = mid - 1
		}
	}
	
	return -1

}

}
