const ftoc = function(f_temp) {
  let c_temp = (f_temp - 32) * 5 / 9;
  c_temp = Math.round(c_temp * 10) / 10;
  return c_temp;
};

const ctof = function(c_temp) {
  let f_temp = c_temp * 9 / 5 + 32;
  f_temp = Math.round(f_temp * 10) / 10;
  return f_temp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
