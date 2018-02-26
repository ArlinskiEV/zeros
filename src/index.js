module.exports = function getZerosCount(number) {
  // your implementation
  let five = 0;
  let temp = 1;

  while (temp * 5 <= number) {
    temp *= 5;
    five += Math.trunc(number / temp);
  }

  return five;
}
