function bubbleSort (arr) {
  let len = arr.length
  let swapped = false
  for (let i = 0; i < len - 1; i++) {
    let temp = null
    if (arr[i] > arr[i + 1]) {
      swapped = true
      temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
    }
  }
  return swapped === false ? arr : bubbleSort(arr)
}

module.exports = bubbleSort