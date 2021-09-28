const reverseString = function(str) {
  let charArray = str.split('');
  let newStr = [];
  for (i = charArray.length; i >= 0; i--) {
    newStr.push(charArray[i]);
  }
  return newStr.join('');
};

// Do not edit below this line
module.exports = reverseString;
