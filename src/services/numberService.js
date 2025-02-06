const axios = require('axios');
const { 
  isArmstrong,
  isPrime,
  isPerfect,
  getDigitSum
} = require('../utils/mathUtils');

async function getFunFact(number) {
  try {
    const response = await axios.get(`http://numbersapi.com/${number}/math`);
    return response.data;
  } catch (error) {
    return `${number} is an interesting number in mathematics.`;
  }
}

function getNumberProperties(number) {
  const properties = [];
  
  if (isArmstrong(number)) {
    properties.push('armstrong');
  }
  
  properties.push(number % 2 === 0 ? 'even' : 'odd');
  
  return {
    is_prime: isPrime(number),
    is_perfect: isPerfect(number),
    properties,
    digit_sum: getDigitSum(number)
  };
}

module.exports = { getNumberProperties, getFunFact };
