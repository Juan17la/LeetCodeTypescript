function nextPermutation(nums: number[]): void {
    function reverse(nums: number[], start: number): void {
        let left = start;
        let right = nums.length - 1;

        while (left < right) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;

            left++;
            right--;
        }
    }
    
    let pivot = -1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            pivot = i;
            break;
        }
    }
    if (pivot !== -1) {
        for (let i = nums.length - 1; i > pivot; i--) {
            if (nums[i] > nums[pivot]) {

                // swap
                let temp = nums[i];
                nums[i] = nums[pivot];
                nums[pivot] = temp;

                break;
            }
        }
    }

    reverse(nums, pivot + 1);
}