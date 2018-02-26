module.exports = function getZerosCount(number) {
  // your implementation
  let five = 0;
  while (number % 5 !== 0) {
    number -= 1;
  }

  // let pow = 1;
  // let temp = 5;
  // while (temp * 5 <= number) {
  //   temp *= 5;
  // }

  while (number > 0) {
    let i = number;
    while (i % 5 === 0) {
      five += 1;
      i /= 5;
    }
    number -= 5;
  }

  // temp = 5^pow = current number
  // while (number > 0) {
  //   five += pow;
  //   temp /= 5;
  //   pow -= 1;

  // }

  return five;
}
