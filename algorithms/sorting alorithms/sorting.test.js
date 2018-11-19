/**
* Simple test functions for sorting algorithms
*/

const assert = require('assert')
const bubbleSort = require('./bubbleSort.js')
const selectionSort = require('./selectionSort.js')

const testSort = sortingFn => arr => expected => {
  console.log(`unsorted array : ${arr}`)
  console.log(`array length : ${arr.length}`)
  console.time('sorting runtime')
  Promise.resolve(sortingFn(arr))
    .then(console.timeEnd('sorting runtime'))
    .then(console.log(`sorted array : ${arr}`))
    .then(assert.strict.deepEqual(arr, expected, 'array is not  sorted properly'))
    .then(console.log('array sorted properly'))
    .catch(e => console.log(e.message))
}
const bubbleTest = testSort(bubbleSort)
const selectionTest = testSort(selectionSort)

const testArr1 = [2, 5, 1, 3, 4, 8, 7, 6, 9]

/**
*     Uncomment specific algorithm to test it
*/

// bubbleTest(testArr1)([1,2,3,4,5,6,7,8,9])

selectionTest(testArr1)([1, 2, 3, 4, 5, 6, 7, 8, 9])
