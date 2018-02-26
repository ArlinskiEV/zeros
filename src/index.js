module.exports = function getZerosCount(number) {
  // your implementation
  let five = 0;
  let pow = 0;
  let temp = 1;

  while (temp * 5 <= number) {
    temp *= 5;
    pow += 1;
    five += Math.trunc(number / temp);
  }

  return five;
}
