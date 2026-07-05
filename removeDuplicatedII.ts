function removeDuplicatesII(nums: number[]): number {
    
    let left = 0
    for(let right = 1; right < nums.length; right++){
        if(nums[left] === nums[right]){
            left++
        }
    }

    return left;
};

removeDuplicatesII([1,1,1,2,2,3])