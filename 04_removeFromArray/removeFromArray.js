const removeFromArray = function(...args) {
  /*
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
  */

  //Get array (first argument provided)
  const arr = args[0];
  //new blank array
  const newArr = [];

  arr.forEach((item) => {
    if(!args.includes(item))
      newArr.push(item);
  });
  return newArr;
}

// Do not edit below this line
module.exports = removeFromArray;
