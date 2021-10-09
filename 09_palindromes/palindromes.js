const palindromes = function(string) {
  let newStringArray = string.toLowerCase().split('').reverse();
  for (let i = newStringArray.length - 1; i >= 0; i--) {
    if (!isLetter(newStringArray[i])) {
      newStringArray.splice(i, 1);
    }
  }
  let newString = newStringArray.join('');

  let originalStringArray = string.toLowerCase().split('');
  for (let i = originalStringArray.length - 1; i >= 0; i--) {
    if (!isLetter(originalStringArray[i])) {
      originalStringArray.splice(i, 1);
    }
  }
  let originalString = originalStringArray.join('');

  if (newString === originalString) {
    return true;
  } else {
    return false;
  }
};

function isLetter(string) {
  return string.length === 1 && string.match(/[a-z]/i);
}

// Do not edit below this line
module.exports = palindromes;
