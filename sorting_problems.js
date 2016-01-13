//11.1 You're given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B Write a method to merge B into A in sorted order.

exports.mergeTwoSortedArrays = function (A, B) {
  var startIndexA = A.length - B.length;
  for(var i = 0; i < B.length; i++) {
    A[startIndexA + i] = B[i];
  }
}

//mergeTwoSortedArrays(A, B);
//console.log(A);
