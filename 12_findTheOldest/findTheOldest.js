const findTheOldest = function(array) {
  array.sort(function(a, b) {
    let lastGuy;
    let nextGuy;
    const currentYear = new Date().getFullYear();
    if ('yearOfDeath' in a) {
      lastGuy = a.yearOfDeath - a.yearOfBirth;
    } else {
      lastGuy = currentYear - a.yearOfBirth;
    }
    if ('yearOfDeath' in b) {
      nextGuy = b.yearOfDeath - b.yearOfBirth;
    } else {
      nextGuy = currentYear - b.yearOfBirth;
    }
    return lastGuy > nextGuy ? -1: 1;
  });

  return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
