const bubbleSort = require('./bubbleSort.js')

function testBubbleSort (arr) {
  console.log(`unsorted array : ${arr}`)
  console.log(`array length : ${arr.length}`)
  console.time('bubbleSort runtime')
  Promise.resolve(bubbleSort(arr))
    .then(console.timeEnd('bubbleSort runtime'))
    .then(console.log(`sorted array : ${arr}`))
    .catch(e => console.log(e))
}
