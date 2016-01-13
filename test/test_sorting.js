var assert = require('assert');
var mergeSort = require('../mergesort.js').mergeSort;
var quickSort = require('../quicksort.js').quickSort;
var mergeTwoSortedArrays = require('../sorting_problems.js').mergeTwoSortedArrays;

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
});
