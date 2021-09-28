const removeFromArray = function(array, element) {
  let args = Array.from(arguments);
  args = args.slice(1, arguments.length);
  for (let i = array.length; i >= 0; i--) {
    for (let n = args.length; n >= 0; n--) {
      if (array[i] === args[n]) {
        array.splice(i, 1);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
