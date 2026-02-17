function isValid(s: string): boolean {
  let stack: string[] = [];

  const map: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (!map[char]) {
    stack.push(char);
    } else {
      if (stack.length === 0) return false;
      if (stack.pop() !== map[char]) return false;
    }
  }

  return stack.length === 0 ? true : false
}

console.log(isValid("()"));
console.log(isValid("[]"));
console.log(isValid("[}"));
console.log(isValid("([])"));
console.log(isValid("([)]"));
