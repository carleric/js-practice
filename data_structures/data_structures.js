
function range(from, to, step) {
  var stp = step == undefined ? 1 : step;
  var range = [];
  var current = from;
  range.push(current);
  while (true) {
    current += stp;
    range.push(current);
    if(current == to) break;
  } ;
  return range;
}

function sum(array) {
 var sum = 0;
  for(var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

var reverseArray = function (array) {
 var newArray = [];
  for(var i = array.length-1; i >= 0; i--){
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

var prepend = function (val, list) {
  return {value:val, rest:list};
}

var arrayToList = function (array) {
  var list = null;
  for (var i = array.length -1; i >= 0; i--) {
 	  list = prepend(array[i], list);
  }
  return list;
}

var listToArray = function (list) {
  array = [];
  current = list;
  array.push(current.value);
  while(current.rest != null) {
    current = current.rest;
    array.push(current.value);
  }
  return array;
}

var nth = function (list, index) {
  var arr = listToArray(list);
  return arr[index];
}

var deepEqual = function (o1, o2) {
  //debugger;
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

module.exports = {
  reverseArray: reverseArray,
  reverseArrayInPlace : reverseArrayInPlace,
  prepend : prepend,
  arrayToList : arrayToList,
  listToArray : listToArray,
  nth : nth,
  deepEqual : deepEqual
}
