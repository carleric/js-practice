var isPrimeNumber = function isPrimeNumber(number) {
  if(number < 2) {
    return false;
  }
  for (var i = 2; i < number; i++) {
    if(number % i == 0) {
      return false;
    }
  }
  return true;
}
exports.isPrimeNumber = isPrimeNumber;

var isPrimeNumberBetter = function(number) {
  if(number < 2) {
    return false;
  }
  var sqrt = Math.sqrt(number);
  for (var i = 2; i < sqrt; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
exports.isPrimeNumberBetter = isPrimeNumberBetter;
