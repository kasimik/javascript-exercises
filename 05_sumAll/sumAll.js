const sumAll = function(x, y) {
  let finalSum = null;
  let first = 0;
  let last = 0;

  if (typeof x === 'number' && typeof y === 'number' && x >= 0 && y >= 0) {
    if (x <= y) {
      first = x;
      last = y;
    }
    else {
      first = y;
      last = x;
    }
    for (first; first <= last; first++) {
      finalSum += first;
    }
  }
  else {
    finalSum = 'ERROR';
  }
  

  
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
