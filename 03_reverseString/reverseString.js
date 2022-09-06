const reverseString = function(string) {
  let reversed = '';
  let letters = string.split('');
  letters = letters.reverse();
  reversed = letters.toString();
  reversed = reversed.replaceAll(',', '');
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
