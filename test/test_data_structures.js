var assert = require('assert');
var dataStructures = require('../data_structures/data_structures.js');

describe('Data Structures', function() {

  describe('#arrayToList', function () {
    it('should convert array to linked list', function () {
      assert.deepEqual(dataStructures.arrayToList([10, 20]), {value: 10, rest: {value: 20, rest: null}});
    });
  });


  describe('#listToArray', function () {
    it('should convert linked list to array', function () {
      assert.deepEqual(dataStructures.listToArray(dataStructures.arrayToList([10, 20, 30])), [10, 20, 30]);
    });
  });

  describe('#prepend', function () {
    it('should insert new value at head of linked list', function () {
      assert.deepEqual(dataStructures.prepend(10, dataStructures.prepend(20, null)), {value: 10, rest: {value: 20, rest: null}});
    });
  });

  describe('#nth', function () {
    it('should return index of matching element in linked list', function () {
      assert.equal(dataStructures.nth(dataStructures.arrayToList([10, 20, 30]), 1), 20);
    });
  });

  describe('#deepEqual', function () {
    it('should compare objects by values', function () {
      var obj = {here: {is: "an"}, object: 2};
      assert(dataStructures.deepEqual(obj, obj));
      // → true
      assert(!dataStructures.deepEqual(obj, {here: 1, object: 2}));
      // → false
      assert(dataStructures.deepEqual(obj, {here: {is: "an"}, object: 2}));
      // → true

    });
  });

});
