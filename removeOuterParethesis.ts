function removeOuterParentheses(s: string): string {
  let stack: string[] = [];
  let result = "";

  for (let char of s) {
    if (char == "(") {
      if (stack.length == 0) {
        stack.push(char);
      } else {
        result += char;
        stack.push(char);
      }
    } else {
      if (stack.pop() !== ")") {
        result += char;
      }
    }
  }
  return result;
}

console.log(removeOuterParentheses("(()())(())"));
