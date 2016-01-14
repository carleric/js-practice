var assert = require('assert');
var deepEqual = require('../data_structures/data_structures.js').deepEqual;

describe('Data Structures', function() {
  describe('#deepEqual', function () {
    it('should compare objects by values', function () {
      var obj = {here: {is: "an"}, object: 2};
      assert(deepEqual(obj, obj));
      // → true
      assert(!deepEqual(obj, {here: 1, object: 2}));
      // → false
      assert(deepEqual(obj, {here: {is: "an"}, object: 2}));
      // → true

    });
  });

});
