
var reverseArray = function (array) {
 var newArray = [];
  for(var i = array.length-1; i >=0; i--){
   newArray.push(array[i]);
  }
  return newArray;
}

var reverseArrayInPlace = function(array) {
  var i = 0;
  var j = array.length -1;
  for (; i < array.length/2; i++, j--) {
   var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

exports.reverseArray = reverseArray;
exports.reverseArrayInPlace = reverseArrayInPlace;

var prepend = function prepend(val, list) {
  return {value:val, rest:list};
}

var arrayToList = function arrayToList(array) {
  var list = null;
  for (var i = array.length -1; i >= 0; i--) {
 	  list = prepend(array[i], list);
  }
  return list;
}

var listToArray = function listToArray(list) {
  array = [];
  current = list;
  array.push(current.value);
  while(current.rest != null) {
    current = current.rest;
    array.push(current.value);
  }
  return array;
}


var nth = function nth(list, index) {
  var arr = listToArray(list);
  return arr[index];
}

exports.prepend = prepend;
exports.arrayToList = arrayToList;
exports.listToArray = listToArray;
exports.nth = nth;

exports.deepEqual = function deepEqual(o1, o2) {
  debugger;
  if(countProperties(o1) != countProperties(o2)) return false;
  var countEqual = 0;
  for (var name in o1) {
    if(typeof o1[name] == "object") { //
      if(deepEqual(o1[name], o2[name]))
        countEqual++;
    } else {
      if (o1[name] === o2[name])
        countEqual++;
    }
  }
  return (countEqual == countProperties(o1));
}

function countProperties(obj) {
  var count = 0;
  for (var prop in obj) {
    if(obj.hasOwnProperty(prop))
      count++;
  }
  return count;
}
