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
