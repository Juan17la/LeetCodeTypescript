function isAnagram(s: string, t: string): boolean {
  let hash = new Map<string, number>();

  if (s.length !== t.length) {
    return false;
  }

  for (let c of s) {
    let v = hash.get(c);
    if (hash.has(c) && v !== undefined) {
      hash.set(c, v + 1);
    } else {
      hash.set(c, 1);
    }
  }

  for (let c of t) {
    let v = hash.get(c);
    if (hash.has(c) && v !== undefined && v > 0) {
      hash.set(c, v - 1);
    } else if (hash.has(c) && v === 0) {
      return false;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("car", "rat"));
console.log(isAnagram("aacc", "ccac"));
