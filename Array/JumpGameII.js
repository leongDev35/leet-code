

let nums = [1,2,1,1,1]

var canJump = function (nums) {
    let sumStep = 0;
    let init = 0;
    let L = nums.length - 1
    let maxStepInFor = 0;

    if (nums.length == 1) {
        return 0;
    }
    if (nums[0] >= L) {
        return 1;
    }
    for (let j = 0; j <= nums.length;) {
        if (nums[j] + j >= L) {
            sumStep++;
            return sumStep;
        }
        if(nums[j] == 0) {
            return false
        }
        for (let i = j; i <= nums[j] + j  ; i++) {
            if (nums[i] + i > maxStepInFor) {
                maxStepInFor = nums[i] + i;
                // init = nums[i];
                init = i;

            }
        }
        j = init 

        sumStep++;
        maxStepInFor = 0;
      
    }
    return false;
    
};
console.log(canJump(nums));