var assert = require('assert');
var math_problems = require('../math/math.js');

describe('Math problems', function(){
  describe('#isPrimeNumber', function(){
    it('Should return whether a number is prime', function(){
      assert(math_problems.isPrimeNumber(7));
    });
  });

  describe('#isPrimeNumberBetter', function(){
    it('Should return whether a number is prime', function(){
      assert(!math_problems.isPrimeNumber(49));
      assert(!math_problems.isPrimeNumber(16));
      assert(!math_problems.isPrimeNumber(9));
      assert(math_problems.isPrimeNumber(7));
      assert(math_problems.isPrimeNumber(11));
    });
  });

});
