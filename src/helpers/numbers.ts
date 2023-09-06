export const convertNumberToLetter = (number: number) => {
  if (number < 0 || number > 25) {
    throw new Error('Invalid number. Number must be between 0 and 25.');
  }

  const charCodeA = 'A'.charCodeAt(0);
  const letter = String.fromCharCode(charCodeA + number);

  return letter;
}


export const formatNumberMore = (number: number) => {
  if (number >= 10000) {
    return `hơn ${Math.floor(number / 1000) * 1000}`;
  } else if (number >= 1000) {
    return `hơn ${Math.floor(number / 1000) * 1000}`;
  } else if (number >= 100) {
    return `hơn ${Math.floor(number / 100) * 100}`;
  } else {
    return `${number}`;
  }
}