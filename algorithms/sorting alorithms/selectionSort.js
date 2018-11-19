const swap = arr => index1 => index2 =>{
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

function selectionSort (array) {
  for(let l = 0; l < array.length; l++){
    let minIndex = l
    for(let i = l + 1; i < array.length; i++){
      if(array[i] < array[minIndex]) {
        minIndex = i
      }
    }
    swap(array)(l)(minIndex)
  }
  return array
}

module.exports = selectionSort