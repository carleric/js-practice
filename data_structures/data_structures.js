
exports.prepend = function prepend(val, list) {
  return {value:val, rest:list};
}

exports.arrayToList = function arrayToList(array) {
  var list = null;
  for (var i = array.length -1; i >= 0; i--) {
 	  list = exports.prepend(array[i], list);
  }
  return list;
}

exports.listToArray = function listToArray(list) {
  array = [];
  current = list;
  array.push(current.value);
  while(current.rest != null) {
    current = current.rest;
    array.push(current.value);
  }
  return array;
}


exports.nth = function nth(list, index) {
  var arr = exports.listToArray(list);
  return arr[index];
}


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
