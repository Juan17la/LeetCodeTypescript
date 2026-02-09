function removeDuplicates(nums: number[]): number{
    let left = 1;

    for (let right = 1; right < nums.length; right++) {
        if(nums[right] !== nums[right - 1]){
            nums[left] = nums[right]
            left++
        }
    }
    console.log(nums)
    return left;
};

console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))