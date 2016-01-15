// given an array of ints, and a range, return the count of mistakes
// where mistakes are either
// - int is out of range
// - int is missing from range
// - int is duplicated
// example: [2, 3, 4, 6, 7], range(1-6)

var countOfRangeMistakes = function countOfRangeMistakes(intArray, rangeLower, rangeHigher) {
  var countMistakes = 0;
  var intSeenBefore = {};

  intArray.forEach(function(int) {
    //oor
    if(int < rangeLower || int > rangeHigher) {
      countMistakes++;
    }
    //duplicated
    else if(intSeenBefore[int] != null) {
      countMistakes++;
    }
    intSeenBefore[int] = 1;

  });

  //missing
  for(var rangeInt = rangeLower; rangeInt <= rangeHigher; rangeInt++) {
    if(intSeenBefore[rangeInt] == null) {
      countMistakes++;
    }
  }

  return countMistakes;

}

exports.countOfRangeMistakes = countOfRangeMistakes;
