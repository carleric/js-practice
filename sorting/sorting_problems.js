//11.1 You're given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B Write a method to merge B into A in sorted order.

exports.mergeTwoSortedArrays = function (A, B) {
  var startIndexA = A.length - B.length;
  for(var i = 0; i < B.length; i++) {
    A[startIndexA + i] = B[i];
  }
}

//mergeTwoSortedArrays(A, B);
//console.log(A);

//11.2 Write a method to sort an array of strings so that all the anagrams are next each other

//11.2 Given a sorted array of n integers that has been rotated an unknown number of times, write code to find an element in the array.
//You smay assume that the array was orginally sorted in increasing order.
// ex: input: find 5 in (15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14)
//     output: 8 (index of 5 in the array)
exports.indexOfIntegerInArray = function indexOfIntegerInArray(integer, array, left, right) {
  debugger;
  var searchIndex = Math.floor((left + right) / 2);

  if(array[searchIndex] == integer) {
    return searchIndex;
  } else if(array[searchIndex] > integer) {
    if(array[0] < integer) {
      //found in left half: recurse or iterate
      return indexOfIntegerInArray(integer, array, left, searchIndex);
    } else {
      //must be in right half:
      return indexOfIntegerInArray(integer, array, searchIndex, right);
    }
  } else {
    //must be in right half:
    return indexOfIntegerInArray(integer, array, searchIndex, right);
  }

}

//11.6 Given an MxN matrix in which each row and each column is sorted in ascending order, write a method to find an element.
// 1  2  3
// 4  5  6
// 7  8  9
//
// 1  5  8
// 2  7  9
// 3  10 11

// a. scan last column to determine upper row bounds (if lastelement > element stop)
// b. scan last column to determine lower row bounds, starting at upper bound (if lastelement < element stop)
// c. binary search on isolated row

exports.findElementInSortedMatrix = function findElementInSortedMatrix(element, matrix) {
  debugger;
  var row = 0;
  var col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if(matrix[row][col] == element) {
      return true;
    } else if (matrix[row][col] >  element) {
      col --;
    } else {
      row ++;
    }
  }
}
