exports.mergeSort = function mergeSort(intArray, low, high) {
  if(low < high) {
    var middle = Math.floor((low + high) / 2);
    mergeSort(intArray, low, middle);
    mergeSort(intArray, middle+1, high);
    merge(intArray, low, middle, high);
  }

}

function merge(intArray, low, middle, high) {
  //console.log("merge l=" + low + " m=" + middle + " h=" + high);
  //copy both halves into helper
  var helper = [];
  for(var i = low; i <= high; i++) {
    helper[i] = intArray[i];
  }

  var helperLeft = low;
  var helperRight = middle + 1;
  var current = low;

  while (helperLeft <= middle && helperRight <= high) {
    if(helper[helperLeft] <= helper[helperRight]) {
      intArray[current] = helper[helperLeft];
      helperLeft++;
    }
    else {
      intArray[current] = helper[helperRight];
      helperRight++;
    }
    current++;
  }

  var remaining = middle - helperLeft;
  for(var i = 0; i <= remaining; i++) {
    intArray[current + i] = helper[helperLeft + i];
  }

}

// var testArray = [8, 2, 9, 5, 4, 1];
//
// mergeSort(testArray, 0, 5);
//
// console.log(testArray);
