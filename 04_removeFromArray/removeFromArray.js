const removeFromArray = function(arr, ...toRemove) {
  //spread notation (...toRemove) turns all optional arguments into an array
  //forEach element of array toRemove, do this
  toRemove.forEach((x) => {
    //find index of item
    const index = arr.indexOf(x);
    //only remove if index found (will ignore values not in arr)
    if (index > -1)
      //only removes 1 character at index
      arr.splice(index, 1);
  });
  return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
