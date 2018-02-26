module.exports = function getZerosCount(number) {
  // your implementation
  let five = 0;
  let pow = 1;
  let temp = 5;

  while (temp * 5 <= number) {
    temp *= 5;
    pow += 1;
  }

  while (temp > 1) {
    five += Math.trunc(number / temp);
    temp /= 5;
    pow -= 1;
  }

  return five;
}
