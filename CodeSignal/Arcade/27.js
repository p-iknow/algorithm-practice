const isDigit = char => /\d/.test(char);
const isValidChar = char => /[\da-zA-Z_]/.test(char);
const variableName = name => {
  const firstChar = name.split('')[0];
  const charArr = name.split('');
  if (isDigit(firstChar)) return false;
  return charArr.every(char => isValidChar(char));
};

variableName('var_1__Int');
