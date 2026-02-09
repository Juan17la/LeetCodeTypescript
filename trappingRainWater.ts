function trap(height: number[]): number {
    let water = 0;

    for (let i = 1; i < height.length - 1; i++) {
        
        let left = i - 1;
        let right = i + 1;
        
        let maxLeft = height[left];
        let maxRight = height[right];
        
        while(left >= 0){

            if(height[left] > maxLeft){
                maxLeft = height[left]
            }
            left--

        }

        while (right < height.length){
            if(height[right] > maxRight){
                maxRight = height[right]
            }
            right++
        }

        let sum = Math.min(maxLeft, maxRight) - height[i]

        if (sum > 0){
            water += sum
        }

    }

    return water;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([4,2,0,3,2,5]))