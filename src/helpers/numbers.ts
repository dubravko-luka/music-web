export const convertNumberToLetter = (number: number) => {
  if (number < 0 || number > 25) {
    throw new Error('Invalid number. Number must be between 0 and 25.');
  }

  const charCodeA = 'A'.charCodeAt(0);
  const letter = String.fromCharCode(charCodeA + number);

  return letter;
}
