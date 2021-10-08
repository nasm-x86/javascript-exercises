const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  for (let i in array) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let result = array[0];
  for (let i in array.slice(1)) {
    result *= array.slice(1)[i];
  }
  return result;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
	result = a;
  for (let i = a - 1; i > 0; i--) {
    result *= i;
  }
  if (a === 0) {
    return 1;
  } else {
  return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
