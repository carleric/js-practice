var assert = require('assert');
var rangeMem = require('../problems/range_membership.js');

describe('Problems', function(){
  describe('#countOfRangeMistakes', function() {
    it('Should count mistakes in array based on range definition', function(){
      var testArray = [2,3,4,6,7];
      //missing
      assert(rangeMem.countOfRangeMistakes(testArray, 2,7) == 1);
      //oor
      assert(rangeMem.countOfRangeMistakes(testArray, 2,6) == 2);
      //duplicates
      var testArray = [2,2,3,4,5,6,7];
      assert(rangeMem.countOfRangeMistakes(testArray, 2,7) == 1);
    });
  });

});
