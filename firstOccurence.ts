function strStr(haystack: string, needle: string): number {
    
    let left = 0;

    for (let i = needle.length; i <= haystack.length; i ++) {
        if(haystack.slice(left, i) === needle){
            return left;
        }
        // console.log(haystack.slice(left, i))
        left++
    }
    
    return -1
};

console.log(strStr("sadbutsad", "sad"))
console.log(strStr("leetcode", "leeto"))