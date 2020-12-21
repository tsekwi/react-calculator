// split expression by operator considering parentheses
const split = (expression, operator) => {
  const result = [];
  let braces = 0;
  let currentChunk = "";
  for (let i = 0; i < expression.length; ++i) {
      const curCh = expression[i];
      if (curCh === '(') {
          braces++;
      } else if (curCh === ')') {
          braces--;
      }
      if (braces === 0 && operator === curCh) {
          result.push(currentChunk);
          currentChunk = "";
      } else currentChunk += curCh;
  }
  if (currentChunk !== "") {
      result.push(currentChunk);
  }

  console.log(currentChunk, result);

  return result;
};
  
// this will only take strings containing * operator [ no + ]
const parseMultiplicationSeparatedExpression = (expression) => {
  const numbersString = split(expression, '*');
  const numbers = numbersString.map(noStr => {
      if (noStr[0] === '(') {
          const expr = noStr.substr(1, noStr.length - 2);
          // recursive call to the main function
          return parsePlusSeparatedExpression(expr);
      }
      return +noStr;
  });
  const initialValue = 1.0;
  const result = numbers.reduce((acc, no) => acc * no, initialValue);
  return result;
};
  
// this will only take strings containing / operator [ no + ]
const parseDivideSeparatedExpression = (expression) => {
  const numbersString = split(expression, '/');
  const numbers = numbersString.map(noStr => parseMultiplicationSeparatedExpression(noStr));
  const initialValue = numbers[0];
  const result = numbers.reduce((acc, no) => acc / no);

  return result;
};
  
// * / -
const parseMinusSeparatedExpression = (expression) => {
  let numbersString = split(expression, '-');
  /*
  let nArray = [];
  numbersString.forEach((arr, i) => {
    if (arr === '-' && i === 0) 
      nArray.push(arr + numbersString[i + 1])

    if (numbersString[0] === '-' && i === numbersString.length - 1) {
      numbersString.shift();
      numbersString.shift();
      numbersString.unshift(nArray[0]);
    }
  });
  */
  const numbers = numbersString.map(noStr => parseDivideSeparatedExpression(noStr)), 
    initialValue = numbers[0], 
    result = numbers.slice(1).reduce((acc, no) => acc - no, initialValue);
  return result;
};
  
// * / - + 
const parsePlusSeparatedExpression = (expression) => {
  const numbersString = split(expression, '+');
  const numbers = numbersString.map(noStr => parseMinusSeparatedExpression(noStr));
  const initialValue = 0.0;
  const result = numbers.reduce((acc, no) => acc + no, initialValue);
  return result;
};

export default parsePlusSeparatedExpression;