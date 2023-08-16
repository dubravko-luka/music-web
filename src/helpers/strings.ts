export function capitalizeWords(str: string) {
  const words = str.split(' ');

  const capitalizedWords = words.map(word => {
    const firstChar = word.charAt(0).toUpperCase();
    const restChars = word.slice(1);
    return firstChar + restChars;
  });

  const capitalizedStr = capitalizedWords.join(' ');

  return capitalizedStr;
}