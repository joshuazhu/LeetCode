// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

const generateParenthesis = (n: number): string[] => {
  let result: string[] = [];

  const generate = (left: number, right: number, str: string) => {
    if (str.length === n * 2) {
      result.push(str);
      return;
    }

    if (left < n) generate(left + 1, right, str + "(");
    if (right < left) generate(left, right + 1, str + ")");
  };

  generate(0, 0, "");
  return result;
};

console.log(generateParenthesis(3));
