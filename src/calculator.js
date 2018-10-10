const INIT_VALUE = '0';
const isDigit = txt => /\d/.test(txt);
const isSeparator = txt => /([.,])/.test(txt);

const isOperator = txt => /([+\-*/^])/.test(txt);
const endsWithDigit = txt => /.?\d$/.test(txt);
const endsWithDecimal = txt => /.[.,]\d+$/.test(txt);
const endsWithSeparatorOrOperator = txt => /.([+\-*/.,^])$/.test(txt);
const beginsWithUnsupportedChar = txt => /^([*/.,^])./.test(txt);

const removeChar = (str, idx) => {
  const result = Array.from(str);
  result.splice(idx, 1);
  if (result.length === 0) {
    return INIT_VALUE;
  }
  return [...result].join('');
};

const removeLastChar = str => removeChar(str, -1);

const removeFirstChar = str => removeChar(str, 0);

const trimOperators = (equation) => {
  if (endsWithSeparatorOrOperator(equation)) {
    return trimOperators(removeLastChar(equation));
  }
  if (beginsWithUnsupportedChar(equation)) {
    return trimOperators(removeFirstChar(equation));
  }
  return equation;
};

const calcFilter = (equation, appendix) => {
  if (equation === INIT_VALUE && !(isOperator(appendix) || isSeparator(appendix))) {
    return appendix;
  }
  if (isDigit(appendix)) {
    return equation + appendix;
  }
  if (isOperator(appendix)) {
    if (endsWithSeparatorOrOperator(equation)) {
      const result = Array.from(equation);
      result.splice(-1, 1);
      return [...result, appendix].join('');
    }
    return equation + appendix;
  }
  if (isSeparator(appendix)) {
    if (endsWithDigit(equation) && !endsWithDecimal(equation)) {
      return equation + appendix;
    } else if (endsWithSeparatorOrOperator(equation)) {
      const result = Array.from(equation);
      result.splice(-1, 1);
      return [...result, appendix].join('');
    }
  }
  return equation;
};

const filterEquation = (equation) => {
  let filteredEquation = Array.from(equation)
    .filter(i => /([0-9+\-*/.,^])/.test(i))
    .join('');
  if (/^0([0-9])/.test(filteredEquation)) {
    filteredEquation = removeFirstChar(filteredEquation);
  }
  return filteredEquation.length > 0 ? filteredEquation : '0';
};

const evaluate = equation => eval(trimOperators(equation)
  .replace('^', '**')).toString();

export {
  calcFilter,
  isDigit,
  isSeparator,
  isOperator,
  endsWithDigit,
  endsWithDecimal,
  endsWithSeparatorOrOperator,
  removeLastChar,
  evaluate,
  trimOperators,
  filterEquation,
  INIT_VALUE,
};
