function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    let prefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        for (let word of strs) {
            if (word[i] !== char) {
                return prefix;
            }
        }

        prefix += char;
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"])); // Output: "fl"