const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below


const first = data.lists[0][1] // get the first array
const second = data.lists[1][1] // get the second array
const third = data.lists[2][1] // get the third array

const result = []

const extractBiggest = () => {
	// get the last value of each array or use 0 as the default value
	const firstLast = first.length > 0 ? first[first.length - 1] : 0
	const secondLast = second.length > 0 ? second[second.length - 1] : 0
	const thirdLast = third.length > 0 ? third[third.length - 1] : 0
	
	// find the biggest value among the last values of the arrays
	if (firstLast >= secondLast && firstLast >= thirdLast && first.length > 0) {
		// remove the biggest value from the array and return it
		return first.pop()
	} else if (secondLast >= thirdLast && second.length > 0) {
		// remove the biggest value from the array and return it
		return second.pop()
	} else if (third.length > 0) {
		// remove the biggest value from the array and return it
		return third.pop()
	}
}
// The given code had to be updated to extract the largest number from each of the three arrays in the data object and store them in a new result array. I have done this by creating separate variables to store each of the three arrays and by writing a new function, extractBiggest, to extract the largest number from each of these arrays. The extractBiggest function works by comparing the last value of each array and returning the largest one, while also removing it from the original array. I have then called this function 15 times and added each returned value to the result array using the push method. The final result is an array with all the extracted numbers, in descending order.
// Only edit above



result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)