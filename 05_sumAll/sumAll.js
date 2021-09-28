const sumAll = function(num1, num2) {
  let sum;
  if (num1 < 0 || num2 < 0) return 'ERROR';
  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    if (num2 > num1) {
      sum = num2;
      for (let i = num2 - 1; i >= num1; i--) {
        sum += i;
      }
    } else if (num1 > num2) {
      sum = num1;
      for (let i = num1 -1; i >= num2; i--) {
        sum += i;
      }
    }
    return sum;
  } else return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
