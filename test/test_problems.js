var assert = require('assert');
var rangeMem = require('../problems/range_membership.js');
var vanityNumber = require('../problems/vanity_number.js');

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

  describe('#wordsForNumber', function() {
    it('Should return valid vanity words for a given 4 digit number', function(){
      var validWords = ['book', 'cool', 'rats', 'tool'];
      
      assert(vanityNumber.wordsForNumber(validWords, 2665).length == 2);
      assert(vanityNumber.wordsForNumber(validWords, 7287).length == 1);
      assert(vanityNumber.wordsForNumber(validWords, 8665).length == 1);
      assert(vanityNumber.wordsForNumber(validWords, 2222).length == 0);
      assert(vanityNumber.wordsForNumber(validWords, 6732).length == 0);

      //invalid input should return empy array
      assert(vanityNumber.wordsForNumber([], 2665).length == 0);
      assert(vanityNumber.wordsForNumber(['blah', 'xyz'], 2665).length == 0);
      assert(vanityNumber.wordsForNumber(['blah', 'argh'], 266).length == 0);
    });
  });

});
