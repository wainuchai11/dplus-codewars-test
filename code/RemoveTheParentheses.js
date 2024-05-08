function removeParentheses(text) {
  let countPars = 0;
  let result = "";

  for (let char of text) {
    if (char === "(") {
      countPars++;
    } else if (char === ")") {
      countPars--;
    } else if (countPars === 0) {
      result += char;
    }
  }

  return result;
}
