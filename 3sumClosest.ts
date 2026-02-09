function threeSumClosest(nums: number[], target: number): number {
    
    nums.sort((a, b) => a - b);

    let res = 0;
    let minDiff = Infinity;

    for (let i = 0; i < nums.length; i++) {
        
        if( i > 0 && nums[i] === nums[i - 1] ) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1

        while (left < right) {
            
            let total = nums[i] + nums[left] + nums[right];

            const diff = Math.abs(total - target); 

            if(diff < minDiff){
                minDiff = diff;
                res = total 
            }

            if (total < target) {
                left += 1;
            } else if (total > target) {
                right -= 1;
            } else {
                return total;
            }

        }

    }

    return res;
};

console.log(threeSumClosest([-1,2,1,-4], 1))