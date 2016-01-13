var assert = require('assert');
var mergeSort = require('../sorting/mergesort.js').mergeSort;
var quickSort = require('../sorting/quicksort.js').quickSort;
var mergeTwoSortedArrays = require('../sorting/sorting_problems.js').mergeTwoSortedArrays;
var indexOfIntegerInArray = require('../sorting/sorting_problems').indexOfIntegerInArray;
var findElementInSortedMatrix = require('../sorting/sorting_problems').findElementInSortedMatrix;

describe('Sorting Problems', function() {
  describe('#mergesort', function () {
    it('should sort an array', function () {
      var A = [8, 2, 9, 5, 4, 1];
      mergeSort(A, 0, 5);
      assert.equal(1, A[0]);
      assert.equal(2, A[1]);
      assert.equal(4, A[2]);
      assert.equal(9, A[5]);

    });
  });

  describe('#quicksort', function () {
    it('should sort an array', function () {
      var A = [8, 3, 7, 2, 9, 6, 1, 4, 5];
      quickSort(A, 0, 8);
      assert.equal(1, A[0]);
      assert.equal(2, A[1]);
      assert.equal(3, A[2]);
      assert.equal(9, A[8]);

    });
  });

  describe('#problem 11.1', function () {
    it('should merge two sorted arrays', function () {
      var A = [1, 2, 3, 4, 5, 6, null, null, null, null];
      var B = [8, 9, 10, 11];
      mergeTwoSortedArrays(A, B);
      assert.equal(8, A[6]);

    });
  });

  describe('#problem 11.2', function () {
    it('should find integer in a rotated array', function () {
      var A = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];
      var index = indexOfIntegerInArray(5, A, 0, A.length-1);
      assert.equal(8, index);

    });
  });

describe('#problem 11.6', function () {
    it('should find element in a matrix', function () {
      var matrix = [[15, 20, 40, 85], [20, 35, 80, 95], [30, 55, 95, 105], [40, 80, 100, 120]];
      assert(findElementInSortedMatrix(55, matrix));

    });
  });
});
