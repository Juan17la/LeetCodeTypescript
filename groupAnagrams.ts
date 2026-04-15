function groupAnagrams(strs: string[]): string[][] {
  const map = new Map();

  for (let str of strs) {
    // console.log(str.split(''))
    // console.log(str.split('').sort())
    // console.log(str.split('').sort().join(''))
    const key = str.split('').sort().join('')

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
    // console.log(map)
  }

  return Array.from(map.values()).reverse();
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
