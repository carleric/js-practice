exports.quickSort = function quickSort(intArray, left, right) {
  var index = partition(intArray, left, right);
  if(left < index - 1) { //sort left half
    quickSort(intArray, left, index -1);
  }
  if(index < right) { //sort right half
    quickSort(intArray, index, right);
  }
}

var partition = function (intArray, left, right) {
  var pivotIndex = Math.floor((left + right) / 2);
  var pivot = intArray[pivotIndex];
  while (left <= right) {
    while(intArray[left] < pivot) left++;
    while(intArray[right] > pivot) right--;
    if(left <= right) {
      swap(intArray, left, right);
      left++;
      right--;
    }
  }
  return left;
}

var swap = function (intArray, left, right) {
  var temp = intArray[left];
  intArray[left] = intArray[right];
  intArray[right] = temp;
}

// var intArray = [8, 3, 7, 2, 9, 6, 1, 4, 5];
//
// quicksort(intArray, 0, 8);
//
// console.log(intArray);
