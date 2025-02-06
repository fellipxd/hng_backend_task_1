function isArmstrong(num) {
  const positiveNum = Math.abs(num);
  const digits = String(positiveNum).split("");
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
  return sum === positiveNum;
}

function isPrime(num) {
  const positiveNum = Math.abs(num);
  if (positiveNum <= 3) return true;
  if (positiveNum % 2 === 0 || positiveNum % 3 === 0) return false;

  for (let i = 5; i * i <= positiveNum; i += 6) {
    if (positiveNum % i === 0 || positiveNum % (i + 2) === 0) return false;
  }
  return true;
}

function isPerfect(num) {
  const positiveNum = Math.abs(num);
  let sum = 1;

  for (let i = 2; i * i <= positiveNum; i++) {
    if (positiveNum % i === 0) {
      sum += i;
      if (i * i !== positiveNum) {
        sum += positiveNum / i;
      }
    }
  }
  return sum === positiveNum;
}

function getDigitSum(num) {
  const positiveNum = Math.abs(num);
  return String(positiveNum)
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}

module.exports = {
  isArmstrong,
  isPrime,
  isPerfect,
  getDigitSum,
};
