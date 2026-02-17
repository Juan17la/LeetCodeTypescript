function containsDuplicate(nums: number[]): boolean {
    let numsHash = new Map<Number, boolean>()
    
    for (let i = 0; i < nums.length; i++) {
        if(numsHash.has(nums[i])) {
            return true;
        }
        numsHash.set(nums[i], true)
    }

    return false;
};

console.log(containsDuplicate([1,2,3,1]))